import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="border-t border-white/10 bg-[#0c0c0c] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left Column: Address, Hours & Direct Action */}
          <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#171717] p-7 sm:p-9 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
                <span>Localização & Contato</span>
                <span aria-hidden="true" className="text-neutral-600">
                  ·
                </span>
                <span className="text-neutral-400">Ipatinga – MG</span>
              </div>

              <h2
                className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                VENHA NOS <span className="text-[#C9A45C]">VISITAR</span>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Fácil acesso no bairro Canaã em Ipatinga. Venha cuidar do seu visual
                em um ambiente moderno, confortável e preparado para receber você.
              </p>

              <div className="mt-8 space-y-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A45C]" />
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                      Endereço Completo
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-white">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A45C]" />
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                      WhatsApp & Agendamentos
                    </h3>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-mono-tabular text-base font-semibold text-white transition-colors hover:text-[#C9A45C]"
                    >
                      {BUSINESS_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A45C]" />
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                      Horário de Funcionamento
                    </h3>
                    <p className="mt-1 font-mono-tabular text-sm font-medium text-white">
                      {BUSINESS_INFO.hoursText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={BUSINESS_INFO.googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-md bg-[#C9A45C] px-6 py-3 text-xs font-semibold tracking-wider text-[#080808] uppercase transition-colors duration-150 hover:bg-[#d8b56d] whitespace-nowrap shrink-0"
              >
                <span>ABRIR NO GOOGLE MAPS</span>
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps */}
          <div className="min-h-[380px] overflow-hidden rounded-lg border border-white/10 bg-[#171717] lg:col-span-7">
            <iframe
              title="Localização do Salão Masculino Mateus no Google Maps"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full border-0 filter contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
