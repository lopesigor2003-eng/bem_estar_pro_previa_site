import { useEffect, useRef, useState } from 'react';
import { X, Send, CheckCircle, Zap } from 'lucide-react';
import { GYM_INFO } from '../data/gymData.ts';
import { formatWhatsAppUrl } from '../utils/calculator.ts';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modality, setModality] = useState('Musculação');
  const [period, setPeriod] = useState('Manhã (07h às 12h)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Olá! Gostaria de agendar minha Aula Experimental Gratuita na Bem Estar Pro!\n• Aluno: ${name}\n• WhatsApp: ${phone}\n• Modalidade: ${modality}\n• Turno preferido: ${period}`;
    const url = formatWhatsAppUrl(GYM_INFO.rawPhone, message);
    setSubmitted(true);
    
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
      setSubmitted(false);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="glass-panel-neon w-full max-w-lg rounded-2xl border border-yellow-400/40 p-6 sm:p-8 relative shadow-[0_0_50px_rgba(255,255,0,0.2)] bg-zinc-950/95"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-yellow-400 rounded-lg hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          aria-label="Fechar janela de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <Zap className="w-3.5 h-3.5" />
            Passe Livre 100% Gratuito
          </div>
          <h2 id="trial-modal-title" className="text-2xl font-bold text-white">
            Agendar Aula Experimental
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-1">
            Venha conhecer a estrutura da Bem Estar Pro em Santa Maria sem nenhum compromisso.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-12 h-12 text-yellow-400 mx-auto mb-3 animate-bounce" />
            <h3 className="text-lg font-bold text-white mb-1">
              Redirecionando para o WhatsApp...
            </h3>
            <p className="text-xs text-zinc-400">
              Nossa equipe já está pronta para confirmar seu horário.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-mono text-zinc-300 mb-1">
                Nome Completo:
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Lucas Ferreira"
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="modal-phone" className="block text-xs font-mono text-zinc-300 mb-1">
                WhatsApp com DDD:
              </label>
              <input
                id="modal-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(55) 99999-9999"
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-white/20 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-modality" className="block text-xs font-mono text-zinc-300 mb-1">
                  Modalidade:
                </label>
                <select
                  id="modal-modality"
                  value={modality}
                  onChange={(e) => setModality(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-xl text-white text-xs focus:outline-none focus:border-yellow-400"
                >
                  <option value="Musculação">Musculação de Alta Performance</option>
                  <option value="Fisiculturismo">Fisiculturismo & Estética</option>
                  <option value="Condicionamento">Condicionamento Físico</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-period" className="block text-xs font-mono text-zinc-300 mb-1">
                  Turno de Treino:
                </label>
                <select
                  id="modal-period"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-xl text-white text-xs focus:outline-none focus:border-yellow-400"
                >
                  <option value="Manhã (07h às 12h)">Manhã (07h às 12h)</option>
                  <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                  <option value="Noite (18h às 22h)">Noite (18h às 22h)</option>
                  <option value="Sábado (09h às 12h)">Sábado (09h às 12h)</option>
                </select>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 leading-snug">
              * Vagas limitadas por turno para garantir a atenção personalizada do nosso instrutor.
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,0,0.4)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirmar Agendamento no WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
