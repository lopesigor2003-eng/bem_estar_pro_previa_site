import { useState, useEffect } from 'react';
import { GYM_INFO } from '../data/gymData.ts';
import { checkGymOpenStatus, formatWhatsAppUrl } from '../utils/calculator.ts';
import { Menu, X, MessageCircle, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenTrialModal: () => void;
}

export function Header({ onOpenTrialModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(() => checkGymOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Refresh status every 2 minutes
    const interval = setInterval(() => {
      setStatus(checkGymOpenStatus());
    }, 120000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Comodidades', href: '#comodidades' },
    { label: 'Instalações', href: '#instalacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-400/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-black/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Gym Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg p-1"
            aria-label="Bem Estar Pro - Ir para o início"
          >
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-yellow-400/40 bg-zinc-950 flex items-center justify-center p-0.5 group-hover:border-yellow-400 transition-colors">
              <img
                src={GYM_INFO.logoUrl}
                alt="Logotipo Bem Estar Pro"
                loading="eager"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  // Fallback to high-contrast stylized SVG monogram if image network is constrained
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full bg-yellow-400 text-black font-extrabold items-center justify-center text-xs tracking-tighter"
                aria-hidden="true"
              >
                BEP
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-cyber font-black tracking-wider text-lg sm:text-xl text-white group-hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                BEM ESTAR <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(255,255,0,0.6)]">PRO</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  Santa Maria • RS
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-zinc-300">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen
                        ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]'
                        : 'bg-zinc-500'
                    }`}
                  />
                  {status.isOpen ? 'Aberto' : 'Fechado'}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors rounded-md hover:bg-yellow-400/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenTrialModal}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-yellow-400 hover:text-yellow-400 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              aria-label="Agendar aula experimental gratuita"
            >
              Aula Experimental
            </button>

            <a
              href={formatWhatsAppUrl(GYM_INFO.rawPhone, 'Olá! Gostaria de falar com a equipe da Bem Estar Pro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(255,255,0,0.4)] transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fale Conosco pelo WhatsApp oficial (05532178863)"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={formatWhatsAppUrl(GYM_INFO.rawPhone, 'Olá! Gostaria de informações.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black bg-yellow-400 rounded-lg shadow-sm"
              aria-label="WhatsApp direto"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-lg border border-white/10"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-neon border-t border-yellow-400/30 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-zinc-200 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-yellow-400 border border-yellow-400/50 rounded-lg"
            >
              Agendar Aula Experimental
            </button>

            <a
              href={formatWhatsAppUrl(GYM_INFO.rawPhone, 'Olá! Vim pelo site da Bem Estar Pro.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-yellow-400 text-black font-bold text-sm uppercase tracking-wider rounded-lg shadow-[0_0_15px_rgba(255,255,0,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale Conosco (WhatsApp)</span>
            </a>

            <div className="mt-3 text-xs text-zinc-400 flex items-center gap-2 justify-center">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              <span>{status.statusText}</span>
            </div>
            <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 justify-center">
              <MapPin className="w-3 h-3 text-yellow-400" />
              <span className="truncate">Nossa Sra. Medianeira, 986</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
