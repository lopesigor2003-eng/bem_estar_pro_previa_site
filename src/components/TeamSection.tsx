import { TEAM_MEMBERS, TeamMember } from '../data/gymData.ts';
import { Award, UserCheck, Shield } from 'lucide-react';

export function TeamSection() {
  return (
    <section
      id="equipe"
      className="team-section relative py-20 md:py-28 cyber-grid"
      aria-label="Equipe de Profissionais e Especialistas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Credibilidade & Autoridade Técnica
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Nossa Equipe de <span className="text-yellow-400">Especialistas</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Profissionais devidamente registrados nos seus respectivos conselhos de classe (CREF, CRN, CREFITO), prontos para prestar orientação personalizada e segura.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member: TeamMember) => (
            <article
              key={member.id}
              className="glass-panel rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Member Photo */}
              <div className="relative aspect-[4/4] overflow-hidden bg-zinc-900">
                <img
                  src={member.avatar}
                  alt={`Foto de ${member.name}, ${member.role}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-yellow-400/30 text-[10px] font-mono text-yellow-400">
                    <Shield className="w-3 h-3 text-yellow-400" />
                    {member.crefOrRegister}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-yellow-400 block">
                    {member.role}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {member.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono mb-3">
                  <Award className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span className="truncate">{member.specialty}</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mt-auto pt-3 border-t border-white/10">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
