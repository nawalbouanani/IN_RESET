import React, { useState, useRef, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef(null);

  // ✅ RUTA CORREGIDA según tu estructura de carpetas
  const videoUrls = [
    "./src/assets/img/avatarhero.mp4",
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
      setVideoError(true); // ✅ CORREGIDO: era setVideo.Error(true)
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

  return (
    <section className="hero-section">
      {/* Loading Screen */}
      {!isVideoLoaded && !videoError && <LoadingScreen />}

      {/* Video Background */}
      {!videoError ? (
        <video
          ref={videoRef}
          className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            display: videoError ? 'none' : 'block',
            opacity: isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          {videoUrls.map((url, index) => (
            <source key={index} src={url} type="video/mp4" />
          ))}
          <p>Tu navegador no soporta el elemento video.</p>
        </video>
      ) : (
        <div className="hero-fallback">
          <p className="fallback-text">
            Creando tu espacio de transformación...
          </p>
        </div>
      )}

      {/* Contenido principal del Hero - Centrado verticalmente */}
      <div className="hero-content">
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center justify-content-center justify-content-lg-start">
            {/* Contenido principal alineado a la izquierda en desktop, centrado en mobile */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <div className="hero-text-container">
                {/* ✅ TEXTOS EN PÚRPURA - Centrados verticalmente */}
                <h1 className="hero-title-purple fw-bold mb-0 animate-fade-up fs-hero-title-main">
                  Convertimos Desafíos
                </h1>
                <h1 className="hero-title-purple fw-bold mb-5 animate-fade-up animate-delay-1 fs-hero-title-secondary">
                  en Oportunidades
                </h1>
                <p className="hero-description-purple mb-5 animate-fade-up animate-delay-2 fs-hero-description">
                  Cada etapa de la vida de una mujer presenta desafíos únicos. Nuestra visión? Cada desafío puede transformarse en un proyecto escalable con impacto social y económico.
                </p>
                <div className="animate-fade-up animate-delay-3">
                  <button className="btn btn-tech-compact btn-lg px-4 py-3">
                    Transforma tu historia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;