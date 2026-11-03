import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Clock, User, Scissors, Copy, Check } from 'lucide-react';
import {
  SERVICES_LIST,
  AVAILABLE_TIME_SLOTS,
  BUSINESS_INFO,
  buildWhatsAppBookingUrl,
} from '../data/barbershopData';

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
  nameInputRef: React.RefObject<HTMLInputElement | null>;
}

function getFormattedToday(offsetDays = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(isoDate: string): string {
  if (!isoDate) return 'A definir';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedService,
  onServiceChange,
  nameInputRef,
}) => {
  const [clientName, setClientName] = useState('');
  const [selectedDate, setSelectedDate] = useState(() => getFormattedToday(0));
  const [selectedTime, setSelectedTime] = useState('15:00');
  const [validationError, setValidationError] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  useEffect(() => {
    if (clientName.trim().length > 0 && validationError) {
      setValidationError('');
    }
  }, [clientName, validationError]);

  const formattedDateBr = formatDisplayDate(selectedDate);

  const previewMessage = `Olá! Vim pelo site do Salão Masculino Mateus e gostaria de solicitar um agendamento.

Nome: ${clientName.trim() || '[Seu nome]'}
Serviço: ${selectedService}
Data: ${formattedDateBr}
Horário: ${selectedTime}

Gostaria de confirmar a disponibilidade!`;

  const whatsappUrl = buildWhatsAppBookingUrl({
    name: clientName.trim() || 'Cliente',
    service: selectedService,
    date: formattedDateBr,
    time: selectedTime,
  });

  const handleConfirmClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!clientName.trim()) {
      e.preventDefault();
      setValidationError('Por favor, informe seu nome para preencher a solicitação de agendamento.');
      nameInputRef.current?.focus();
    }
  };

  const handleCopyPreview = async () => {
    try {
      await navigator.clipboard.writeText(previewMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  return (
    <section id="agendamento" className="border-t border-white/10 bg-[#080808] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Scheduling Form */}
          <div className="rounded-lg border border-white/10 bg-[#171717] p-7 sm:p-9 lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Agendamento Rápido</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-400">Atendimento até 19h</span>
            </div>

            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              AGENDAR PELO <span className="text-[#C9A45C]">WHATSAPP</span>
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Selecione o serviço, o dia e o horário pretendido. Ao confirmar, sua
              solicitação será enviada diretamente para o WhatsApp da barbearia para
              verificação de disponibilidade.
            </p>

            <div className="mt-7 space-y-6">
              {/* 1. Nome do Cliente */}
              <div>
                <label
                  htmlFor="booking-client-name"
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-200 uppercase"
                >
                  <User className="h-3.5 w-3.5 text-[#C9A45C]" />
                  <span>Seu Nome</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="booking-client-name"
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex.: Mateus Silva"
                  className="mt-2 min-h-[46px] w-full rounded-md border border-white/15 bg-[#0e0e0e] px-4 py-2.5 text-sm text-white placeholder-neutral-500 transition-colors focus:border-[#C9A45C] focus:outline-none"
                />
                {validationError && (
                  <p role="alert" className="mt-2 text-xs font-medium text-amber-400">
                    {validationError}
                  </p>
                )}
              </div>

              {/* 2. Serviço Desejado */}
              <div>
                <label
                  htmlFor="booking-service"
                  className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-200 uppercase"
                >
                  <Scissors className="h-3.5 w-3.5 text-[#C9A45C]" />
                  <span>Serviço Desejado</span>
                </label>

                <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {SERVICES_LIST.map((service) => {
                    const isSelected = selectedService === service.name;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => onServiceChange(service.name)}
                        className={`min-h-[44px] rounded-md border px-3 py-2 text-left text-xs font-medium transition-colors duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-[#C9A45C] bg-[#C9A45C]/15 text-white font-semibold'
                            : 'border-white/10 bg-[#0e0e0e] text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span className="block truncate">{service.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Dia Pretendido */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="booking-date"
                    className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-200 uppercase"
                  >
                    <Calendar className="h-3.5 w-3.5 text-[#C9A45C]" />
                    <span>Dia Pretendido</span>
                  </label>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getFormattedToday(0))}
                      className="rounded border border-white/10 bg-[#0e0e0e] px-2.5 py-1 text-xs text-neutral-300 transition-colors hover:border-[#C9A45C] hover:text-white cursor-pointer"
                    >
                      Hoje
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDate(getFormattedToday(1))}
                      className="rounded border border-white/10 bg-[#0e0e0e] px-2.5 py-1 text-xs text-neutral-300 transition-colors hover:border-[#C9A45C] hover:text-white cursor-pointer"
                    >
                      Amanhã
                    </button>
                  </div>
                </div>

                <input
                  id="booking-date"
                  type="date"
                  min={getFormattedToday(0)}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-2 min-h-[46px] w-full rounded-md border border-white/15 bg-[#0e0e0e] px-4 py-2.5 font-mono-tabular text-sm text-white transition-colors focus:border-[#C9A45C] focus:outline-none [color-scheme:dark]"
                />
              </div>

              {/* 4. Horário Pretendido */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-200 uppercase">
                    <Clock className="h-3.5 w-3.5 text-[#C9A45C]" />
                    <span>Horário Pretendido</span>
                  </label>
                  <span className="text-xs text-neutral-400">
                    {BUSINESS_INFO.hoursText}
                  </span>
                </div>

                <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
                  {AVAILABLE_TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`min-h-[40px] rounded-md border px-2.5 py-2 font-mono-tabular text-xs font-medium transition-colors duration-150 cursor-pointer ${
                          isSelected
                            ? 'border-[#C9A45C] bg-[#C9A45C] text-[#080808] font-semibold'
                            : 'border-white/10 bg-[#0e0e0e] text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Submit Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfirmClick}
                  className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-md bg-[#C9A45C] px-6 py-3.5 text-sm font-semibold tracking-wider text-[#080808] uppercase transition-all duration-150 hover:bg-[#d8b56d] active:scale-[0.99] whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>CONFIRMAR AGENDAMENTO</span>
                </a>
                <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                  Importante: o envio da mensagem solicita seu horário. A confirmação
                  final de disponibilidade será feita diretamente pelo Salão Masculino
                  Mateus no WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Live Message Preview & Direct Contact */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#141414] p-7 sm:p-9 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
                  Resumo da Solicitação
                </span>
                <span className="font-mono-tabular text-xs text-neutral-400">
                  WhatsApp {BUSINESS_INFO.whatsappDisplay}
                </span>
              </div>

              <h3 className="mt-2 font-display text-2xl font-bold tracking-wide text-white uppercase">
                MENSAGEM AUTOMÁTICA
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                Confira abaixo a mensagem que será aberta automaticamente no seu
                WhatsApp ao clicar em confirmar:
              </p>

              {/* Message Preview Box */}
              <div className="mt-5 rounded-md border border-white/10 bg-[#0b0b0b] p-5">
                <pre className="font-sans text-xs leading-relaxed whitespace-pre-wrap text-neutral-200">
                  {previewMessage}
                </pre>
              </div>

              <button
                type="button"
                onClick={handleCopyPreview}
                className="mt-3 inline-flex min-h-[38px] items-center gap-2 rounded-md border border-white/10 bg-[#171717] px-3.5 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-[#C9A45C]/50 hover:text-white cursor-pointer"
              >
                {copiedMessage ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#C9A45C]" />
                    <span className="text-[#C9A45C]">Mensagem copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Copiar texto da mensagem</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Contact Summary */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold tracking-wider text-white uppercase">
                Atendimento Presencial & Agendado
              </p>
              <div className="mt-3 space-y-1.5 text-xs text-neutral-300">
                <p>{BUSINESS_INFO.address}</p>
                <p className="font-mono-tabular">
                  WhatsApp: {BUSINESS_INFO.whatsappDisplay} · {BUSINESS_INFO.hoursText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
