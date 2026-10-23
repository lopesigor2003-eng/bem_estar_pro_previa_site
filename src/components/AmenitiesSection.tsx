import {
  Wind,
  Flame,
  Lock,
  Droplets,
  Accessibility,
  Car,
  Activity,
  Sparkles,
  Coffee,
  Apple,
  UserCheck,
  ShieldCheck,
  Wifi,
  LucideIcon,
} from 'lucide-react';
import { AMENITIES, Amenity } from '../data/gymData.ts';

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Flame,
  Lock,
  Droplets,
  Accessibility,
  Car,
  Activity,
  Sparkles,
  Coffee,
  Apple,
  UserCheck,
  ShieldCheck,
  Wifi,
};

export function AmenitiesSection() {
  return (
    <section
      id="comodidades"
      className="amenities-section relative py-20 md:py-28 bg-black/80 border-t border-b border-white/5"
      aria-label="Comodidades e Infraestrutura da Academia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Infraestrutura Completa (13 Comodidades)
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Comodidades que <span className="text-yellow-400">Oferecemos</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Cada detalhe foi pensado para proporcionar a melhor qualidade de vida aos frequentadores: conforto térmico em todas as estações, segurança para seus pertences, acessibilidade total e acompanhamento de saúde.
          </p>
        </div>

        {/* 13 Amenities Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {AMENITIES.map((amenity: Amenity) => {
            const Icon = iconMap[amenity.iconName] || ShieldCheck;
            return (
              <div
                key={amenity.id}
                className="glass-panel p-5 sm:p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    {amenity.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {amenity.name}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-auto">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Highlight */}
        <div className="mt-12 p-6 rounded-2xl glass-panel-neon border border-yellow-400/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-bold block mb-1">
              Padrão de Qualidade Bem Estar Pro
            </span>
            <p className="text-sm text-zinc-200">
              Todas as 13 comodidades estão inclusas para alunos matriculados, sem taxas ocultas.
            </p>
          </div>
          <a
            href="#contato"
            className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
          >
            Conhecer Presencialmente
          </a>
        </div>

      </div>
    </section>
  );
}
