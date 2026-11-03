import React from 'react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080808] pt-16 pb-12 text-neutral-400">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <a
              href="#inicio"
              className="font-display text-xl font-bold tracking-wider text-white uppercase transition-colors hover:text-[#C9A45C]"
            >
              {BUSINESS_INFO.shortName}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Mais que um corte de cabelo, uma experiência de cuidado, estilo e
              personalidade no bairro Canaã em Ipatinga – MG.
            </p>
            <p className="mt-4 font-mono-tabular text-xs text-[#C9A45C]">
              Nota {BUSINESS_INFO.rating} ★ ({BUSINESS_INFO.reviewCount} avaliações no Google)
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="transition-colors hover:text-[#C9A45C]">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-colors hover:text-[#C9A45C]">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#galeria" className="transition-colors hover:text-[#C9A45C]">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="transition-colors hover:text-[#C9A45C]">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#agendamento" className="transition-colors hover:text-[#C9A45C]">
                  Agendamento
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-[#C9A45C]">
                  Localização & Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Corte masculino
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Degradê (Low, Mid e High Fade)
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Corte social
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Barba desenhada
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Acabamento
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition-colors hover:text-[#C9A45C]">
                  Corte e barba
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Atendimento
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="leading-relaxed text-neutral-300">
                {BUSINESS_INFO.address}
              </p>
              <p>
                <span className="text-neutral-400">WhatsApp: </span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tabular font-medium text-white transition-colors hover:text-[#C9A45C]"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </p>
              <p className="font-mono-tabular text-neutral-300">
                Horário: {BUSINESS_INFO.hoursText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. Todos os direitos reservados.
          </p>
          <p>R. Siquem, 150 - Loja A - Canaã, Ipatinga - MG, 35164-218</p>
        </div>
      </div>
    </footer>
  );
};
