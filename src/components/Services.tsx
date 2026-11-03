import React from 'react';
import { MessageCircle, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import {
  SERVICES_LIST,
  buildWhatsAppServiceInquiryUrl,
} from '../data/barbershopData';
import { SmartImage } from './SmartImage';

interface ServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  return (
    <section id="servicos" className="border-t border-white/10 bg-[#0c0c0c] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Especialidades</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-400">Cuidado Masculino de Alto Nível</span>
            </div>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              NOSSOS <span className="text-[#C9A45C]">SERVIÇOS</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Técnicas apuradas de corte, degradê e barboterapia com equipamentos
            profissionais. Consulte valores e disponibilidade diretamente pelo
            WhatsApp ou solicite seu horário.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, idx) => {
            const inquiryUrl = buildWhatsAppServiceInquiryUrl(service.name);

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#171717] transition-colors duration-200 hover:border-[#C9A45C]/50"
              >
                <div>
                  {/* Service Photograph */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#101010]">
                    <SmartImage
                      src={service.image}
                      alt={service.imageAlt}
                      fallbackLabel={service.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      containerClassName="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/20 to-transparent" />
                    <span className="absolute bottom-3 left-5 font-mono-tabular text-xs font-medium tracking-widest text-[#C9A45C]">
                      {service.index}. ESPECIALIDADE
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#C9A45C]">
                      {service.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                      {service.description}
                    </p>

                    {/* Unboxed Metadata Highlights */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/10 pt-4 text-xs text-neutral-400">
                      {service.highlights.map((item, i) => (
                        <React.Fragment key={item}>
                          <span>{item}</span>
                          {i < service.highlights.length - 1 && (
                            <span aria-hidden="true" className="text-[#C9A45C]">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex flex-col gap-2.5 border-t border-white/10 bg-[#131313] p-6 pt-4">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-md bg-[#C9A45C] px-4 py-2.5 text-xs font-semibold tracking-wider text-[#080808] uppercase transition-colors duration-150 hover:bg-[#d8b56d] whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" />
                    <span>Consultar pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForBooking(service.name)}
                    className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-4 py-2 text-xs font-medium text-neutral-300 transition-colors duration-150 hover:border-[#C9A45C]/50 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <CalendarCheck className="h-3.5 w-3.5 shrink-0 text-[#C9A45C]" />
                    <span>Selecionar no Agendamento</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
