import React, { useEffect, useRef, useState } from 'react';

// --- Perlin Noise Implementation (Compact) ---
// From: https://gist.github.com/banksean/3045220
// Simplified for this specific use case
const PerlinNoise = function() {
  this.p = new Array(512);
  this.permutation = new Array(256);
  this.p_perm = new Array(256);

  for (let i = 0; i < 256; i++) {
    this.permutation[i] = i;
  }

  for (let i = 0; i < 256; i++) {
    const r = Math.floor(Math.random() * (256 - i)) + i;
    const aux = this.permutation[i];
    this.permutation[i] = this.permutation[r];
    this.permutation[r] = aux;
  }

  for (let i = 0; i < 512; i++) {
    this.p[i] = this.permutation[i % 256];
  }

  for (let i = 0; i < 256; i++) {
    this.p_perm[i] = this.p[i];
  }
};

PerlinNoise.prototype = {
  grad: function(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  },

  noise: function(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = x * x * (3 - 2 * x);
    const v = y * y * (3 - 2 * y);
    const w = z * z * (3 - 2 * z);

    const A = this.p_perm[X] + Y;
    const AA = this.p_perm[A] + Z;
    const AB = this.p_perm[A + 1] + Z;
    const B = this.p_perm[X + 1] + Y;
    const BA = this.p_perm[B] + Z;
    const BB = this.p_perm[B + 1] + Z;

    return this.lerp(w,
      this.lerp(v,
        this.lerp(u, this.grad(this.p_perm[AA], x, y, z),
          this.grad(this.p_perm[BA], x - 1, y, z)),
        this.lerp(u, this.grad(this.p_perm[AB], x, y - 1, z),
          this.grad(this.p_perm[BB], x - 1, y - 1, z))),
      this.lerp(v,
        this.lerp(u, this.grad(this.p_perm[AA + 1], x, y, z - 1),
          this.grad(this.p_perm[BA + 1], x - 1, y, z - 1)),
        this.lerp(u, this.grad(this.p_perm[AB + 1], x, y - 1, z - 1),
          this.grad(this.p_perm[BB + 1], x - 1, y - 1, z - 1))));
  },

  lerp: function(t, a, b) {
    return a + t * (b - a);
  }
};
// --- End Perlin Noise Implementation ---


const NetworkAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });
  const nodesRef = useRef([]);
  const perlin = useRef(new PerlinNoise());


  // Configuración de la animación
  const config = {
    nodeCount: 200, 
    maxDistance: 150,
    nodeSize: 3,
    speed: 0.005,
    mouseInfluence: 350, 
    mouseRepulsionForce: 0.02, 
    mouseZInfluence: 0.3, 
    depthRange: 600, 
    fov: 400, 
    tunnelSpeed: 2.0, 
    
    // Configuraciones de sombra individual
    shadowBaseOffsetY: 30,
    shadowDepthOffsetYScale: 0.5,
    shadowNearBlur: 2,
    shadowFarBlur: 20,
    shadowNearOpacity: 0.6,
    shadowFarOpacity: 0.1,

    colors: {
      background: '#0a0a0a', // Color de fondo del canvas
      nodes: [ // Colores para las partículas
        '#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE', 
        '#E879F9', '#F0ABFC', '#7C3AED', '#9333EA', 
        '#FF69B4', '#EE82EE' 
      ],
      connections: {
        base: 'rgba(124, 22, 128, 0.1)', // Color base de las conexiones
      }
    }
  };

  // Clase para cada nodo (partícula)
  class Node {
    constructor(canvas, perlinNoiseInstance) {
      this.canvas = canvas;
      this.perlin = perlinNoiseInstance;
      this.reset();
      this.color = config.colors.nodes[Math.floor(Math.random() * config.colors.nodes.length)];
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.noiseOffsetX = Math.random() * 1000;
      this.noiseOffsetY = Math.random() * 1000;
      this.noiseOffsetZ = Math.random() * 1000;
      this.shapeOscillationPhase = Math.random() * Math.PI * 2;
    }

    reset() {
      // Posición inicial aleatoria para las partículas
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
      this.z = Math.random() * config.fov * 2 - config.fov / 2; 

      this.vx = (Math.random() - 0.5) * config.speed * 20;
      this.vy = (Math.random() - 0.5) * config.speed * 20;
    }

    update(time) {
      const noiseX = this.perlin.noise(this.noiseOffsetX + time * 0.00005, 0, 0);
      const noiseY = this.perlin.noise(0, this.noiseOffsetY + time * 0.00005, 0);

      this.x += noiseX * 0.5 + this.vx;
      this.y += noiseY * 0.5 + this.vy;
      
      this.z -= config.tunnelSpeed; // Movimiento frontal constante (efecto túnel)

      // Influencia del mouse si está activo
      if (mouseRef.current.isHovering) {
        const projectedScale = config.fov / (config.fov + this.z);
        const projectedX = this.x * projectedScale;
        const projectedY = this.y * projectedScale;

        const dx = mouseRef.current.x - projectedX;
        const dy = mouseRef.current.y - projectedY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < config.mouseInfluence) {
          const force = (config.mouseInfluence - distance) / config.mouseInfluence; 
          this.vx -= dx * force * config.mouseRepulsionForce;
          this.vy -= dy * force * config.mouseRepulsionForce;
          this.z += (Math.random() - 0.5) * force * config.mouseZInfluence; 
        }
      }

      this.vx *= 0.98; // Fricción
      this.vy *= 0.98;

      const projectedScale = config.fov / (config.fov + this.z);
      const projectedX = this.x * projectedScale;
      const projectedY = this.y * projectedScale;

      // Reiniciar nodo si sale de la vista
      if (this.z < -config.fov || projectedX < -50 || projectedX > this.canvas.width + 50 || projectedY < -50 || projectedY > this.canvas.height + 50) {
        this.reset();
        this.z = config.depthRange; 
      }
    }

    draw(ctx, time) {
      const projectedScale = config.fov / (config.fov + this.z);
      const x = this.x * projectedScale;
      const y = this.y * projectedScale;
      const size = config.nodeSize * projectedScale;

      if (size < 0.5) return; 

      // Efecto de pulsación y oscilación de forma
      const pulse = Math.sin(time * 0.002 + this.pulsePhase) * 0.3 + 0.7;
      const finalSize = size * pulse;

      const shapeOscillation = Math.sin(time * 0.001 + this.shapeOscillationPhase) * 0.3 + 1;
      const rotation = Math.sin(time * 0.0005 + this.shapeOscillationPhase) * Math.PI / 8;

      // --- Dibujar Sombra ---
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const normalizedZ = (this.z + config.depthRange / 2) / config.depthRange;
      
      const shadowBlur = config.shadowNearBlur + (config.shadowFarBlur - config.shadowNearBlur) * normalizedZ;
      const shadowOpacity = config.shadowNearOpacity + (config.shadowFarOpacity - config.shadowNearOpacity) * normalizedZ;

      const r = parseInt(this.color.substring(1, 3), 16);
      const g = parseInt(this.color.substring(3, 5), 16);
      const b = parseInt(this.color.substring(5, 7), 16);
      const shadowColor = `rgba(${Math.floor(r * 0.5)}, ${Math.floor(g * 0.5)}, ${Math.floor(b * 0.5)}, ${shadowOpacity})`;

      ctx.shadowColor = shadowColor;
      ctx.shadowBlur = shadowBlur;
      ctx.shadowOffsetX = config.shadowBaseOffsetY * (this.z / (config.depthRange / 2)) * 0.2;
      ctx.shadowOffsetY = config.shadowBaseOffsetY + (config.shadowBaseOffsetY * config.shadowDepthOffsetYScale * normalizedZ); 

      ctx.beginPath();
      ctx.ellipse(0, 0, finalSize * shapeOscillation, finalSize / shapeOscillation, 0, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();

      // --- Dibujar Glow ---
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, finalSize * 3);
      gradient.addColorStop(0, this.color);
      gradient.addColorStop(0.5, this.color + '80'); 
      gradient.addColorStop(1, this.color + '00'); 

      ctx.beginPath();
      ctx.arc(x, y, finalSize * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // --- Dibujar Nodo Sólido ---
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, finalSize * shapeOscillation, finalSize / shapeOscillation, 0, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  // Inicializar canvas y nodos
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      nodesRef.current = [];
      for (let i = 0; i < config.nodeCount; i++) {
        nodesRef.current.push(new Node(canvas, perlin.current));
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Bucle de animación
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animate = (time = 0) => {
      // Limpiar el canvas
      ctx.fillStyle = config.colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ordenar nodos por Z para una perspectiva correcta
      nodesRef.current.sort((a, b) => a.z - b.z);

      // Actualizar y dibujar cada nodo
      nodesRef.current.forEach(node => {
        node.update(time);
        node.draw(ctx, time);
      });

      // Dibujar conexiones entre nodos cercanos
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const nodeA = nodesRef.current[i];
          const nodeB = nodesRef.current[j];

          // Proyectar nodos 3D a 2D
          const projectedA = {
            x: nodeA.x * (config.fov / (config.fov + nodeA.z)),
            y: nodeA.y * (config.fov / (config.fov + nodeA.z))
          };
          const projectedB = {
            x: nodeB.x * (config.fov / (config.fov + nodeB.z)),
            y: nodeB.y * (config.fov / (config.fov + nodeB.z))
          };

          const dx = projectedA.x - projectedB.x;
          const dy = projectedA.y - projectedB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Dibujar conexión si están lo suficientemente cerca en 2D
          if (distance < config.maxDistance) {
            // Calcular opacidad basada en la profundidad (z) y la distancia en 2D
            const opacityZ = 1 - Math.abs(nodeA.z + nodeB.z) / (2 * config.depthRange);
            const opacity2D = (1 - (distance / config.maxDistance));
            const finalOpacity = Math.min(opacityZ, opacity2D) * 0.6; // Multiplicador para hacerlas más sutiles

            ctx.beginPath();
            ctx.moveTo(projectedA.x, projectedA.y);
            ctx.lineTo(projectedB.x, projectedB.y);

            // Siempre se usa el color base y opacidad calculada, sin cambio al hover
            ctx.strokeStyle = config.colors.connections.base.replace('0.1', (finalOpacity * 0.5).toString());
            ctx.lineWidth = 1;
            
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Eventos del mouse
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // Ajusta la posición del mouse relativa al canvas
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseEnter = () => {
    mouseRef.current.isHovering = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.isHovering = false;
  };

  return (
    <div className="network-animation">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1, // Asegura que esté en la capa de fondo (pero visible)
          pointerEvents: 'auto' // ¡Este canvas SÍ debe capturar eventos del mouse!
        }}
      />

      {/* Estilos CSS específicos para este componente (scoped CSS-in-JS con styled-jsx) */}
      <style jsx>{`
        .network-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1; /* También en la capa de fondo */
          pointer-events: none; /* Permite que los eventos del mouse pasen a través de este div contenedor */
        }
      `}</style>
    </div>
  );
};

export default NetworkAnimation;