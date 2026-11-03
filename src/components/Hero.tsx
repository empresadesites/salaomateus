import React from 'react';
import { Star, ArrowRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, IMAGES } from '../data/barbershopData';
import { SmartImage } from './SmartImage';

interface HeroProps {
  onNavigateToBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToBooking }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] w-full overflow-hidden bg-[#080808] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background luxury photography with measured multi-layered scrim */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={IMAGES.heroBarberCut}
          alt="Homem recebendo um corte moderno em ambiente sofisticado no Salão Masculino Mateus"
          fallbackLabel="Salão Masculino Mateus"
          className="h-full w-full object-cover object-center opacity-55"
          containerClassName="h-full w-full"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"
          aria-hidden="true"
        />
        {/* Subtle warm gold radial ambient lighting */}
        <div
          className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#C9A45C]/10 blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 pt-6 lg:grid-cols-12 lg:gap-12 lg:pt-12">
          {/* Left Column: Editorial Value Proposition & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Unboxed regional metadata kicker */}
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Barbearia Clássica & Moderna</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-300">Bairro Canaã, Ipatinga – MG</span>
            </div>

            <h1
              className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.04] font-bold tracking-tight text-white uppercase"
              style={{ textWrap: 'balance' }}
            >
              SEU ESTILO.{' '}
              <span className="text-[#C9A45C]">SUA IDENTIDADE.</span>
            </h1>

            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-neutral-300 sm:text-lg">
              Mais que um corte de cabelo, uma experiência de cuidado, estilo e
              personalidade. Atendimento de alto padrão para homens que valorizam
              precisão em cada detalhe.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onNavigateToBooking}
                className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-md bg-[#C9A45C] px-7 py-3.5 text-sm font-semibold tracking-wider text-[#080808] uppercase transition-all duration-150 hover:bg-[#d8b56d] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                <span>AGENDAR PELO WHATSAPP</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </button>

              <a
                href="#sobre"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-md border border-white/20 bg-[#171717]/80 px-6 py-3.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-150 hover:border-[#C9A45C]/60 hover:text-[#C9A45C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
              >
                <Compass className="h-4 w-4 shrink-0 text-[#C9A45C]" />
                <span>CONHEÇA NOSSA BARBEARIA</span>
              </a>
            </div>

            {/* Google Rating Proof */}
            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-[#C9A45C]" aria-label="Nota 4,8 de 5 estrelas">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[#C9A45C] text-[#C9A45C]" />
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-300">
                  <span className="font-mono-tabular font-semibold text-white">
                    Nota {BUSINESS_INFO.rating}/5 no Google
                  </span>
                  <span aria-hidden="true" className="text-neutral-600">
                    ·
                  </span>
                  <span className="font-mono-tabular text-neutral-300">
                    {BUSINESS_INFO.reviewCount} avaliações de clientes
                  </span>
                  <span aria-hidden="true" className="text-neutral-600">
                    ·
                  </span>
                  <a
                    href="#avaliacoes"
                    className="text-[#C9A45C] underline-offset-4 hover:underline whitespace-nowrap"
                  >
                    Ver depoimentos
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Framed Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-white/15 bg-[#171717] lg:col-span-5"
          >
            <div className="relative h-72 w-full sm:h-80 lg:h-full">
              <SmartImage
                src={IMAGES.heroBarberCut}
                alt="Corte masculino moderno e acabamento de precisão no Salão Masculino Mateus"
                fallbackLabel="Corte & Estilo"
                className="h-full w-full object-cover object-center"
                containerClassName="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/25 to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#C9A45C] uppercase">
                    Salão Masculino Mateus
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold tracking-wide text-white uppercase">
                    Cortes Modernos · Degradê · Barba
                  </p>
                </div>
                <span className="font-mono-tabular text-xs text-neutral-300 whitespace-nowrap">
                  {BUSINESS_INFO.hoursText}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Information Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#121212] p-5">
            <p className="text-xs tracking-wider text-neutral-400 uppercase">Avaliação Oficial</p>
            <p className="mt-1 font-mono-tabular text-xl font-semibold text-white">
              {BUSINESS_INFO.rating} ★{' '}
              <span className="text-sm font-normal text-neutral-400">
                ({BUSINESS_INFO.reviewCount} avaliações)
              </span>
            </p>
          </div>

          <div className="bg-[#121212] p-5">
            <p className="text-xs tracking-wider text-neutral-400 uppercase">Horário de Atendimento</p>
            <p className="mt-1 font-mono-tabular text-xl font-semibold text-white">
              {BUSINESS_INFO.hoursText}
            </p>
          </div>

          <div className="bg-[#121212] p-5">
            <p className="text-xs tracking-wider text-neutral-400 uppercase">Localização</p>
            <p className="mt-1 text-sm font-medium text-white">
              R. Siquem, 150 - Loja A · Canaã, Ipatinga
            </p>
          </div>

          <div className="bg-[#121212] p-5">
            <p className="text-xs tracking-wider text-neutral-400 uppercase">Atendimento Direto</p>
            <p className="mt-1 font-mono-tabular text-base font-semibold text-[#C9A45C]">
              WhatsApp {BUSINESS_INFO.whatsappDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
