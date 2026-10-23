import { useState, useEffect, useRef } from 'react';
import { CAROUSEL_SLIDES } from '../data/gymData.ts';
import { ChevronLeft, ChevronRight, Pause, Play, Camera } from 'lucide-react';

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fallbackGymImages = [
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  ];

  // Auto-rotation every 5 seconds (5000ms) as mandated in specifications
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section
      id="instalacoes"
      className="carousel-section relative py-20 md:py-28 cyber-grid"
      aria-label="Galeria de Instalações e Equipamentos da Academia"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-yellow-400" />
            Fotos Reais da Academia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Conheça Nossas <span className="text-yellow-400">Instalações</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Veja as fotos originais do espaço, maquinário e áreas de treino da Bem Estar Pro em Santa Maria. Transição automática a cada 5 segundos.
          </p>
        </div>

        {/* Carousel Frame - Preserving Original Aspect Ratio */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden glass-panel border border-yellow-400/30 shadow-[0_0_40px_rgba(255,255,0,0.15)] bg-zinc-950">
          
          {/* Main Slide Viewer - Uses object-contain to preserve original photo dimensions without cropping */}
          <div className="relative h-[440px] sm:h-[500px] md:h-[580px] bg-black/90 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
            {CAROUSEL_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;
              const hasError = imageErrors[index];
              const imageSrc = hasError
                ? fallbackGymImages[index % fallbackGymImages.length]
                : slide.directImageUrl || slide.url;

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Subtle blurred backdrop using the same image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-20 scale-110 pointer-events-none"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                    aria-hidden="true"
                  />

                  {/* Original Image Uncropped */}
                  <img
                    src={imageSrc}
                    alt={`Instalação Bem Estar Pro: ${slide.title}`}
                    loading="lazy"
                    decoding="async"
                    onError={() => {
                      if (!imageErrors[index]) {
                        setImageErrors((prev) => ({ ...prev, [index]: true }));
                      }
                    }}
                    className="relative z-10 max-h-[420px] sm:max-h-[480px] md:max-h-[550px] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 z-20">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-black/80 hover:bg-yellow-400 text-white hover:text-black border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 shadow-lg"
              aria-label="Foto anterior das instalações"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 z-20">
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-black/80 hover:bg-yellow-400 text-white hover:text-black border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 shadow-lg"
              aria-label="Próxima foto das instalações"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Top Bar with Auto-play Toggle and Counter */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono text-zinc-300 hover:text-yellow-400 transition-colors"
              aria-label={isPlaying ? 'Pausar rotação automática de 5 segundos' : 'Retomar rotação automática de 5 segundos'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-yellow-400" /> : <Play className="w-3.5 h-3.5 text-yellow-400" />}
              <span>{isPlaying ? 'Auto (5s)' : 'Pausado'}</span>
            </button>
          </div>

          {/* Dedicated Caption HUD Bar (Cleanly placed below the original photo) */}
          <div className="p-5 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-yellow-400 text-black text-xs font-mono font-bold uppercase tracking-wider">
                  {currentSlide.tag}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Foto {currentIndex + 1} de {CAROUSEL_SLIDES.length} (Formato Original)
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentSlide.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                {currentSlide.description}
              </p>
            </div>

            {/* Thumbnail / Dot Selector */}
            <div className="flex items-center gap-2 shrink-0">
              {CAROUSEL_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 transition-all rounded-full ${
                    idx === currentIndex
                      ? 'w-8 bg-yellow-400 shadow-[0_0_8px_rgba(255,255,0,0.8)]'
                      : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Ir para a foto original ${idx + 1}`}
                  aria-current={idx === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
