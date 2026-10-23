import { useState } from 'react';
import { GYM_INFO } from '../data/gymData.ts';
import { checkGymOpenStatus, formatWhatsAppUrl } from '../utils/calculator.ts';
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Send,
  CheckCircle,
  Copy,
  Check,
  Calendar,
} from 'lucide-react';

export function ContactLocationSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Manhã (07:00 às 11:00)');
  const [interest, setInterest] = useState('Musculação de Alta Performance');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const status = checkGymOpenStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Olá! Meu nome é ${name}. Gostaria de agendar uma aula experimental na Bem Estar Pro.\n• Modalidade: ${interest}\n• Horário de preferência: ${preferredTime}\n• Contato: ${phone}`;
    const url = formatWhatsAppUrl(GYM_INFO.rawPhone, message);
    setFormSubmitted(true);
    
    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="contact-location-section relative py-20 md:py-28 bg-zinc-950/80 border-t border-b border-white/5"
      aria-label="Localização e Informações de Contato"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono font-medium tracking-widest uppercase mb-3">
            Localização & Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Onde Estamos e <span className="text-yellow-400">Como Nos Encontrar</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Localizada no coração de Santa Maria, com acesso facilitado pela Avenida Medianeira, estacionamento e total acessibilidade. Venha nos visitar ou mande uma mensagem direta.
          </p>
        </div>

        {/* Content Grid: Contact Cards + Interactive Scheduler + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Contact Details & Scheduler Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-wider text-yellow-400 font-bold mb-1">
                      Endereço Completo
                    </h3>
                    <p className="text-sm text-zinc-200 leading-relaxed font-medium">
                      {GYM_INFO.address}
                    </p>
                    <span className="text-xs text-zinc-400 mt-1 block">
                      Região de Nossa Senhora do Rosário / Medianeira
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-white/5 hover:bg-yellow-400 hover:text-black text-zinc-300 transition-colors shrink-0"
                  title="Copiar endereço"
                  aria-label="Copiar endereço para área de transferência"
                >
                  {copiedAddress ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-yellow-400 font-bold">
                    Horário de Funcionamento
                  </h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-500'
                      }`}
                    />
                    <span className="text-xs font-semibold text-zinc-200">
                      {status.statusText}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono pt-3 border-t border-white/10">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Segunda a Sexta:</span>
                  <span className="text-white font-bold">{GYM_INFO.operatingHours.weekdays}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-zinc-400">Sábado:</span>
                  <span className="text-white font-bold">{GYM_INFO.operatingHours.saturday}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-400">Domingo:</span>
                  <span className="text-red-400 font-bold">{GYM_INFO.operatingHours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={formatWhatsAppUrl(GYM_INFO.rawPhone, 'Olá! Gostaria de falar com a Bem Estar Pro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-yellow-400/30 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all flex items-center gap-3 group"
                aria-label="Conversar no WhatsApp 05532178863"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-400 text-black flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                    WhatsApp Direto
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors truncate block">
                    {GYM_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-white/10 hover:border-yellow-400/50 hover:bg-white/5 transition-all flex items-center gap-3 group"
                aria-label="Abrir Instagram oficial @bemestarproacademias"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block">
                    Instagram Oficial
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors truncate block">
                    {GYM_INFO.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

            {/* Quick Trial Scheduling Form */}
            <div className="glass-panel-neon p-6 rounded-2xl border border-yellow-400/30">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>Agende sua Aula Experimental Gratuita</span>
              </h3>
              <p className="text-xs text-zinc-300 mb-4">
                Preencha seus dados para conectar direto com nosso time no WhatsApp e reservar seu horário sem custo.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30 text-center">
                  <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">
                    Solicitação Aberta no WhatsApp!
                  </h4>
                  <p className="text-xs text-zinc-300 mb-3">
                    Você foi redirecionado para concluir o agendamento com nossa recepção.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-yellow-400 hover:underline"
                  >
                    Enviar outro agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="lead-name" className="block text-xs font-mono text-zinc-300 mb-1">
                      Seu Nome Completo:
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Gabriel Souza"
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="block text-xs font-mono text-zinc-300 mb-1">
                      WhatsApp com DDD:
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(55) 99999-9999"
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="lead-time" className="block text-xs font-mono text-zinc-300 mb-1">
                        Turno de Preferência:
                      </label>
                      <select
                        id="lead-time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:border-yellow-400"
                      >
                        <option value="Manhã (07:00 às 11:00)">Manhã (07:00–11:00)</option>
                        <option value="Tarde (14:00 às 18:00)">Tarde (14:00–18:00)</option>
                        <option value="Noite (18:00 às 22:00)">Noite (18:00–22:00)</option>
                        <option value="Sábado (09:00 às 12:00)">Sábado</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lead-modality" className="block text-xs font-mono text-zinc-300 mb-1">
                        Modalidade:
                      </label>
                      <select
                        id="lead-modality"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-900 border border-white/20 rounded-lg text-white text-xs focus:outline-none focus:border-yellow-400"
                      >
                        <option value="Musculação de Alta Performance">Musculação</option>
                        <option value="Fisiculturismo & Estética">Fisiculturismo</option>
                        <option value="Condicionamento & Emagrecimento">Condicionamento</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_0_15px_rgba(255,255,0,0.3)] flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar no WhatsApp (Grátis)</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed with Cyberpunk HUD Container */}
          <div className="lg:col-span-7 h-full">
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-yellow-400/30 shadow-[0_0_35px_rgba(255,255,0,0.1)] h-full min-h-[480px] lg:min-h-[620px] flex flex-col">
              
              {/* Map Header HUD */}
              <div className="p-4 bg-zinc-950/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_8px_#ffff00]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    GPS / Mapa Interativo de Localização
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Santa Maria - RS
                </span>
              </div>

              {/* Embedded Google Maps iFrame */}
              <div className="relative flex-1 w-full h-full min-h-[400px]">
                <iframe
                  title="Mapa de Localização da Academia Bem Estar Pro em Santa Maria"
                  src="https://maps.google.com/maps?q=Avenida+Nossa+Sra.+Medianeira,+986+-+Nossa+Sra.+Medianeira,+Santa+Maria+-+RS,+97060-001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 filter contrast-105"
                  loading="lazy"
                  aria-label="Mapa do Google Maps mostrando a localização da Bem Estar Pro"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar with Route CTA */}
              <div className="p-4 bg-zinc-950/95 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-zinc-300">
                  Estacionamento próprio em frente à unidade.
                </span>
                <a
                  href="https://maps.google.com/?q=Avenida+Nossa+Sra.+Medianeira,+986+-+Nossa+Sra.+Medianeira,+Santa+Maria+-+RS,+97060-001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-yellow-400 hover:text-black text-white text-xs font-mono font-medium transition-colors"
                  aria-label="Abrir rota para a Bem Estar Pro no Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Traçar Rota no GPS</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
