import { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/gymData.ts';
import { calculateBmi, calculateFitnessTargets, formatWhatsAppUrl, WorkoutGoal } from '../utils/calculator.ts';
import { GYM_INFO } from '../data/gymData.ts';
import { Dumbbell, Trophy, CheckCircle, Calculator, Zap, ArrowRight, Activity } from 'lucide-react';

interface ServicesSectionProps {
  onOpenTrialModal: () => void;
}

export function ServicesSection({ onOpenTrialModal }: ServicesSectionProps) {
  // Biometrics Calculator State
  const [weight, setWeight] = useState<string>('75');
  const [height, setHeight] = useState<string>('175');
  const [goal, setGoal] = useState<WorkoutGoal>('hipertrofia');
  const [calcResult, setCalcResult] = useState<any>(() => {
    try {
      const bmi = calculateBmi(75, 175);
      const targets = calculateFitnessTargets('hipertrofia', 75);
      return { ...bmi, ...targets };
    } catch {
      return null;
    }
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return;

    try {
      const bmi = calculateBmi(w, h);
      const targets = calculateFitnessTargets(goal, w);
      setCalcResult({ ...bmi, ...targets });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section
      id="servicos"
      className="services-section relative py-20 md:py-28 cyber-dots"
      aria-label="Nossos Serviços e Modalidades de Treinamento"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Especialidades de Treinamento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Nossos Serviços e <span className="text-yellow-400">Modalidades</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Metodologias desenhadas para a máxima eficiência neuromuscular. Equipamentos que respeitam os eixos biomecânicos corporais para garantir ganhos estéticos reais e proteção articular.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service: ServiceItem, idx: number) => {
            const isFisiculturismo = service.id === 'fisiculturismo';
            return (
              <article
                key={service.id}
                className="glass-panel rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden flex flex-col group relative"
              >
                {/* Header Badge */}
                <div className="p-6 sm:p-8 pb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      {isFisiculturismo ? (
                        <Trophy className="w-6 h-6" />
                      ) : (
                        <Dumbbell className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-yellow-400 block">
                        {service.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtitle & Description */}
                <div className="px-6 sm:px-8">
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights / Benefits List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-bold">
                      Diferenciais & Metodologia:
                    </h4>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-zinc-300"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-auto p-6 sm:p-8 pt-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    Acompanhamento Incluso
                  </span>
                  <a
                    href={formatWhatsAppUrl(
                      GYM_INFO.rawPhone,
                      `Olá! Gostaria de saber mais sobre a modalidade de ${service.title} na Bem Estar Pro.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold text-xs uppercase tracking-wider rounded-lg border border-yellow-400/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    aria-label={`Consultar sobre ${service.title} no WhatsApp`}
                  >
                    <span>Quero Treinar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Interactive Biometrics & Target Calculator (Futuristic Value-Add for 18-35 Audience) */}
        <div className="glass-panel-neon rounded-2xl p-6 sm:p-10 border border-yellow-400/30 shadow-[0_0_30px_rgba(255,255,0,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <Calculator className="w-3.5 h-3.5" />
                Simulador Cyber Fitness
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Calcule sua Meta de Treino & Proteína
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Descubra sua faixa de IMC esportivo e o volume de proteína diária estimado para seu objetivo na Bem Estar Pro.
              </p>

              <form onSubmit={handleCalculate} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="user-weight" className="block text-xs font-mono text-zinc-300 mb-1">
                      Peso (kg):
                    </label>
                    <input
                      id="user-weight"
                      type="number"
                      step="0.5"
                      min="35"
                      max="250"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-yellow-400"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="user-height" className="block text-xs font-mono text-zinc-300 mb-1">
                      Altura (cm):
                    </label>
                    <input
                      id="user-height"
                      type="number"
                      min="100"
                      max="240"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-yellow-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="user-goal" className="block text-xs font-mono text-zinc-300 mb-1">
                    Seu Objetivo Principal:
                  </label>
                  <select
                    id="user-goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value as WorkoutGoal)}
                    className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white font-sans text-sm focus:outline-none focus:border-yellow-400"
                  >
                    <option value="hipertrofia">Hipertrofia & Ganho de Massa Muscular</option>
                    <option value="fisiculturismo">Fisiculturismo & Simetria Competitiva</option>
                    <option value="emagrecimento">Emagrecimento & Definição Muscular</option>
                    <option value="condicionamento">Condicionamento Físico & Saúde</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Atualizar Diagnóstico</span>
                </button>
              </form>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-7 bg-zinc-950/80 rounded-xl p-6 border border-white/10">
              {calcResult && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                        Seu IMC
                      </span>
                      <span className="font-cyber font-bold text-2xl text-yellow-400">
                        {calcResult.bmi}
                      </span>
                      <span className="text-xs text-white block mt-1 font-medium">
                        {calcResult.category}
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                        Proteína Diária
                      </span>
                      <span className="font-cyber font-bold text-2xl text-white">
                        ~{calcResult.dailyProteinGrams}g
                      </span>
                      <span className="text-xs text-zinc-400 block mt-1">
                        Recomendado/dia
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-zinc-900/90 border border-white/10 text-center">
                      <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
                        Frequência Ideal
                      </span>
                      <span className="font-cyber font-bold text-2xl text-yellow-400">
                        {calcResult.recommendedWeeklyWorkouts}x
                      </span>
                      <span className="text-xs text-zinc-400 block mt-1">
                        treinos por semana
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-yellow-400/5 border border-yellow-400/20">
                    <div className="flex items-center gap-2 text-yellow-400 text-xs font-mono font-bold mb-1">
                      <Activity className="w-4 h-4" />
                      <span>DIRETRIZ RECOMENDADA PELO TIME PRO:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                      {calcResult.suggestedFocus}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-zinc-400">
                      Quer um plano individualizado com nosso nutricionista e personal?
                    </p>
                    <a
                      href={formatWhatsAppUrl(
                        GYM_INFO.rawPhone,
                        `Olá! Fiz o cálculo no site (IMC ${calcResult.bmi}, meta: ${goal}) e quero agendar meu treino na Bem Estar Pro!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-wider rounded-lg shrink-0 flex items-center gap-2"
                      aria-label="Enviar meu diagnóstico para o WhatsApp da Bem Estar Pro"
                    >
                      <span>Conversar com Treinador</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
