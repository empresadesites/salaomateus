import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, GOOGLE_REVIEWS } from '../data/barbershopData';

export const Reviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="border-t border-white/10 bg-[#0c0c0c] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Top Rating Banner */}
        <div className="flex flex-col justify-between gap-8 rounded-lg border border-white/10 bg-[#171717] p-8 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Reconhecimento dos Clientes</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-400">Google Avaliações</span>
            </div>

            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              A OPINIÃO DE QUEM <span className="text-[#C9A45C]">FREQUENTA</span>
            </h2>

            <p className="mt-2 max-w-xl text-sm text-neutral-300">
              A satisfação dos nossos clientes em Ipatinga é o nosso maior
              compromisso. Confira os depoimentos reais registrados no Google.
            </p>
          </div>

          {/* Quantitative Score Highlight */}
          <div className="flex flex-col items-start gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono-tabular text-4xl font-bold text-white sm:text-5xl">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="font-mono-tabular text-sm text-neutral-400">
                  de 5 estrelas
                </span>
              </div>

              <div
                className="mt-2 flex items-center gap-1 text-[#C9A45C]"
                aria-label="4,8 de 5 estrelas"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>

              <p className="mt-1.5 font-mono-tabular text-xs text-neutral-300">
                Baseado em{' '}
                <strong className="font-semibold text-white">
                  {BUSINESS_INFO.reviewCount} avaliações
                </strong>{' '}
                no Google
              </p>
            </div>
          </div>
        </div>

        {/* 3 Verified Review Cards (Exact quotes provided, no fictitious names) */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {GOOGLE_REVIEWS.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#171717] p-7 transition-colors hover:border-[#C9A45C]/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-1 text-[#C9A45C]"
                    aria-label="5 de 5 estrelas"
                  >
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#C9A45C] text-[#C9A45C]"
                      />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[#C9A45C]/40" aria-hidden="true" />
                </div>

                <blockquote className="mt-5 text-base leading-relaxed font-medium text-white">
                  “{review.quote}”
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-neutral-400">
                <span>{review.source}</span>
                <span aria-hidden="true" className="text-[#C9A45C]">
                  ·
                </span>
                <span className="font-mono-tabular text-neutral-300">5,0 ★</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Action Button to View All Reviews on Google */}
        <div className="mt-10 flex justify-center">
          <a
            href={BUSINESS_INFO.googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-md border border-[#C9A45C]/60 bg-[#171717] px-7 py-3 text-xs font-semibold tracking-wider text-[#C9A45C] uppercase transition-colors duration-150 hover:bg-[#C9A45C] hover:text-[#080808] whitespace-nowrap shrink-0"
          >
            <span>VER AVALIAÇÕES NO GOOGLE</span>
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
