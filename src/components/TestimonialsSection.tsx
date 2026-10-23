import { TESTIMONIALS, Testimonial, GYM_INFO } from '../data/gymData.ts';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="testimonials-section relative py-20 md:py-28 bg-zinc-950/70 border-t border-b border-white/5"
      aria-label="Depoimentos e Avaliações de Alunos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Prova Social & Comunidade
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            O Que Nossos <span className="text-yellow-400">Alunos Dizem</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A credibilidade da Bem Estar Pro é comprovada por quem vive nossa rotina todos os dias. Veja por que somos uma das academias mais recomendadas de Santa Maria.
          </p>

          {/* Social Proof Pill linking to Google Maps */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-3 px-5 rounded-2xl glass-panel-neon border border-yellow-400/30">
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">
              Nota 4.9 • Mais de 55 avaliações no Google Maps
            </span>
            <a
              href={GYM_INFO.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-yellow-400 hover:text-yellow-300 underline underline-offset-2 ml-1"
              aria-label="Ver todas as mais de 55 avaliações no Google Maps (abre em nova aba)"
            >
              <span>Conferir no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t: Testimonial) => (
            <article
              key={t.id}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-yellow-400/40 transition-all duration-300 flex flex-col relative group"
            >
              <div className="flex items-center justify-between mb-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-yellow-400" aria-label="Avaliação 5 de 5 estrelas">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <MessageSquareQuote className="w-6 h-6 text-yellow-400/30 group-hover:text-yellow-400/60 transition-colors" />
              </div>

              {/* Highlight Title */}
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                "{t.highlight}"
              </h3>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                "{t.comment}"
              </p>

              {/* Student Profile */}
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover border border-yellow-400/40"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white truncate">{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-yellow-400 shrink-0" title="Aluno Verificado" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
