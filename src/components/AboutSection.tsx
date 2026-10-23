import { Target, Zap, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Biomecânica de Precisão',
      description:
        'Maquinário convergente e divergente com curvas de resistência calculadas para estimular as fibras musculares com o menor estresse nas articulações.',
    },
    {
      icon: HeartPulse,
      title: 'Qualidade de Vida Integral',
      description:
        'Acreditamos que o exercício físico é o maior catalisador de energia vital, foco mental e longevidade para estudantes e profissionais dinâmicos.',
    },
    {
      icon: Zap,
      title: 'Ambiente Motivador & Climatizado',
      description:
        'Espaço com climatização de alta performance (aquecedor no inverno e ar condicionado no verão) e a energia ideal para impulsionar seu treino diário.',
    },
    {
      icon: Sparkles,
      title: 'Corpo Multidisciplinar',
      description:
        'Integração direta de personal trainers certificados, fisioterapeuta do esporte e nutricionista para acelerar seus resultados com respaldo científico.',
    },
  ];

  return (
    <section
      id="sobre"
      className="about-section relative py-20 md:py-28 bg-zinc-950/60 border-t border-b border-white/5 overflow-hidden"
      aria-label="Sobre a Academia Bem Estar Pro"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Nossa Filosofia & Estrutura
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Sobre a <span className="text-yellow-400">Bem Estar Pro</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Nascemos em Santa Maria com a missão clara de transformar a experiência de treino em algo inspirador, técnico e eficiente. Seja você um praticante recreativo em busca de mais disposição ou um atleta focado em hipertrofia e estética máxima, nosso espaço foi lapidado para o seu ápice físico.
          </p>
        </div>

        {/* Narrative Expansion Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400 rounded-l-2xl" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>Energia, Ciência e Comunidade em Nossa Senhora do Rosário</span>
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              Localizada estrategicamente na região de Nossa Senhora do Rosário com acesso imediato pela Avenida Medianeira, a Bem Estar Academias PRO quebra o padrão das academias genéricas. Criamos um ecossistema esportivo focado em jovens, universitários e profissionais de 18 a 35 anos que valorizam precisão técnica, acolhimento genuíno e um ambiente vibrante.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
              Aqui, cada detalhe foi concebido para eliminar atritos: desde estacionamento próprio e acessibilidade para cadeirantes, até vestiários completos com chuveiros aquecidos e itens de higiene pessoal. Você treina, evolui e se recupera com o mais alto padrão.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Supervisão técnica atenta e sem julgamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Climatização inteligente em qualquer estação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Espaço inclusivo e adaptado para todos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Integração física, nutricional e fisioterapêutica</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-yellow-400/20 text-center flex flex-col items-center justify-center">
              <span className="font-cyber font-black text-3xl sm:text-4xl text-yellow-400 mb-1">
                55+
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold">
                Avaliações Positivas
              </span>
              <span className="text-[11px] text-zinc-400 mt-1">Google Maps</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center">
              <span className="font-cyber font-black text-3xl sm:text-4xl text-white mb-1">
                13
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold">
                Comodidades
              </span>
              <span className="text-[11px] text-zinc-400 mt-1">Estrutura Completa</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center">
              <span className="font-cyber font-black text-3xl sm:text-4xl text-white mb-1">
                100%
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold">
                Inclusivo
              </span>
              <span className="text-[11px] text-zinc-400 mt-1">Espaço Acessível</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-yellow-400/20 text-center flex flex-col items-center justify-center">
              <span className="font-cyber font-black text-3xl sm:text-4xl text-yellow-400 mb-1">
                PRO
              </span>
              <span className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold">
                Especialistas
              </span>
              <span className="text-[11px] text-zinc-400 mt-1">Personal & Saúde</span>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-4 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
