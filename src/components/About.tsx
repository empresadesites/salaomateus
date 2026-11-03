import React from 'react';
import { motion } from 'motion/react';
import { IMAGES, BUSINESS_INFO } from '../data/barbershopData';
import { SmartImage } from './SmartImage';

const PILLARS = [
  {
    number: '01.',
    title: 'Profissionais Especializados',
    description:
      'Domínio técnico em cortes modernos, degradês milimétricos (Low, Mid e High Fade), cortes sociais clássicos e modelagem de barba na navalha.',
  },
  {
    number: '02.',
    title: 'Ambiente Masculino Agradável',
    description:
      'Espaço pensado para o seu conforto no bairro Canaã em Ipatinga, com poltronas confortáveis, equipamentos esterilizados e atendimento pontual.',
  },
  {
    number: '03.',
    title: 'Compromisso com Seu Estilo',
    description:
      'Respeitamos a identidade e a rotina de cada cliente, garantindo um acabamento limpo e duradouro que valoriza sua presença.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="border-t border-white/10 bg-[#080808] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Left Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-5 lg:col-span-6"
          >
            <div className="relative flex-1 overflow-hidden rounded-lg border border-white/10 bg-[#171717]">
              <SmartImage
                src={IMAGES.aboutInterior}
                alt="Ambiente interno do Salão Masculino Mateus com cadeiras de barbearia clássicas e iluminação sofisticada"
                fallbackLabel="Ambiente Salão Masculino Mateus"
                className="h-full min-h-[300px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                containerClassName="h-full min-h-[300px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-4 left-5 flex items-center justify-between text-xs text-neutral-300">
                <span>Estrutura pensada para o seu conforto</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#C9A45C]">Canaã, Ipatinga – MG</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="relative h-44 overflow-hidden rounded-lg border border-white/10 bg-[#171717]">
                <SmartImage
                  src={IMAGES.serviceAcabamento}
                  alt="Máquina profissional realizando acabamento de precisão"
                  fallbackLabel="Precisão nos Detalhes"
                  className="h-full w-full object-cover"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
                  Acabamento de Alta Precisão
                </span>
              </div>

              <div className="relative h-44 overflow-hidden rounded-lg border border-white/10 bg-[#171717]">
                <SmartImage
                  src={IMAGES.serviceBarba}
                  alt="Barbeiro desenhando barba com navalha clássica"
                  fallbackLabel="Tradição na Navalha"
                  className="h-full w-full object-cover"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
                  Cuidado Clássico & Navalha
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Sobre a Barbearia</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-400">{BUSINESS_INFO.name}</span>
            </div>

            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              TRADIÇÃO, ESTILO E <span className="text-[#C9A45C]">QUALIDADE.</span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-neutral-200 sm:text-lg">
              No Salão Masculino Mateus, cada detalhe importa. Nosso compromisso é
              oferecer um atendimento de qualidade, um ambiente agradável e
              profissionais preparados para valorizar seu estilo.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Localizados na R. Siquem, 150 – Loja A, no coração do bairro Canaã em
              Ipatinga – MG, unimos a tradição da barbearia clássica às técnicas mais
              atuais de corte masculino, degradê e alinhamento de barba.
            </p>

            {/* Editorial Numbered Pillars */}
            <div className="mt-8 divide-y divide-white/10 border-t border-b border-white/10">
              {PILLARS.map((pillar) => (
                <div key={pillar.number} className="py-4">
                  <h3 className="font-display text-base font-semibold tracking-wide text-white uppercase">
                    <span className="mr-2 font-mono-tabular text-[#C9A45C]">
                      {pillar.number}
                    </span>
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
