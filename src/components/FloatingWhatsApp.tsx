import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    'Olá! Vim pelo site do Salão Masculino Mateus e gostaria de agendar um horário.'
  );
  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar horário pelo WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[#C9A45C]/40 bg-[#C9A45C] px-4 py-3 text-xs font-semibold tracking-wider text-[#080808] uppercase shadow-lg transition-transform duration-150 hover:scale-105 hover:bg-[#d8b56d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
    >
      <MessageCircle className="h-5 w-5 shrink-0 fill-[#080808] text-[#080808]" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
};
