import { GYM_INFO } from '../data/gymData.ts';
import { formatWhatsAppUrl } from '../utils/calculator.ts';
import { Instagram, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre a Academia', href: '#sobre' },
    { label: 'Modalidades & Serviços', href: '#servicos' },
    { label: '13 Comodidades', href: '#comodidades' },
    { label: 'Galeria de Instalações', href: '#instalacoes' },
    { label: 'Localização & Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-black border-t border-yellow-400/20 text-zinc-400 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Grid & Neon Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-yellow-400/40 bg-zinc-950 flex items-center justify-center p-0.5">
                <img
                  src={GYM_INFO.logoUrl}
                  alt="Logotipo Bem Estar Pro"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <span className="font-cyber font-black tracking-wider text-xl text-white">
                BEM ESTAR <span className="text-yellow-400">PRO</span>
              </span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm mb-6">
              Sua academia completa em Santa Maria. Musculação de qualidade, climatização contínua e profissionais capacitados para elevar sua saúde e bem-estar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Seguir Bem Estar Pro no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={formatWhatsAppUrl(GYM_INFO.rawPhone, 'Olá! Vim pelo site da Bem Estar Pro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                aria-label="Enviar mensagem no WhatsApp oficial"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors inline-block py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold mb-4">
              Localização & Horários
            </h4>

            <div className="flex items-start gap-3 text-xs leading-relaxed text-zinc-300">
              <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <span>{GYM_INFO.address}</span>
            </div>

            <div className="flex items-start gap-3 text-xs leading-relaxed text-zinc-300">
              <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <p>Segunda a Sexta: {GYM_INFO.operatingHours.weekdays}</p>
                <p>Sábado: {GYM_INFO.operatingHours.saturday}</p>
                <p className="text-zinc-400">Domingo: {GYM_INFO.operatingHours.sunday}</p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                Central de Relacionamento WhatsApp:
              </span>
              <a
                href={formatWhatsAppUrl(GYM_INFO.rawPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-cyber font-bold text-yellow-400 hover:underline"
              >
                {GYM_INFO.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright 2026 & Accessibility & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-center sm:text-left">
            © 2026 Bem Estar Pro. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-zinc-400">
              WCAG 2.1 AA Acessível
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 text-zinc-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              aria-label="Voltar para o topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-yellow-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
