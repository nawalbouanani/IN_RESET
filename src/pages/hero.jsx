import React, { useState, useRef, useEffect } from 'react';
import NetworkAnimation from './networkAnimation.jsx';
import './hero.css';

const Hero = () => {
  // ... (estados y useEffects como los tenías, no hay cambios aquí) ...
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef(null);

  // Logros para el ticker
  const achievements = [
    "Premios Fundadoras 2024",
    "Featured Las Provincias", 
    "Premio UE Madrid",
    "Social Nest Foundation",
    "Valencia Plaza Interview",
    "FORINVEST 2024",
    "VDS 2024"
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log("✅ Video cargado correctamente");
      setIsVideoLoaded(true);
      setLoadingProgress(100);
    };

    const handleError = (e) => {
      console.error("❌ Error al cargar el video:", e);
      setVideoError(true);
    };

    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(0);
        const duration = video.duration;
        if (duration > 0) {
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(Math.min(progress, 95));
        }
      }
    };

    const handleLoadStart = () => {
      console.log("🔄 Iniciando carga del video...");
      setLoadingProgress(10);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      if (loadingProgress < 90 && !isVideoLoaded) {
        setLoadingProgress(prev => Math.min(prev + Math.random() * 15, 90));
      }
    }, 500);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      clearInterval(progressInterval);
    };
  }, [loadingProgress, isVideoLoaded]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch(err => {
          console.error("Error al reproducir el video:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const LoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-content text-center text-white">
        <div className="loading-spinner"></div>
        <div className="loading-title">
          PREPARANDO TU EXPERIENCIA
        </div>
        <div className="loading-bar-container">
          <div
            className="loading-bar"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <div className="loading-percentage">
          {Math.round(loadingProgress)}%
        </div>
        </div>
    </div>
  );

  const AchievementsTicker = () => (
    <div className="achievements-ticker">
      <div className="ticker-container">
        <div className="ticker-content">
          {/* Triplicamos el contenido para un loop perfecto */}
          {[...achievements, ...achievements, ...achievements].map((achievement, index) => (
            <span key={index} className="ticker-item">
              {achievement}
              <span className="ticker-separator">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero-section">
      {/* Loading Screen */}
      {!isVideoLoaded && !videoError && <LoadingScreen />}

      {/* Network Animation Background - Reemplaza el video */}
      <NetworkAnimation />

      {/* Contenido principal del Hero */}
      <div className="hero-content d-flex flex-column justify-content-center align-items-center"> {/* Centra todo el contenido vertical y horizontalmente */}
        <div className="container-fluid"> {/* Elimino h-100 de aquí, ya lo tiene hero-content */}
          <div className="row justify-content-center"> {/* Centra la columna dentro de la fila */}
            {/* text-center asegura que el texto se centre dentro de la columna */}
            <div className="col-12 col-lg-7 text-center"> {/* Eliminamos text-lg-start para que siempre esté centrado */}
              <div className="hero-text-container"> {/* hero-text-container ya no necesita text-align: center */}
                <h1 className="hero-title-purple fw-bold mb-0 animate-fade-up fs-hero-title-main">
                  Convertimos Desafíos
                </h1>
                <h1 className="hero-title-purple fw-bold mb-3 animate-fade-up animate-delay-1 fs-hero-title-secondary">
                  en Oportunidades
                </h1>
                {/* La descripción ahora usa text-center y max-width con margin-auto en CSS */}
                <p className="hero-description-purple mb-4 animate-fade-up animate-delay-2"> {/* Quitamos fs-hero-description ya que el tamaño se define directamente en hero-description-purple */}
                  Cada etapa de la vida de una mujer presenta desafíos únicos. Nuestra visión? Cada desafío puede transformarse en un proyecto escalable con impacto social y económico.
                </p>
                <div className="animate-fade-up animate-delay-3 mb-5">
                  <button className="btn btn-tech-compact btn-lg px-4 py-2">
                    Transforma tu historia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker de Logros - Posicionado en la parte inferior */}
      <AchievementsTicker />
    </section>
  );
};

export default Hero;