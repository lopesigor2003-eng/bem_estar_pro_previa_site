import { useState } from 'react';
import { GYM_INFO } from '../data/gymData.ts';
import { formatWhatsAppUrl } from '../utils/calculator.ts';
import { ShieldCheck, Star, ArrowRight, Zap, Dumbbell, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenTrialModal: () => void;
}

export function HeroSection({ onOpenTrialModal }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden cyber-grid"
      aria-label="Apresentação Principal da Bem Estar Pro"
    >
      {/* Cyber Neon Ambient Glow Background Orbs */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-48 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Semantic Content & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Cyberpunk Top Tag / Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-wide mb-6 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span>ALTA PERFORMANCE • SANTA MARIA - RS</span>
            </div>

            {/* Unique H1 (Mandatory: Exactly ONE H1 on the page) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Bem Estar Pro:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-200 drop-shadow-[0_0_25px_rgba(255,255,0,0.35)]">
                Sua Academia Completa
              </span>{' '}
              para um Corpo e Mente em Sintonia
            </h1>

            {/* Official Description from prompt */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal mb-8 max-w-2xl border-l-2 border-yellow-400/80 pl-4 bg-gradient-to-r from-yellow-400/5 to-transparent py-1">
              {GYM_INFO.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(255,255,0,0.5)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Agendar aula experimental gratuita agora"
              >
                <span>Agendar Aula Grátis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 glass-panel hover:bg-white/10 text-white hover:text-yellow-400 font-semibold text-sm uppercase tracking-wider rounded-xl border border-white/15 hover:border-yellow-400/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <Dumbbell className="w-4 h-4 text-yellow-400" />
                <span>Nossas Modalidades</span>
              </a>
            </div>

            {/* Social Proof & Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 font-cyber font-bold text-xl sm:text-2xl">
                  <span>{GYM_INFO.reviewsCount}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 inline" />
                </div>
                <p className="text-xs text-zinc-400 font-medium">Avaliações 5 Estrelas</p>
              </div>

              <div>
                <div className="text-white font-cyber font-bold text-xl sm:text-2xl">
                  100%
                </div>
                <p className="text-xs text-zinc-400 font-medium">Climatizado (Ar/Aquec.)</p>
              </div>

              <div>
                <div className="text-yellow-400 font-cyber font-bold text-xl sm:text-2xl">
                  PRO
                </div>
                <p className="text-xs text-zinc-400 font-medium">Musculação & Fisiculturismo</p>
              </div>
            </div>

          </div>

          {/* Right Column: Principal Image with Cyber HUD Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Cyber Frame Corners */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-yellow-400 z-20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-yellow-400 z-20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-yellow-400 z-20 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-yellow-400 z-20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-yellow-400/30 shadow-[0_0_35px_rgba(255,255,0,0.15)] bg-zinc-950 aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5]">
                
                {/* User provided media from Google Drive with video walkthrough and photo fallback */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero-bemestarpro.jpg"
                  className="w-full h-full object-cover"
                  aria-label="Vídeo do espaço e instalações da Bem Estar Pro"
                >
                  <source src="/hero-bemestarpro.mp4" type="video/mp4" />
                  <img
                    src="/hero-bemestarpro.jpg"
                    alt="Espaço e equipamentos da academia Bem Estar Pro em Santa Maria"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </video>

                {/* Cyber Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Floating HUD Card 1: Local & Credibility */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-zinc-200">
                    <Compass className="w-3 h-3 text-yellow-400" />
                    N. Sra. do Rosário / Medianeira
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-yellow-400 text-black text-[11px] font-bold tracking-wider">
                    ESTRUTURA PRO
                  </span>
                </div>

                {/* Floating HUD Card 2: Bottom Status & Highlights */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel-neon p-4 rounded-xl border border-yellow-400/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-yellow-400" />
                      Espaço Acessível & Completo
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">13 Comodidades</span>
                  </div>
                  <p className="text-xs text-zinc-200 leading-snug">
                    Musculação de alta biomecânica, vestiários com ducha, fisioterapeuta e nutricionista.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
