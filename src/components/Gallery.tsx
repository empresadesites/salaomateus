import React, { useState, useEffect } from 'react';
import { Expand, X, ChevronLeft, ChevronRight, CalendarCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS, GalleryItem } from '../data/barbershopData';
import { SmartImage } from './SmartImage';

interface GalleryProps {
  onSelectStyleForBooking: (styleTitle: string) => void;
}

type FilterCategory = 'todos' | 'cortes' | 'barba' | 'ambiente';

const FILTERS: { id: FilterCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os Trabalhos' },
  { id: 'cortes', label: 'Cortes & Degradê' },
  { id: 'barba', label: 'Barba & Acabamento' },
  { id: 'ambiente', label: 'Ambiente & Estrutura' },
];

export const Gallery: React.FC<GalleryProps> = ({ onSelectStyleForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const currentLightboxItem: GalleryItem | null =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  return (
    <section id="galeria" className="border-t border-white/10 bg-[#080808] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#C9A45C] uppercase">
              <span>Portfólio Visual</span>
              <span aria-hidden="true" className="text-neutral-600">
                ·
              </span>
              <span className="text-neutral-400">Clique nas fotos para ampliar</span>
            </div>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              GALERIA DE <span className="text-[#C9A45C]">ESTILO & PRECISÃO</span>
            </h2>
          </div>

          {/* Interactive segmented filter bar */}
          <div
            role="tablist"
            aria-label="Filtrar galeria por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-white/10 bg-[#141414] p-1.5"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setSelectedIndex(null);
                    setActiveFilter(filter.id);
                  }}
                  className={`min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#C9A45C] text-[#080808] font-semibold'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Mosaic Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[250px]">
          {filteredItems.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIndex(idx)}
              className={`group relative flex h-64 w-full flex-col justify-end overflow-hidden rounded-lg border border-white/10 bg-[#171717] text-left md:h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C] ${
                activeFilter === 'todos' ? item.spanClass : ''
              }`}
              aria-label={`Ampliar foto: ${item.title}`}
            >
              <SmartImage
                src={item.image}
                alt={item.alt}
                fallbackLabel={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                containerClassName="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent transition-opacity duration-200 group-hover:opacity-95" />

              <div className="relative z-10 flex w-full items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-medium text-[#C9A45C]">
                    {item.categoryLabel}
                  </p>
                  <h3 className="mt-0.5 font-display text-lg font-bold tracking-wide text-white uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300">{item.technique}</p>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/20 bg-[#080808]/75 text-white transition-colors group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#080808]">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-white/15 bg-[#121212]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Lightbox */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="text-[#C9A45C]">{currentLightboxItem.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">
                  {(selectedIndex ?? 0) + 1} / {filteredItems.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                aria-label="Fechar visualização ampliada"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-[#171717] text-white transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative flex max-h-[65vh] items-center justify-center bg-[#080808]">
              <SmartImage
                src={currentLightboxItem.image}
                alt={currentLightboxItem.alt}
                fallbackLabel={currentLightboxItem.title}
                className="max-h-[65vh] w-full object-contain"
                containerClassName="h-96 w-full"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev !== null
                          ? (prev - 1 + filteredItems.length) % filteredItems.length
                          : 0
                      )
                    }
                    aria-label="Foto anterior"
                    className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#080808]/80 text-white transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev !== null ? (prev + 1) % filteredItems.length : 0
                      )
                    }
                    aria-label="Próxima foto"
                    className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#080808]/80 text-white transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C] cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Footer */}
            <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 bg-[#171717] p-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                  {currentLightboxItem.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-300">
                  {currentLightboxItem.technique}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  const categoryService =
                    currentLightboxItem.category === 'barba'
                      ? 'Barba'
                      : 'Degradê (Fade)';
                  setSelectedIndex(null);
                  onSelectStyleForBooking(categoryService);
                }}
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-[#C9A45C] px-5 py-2.5 text-xs font-semibold tracking-wider text-[#080808] uppercase transition-colors hover:bg-[#d8b56d] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <CalendarCheck className="h-4 w-4 shrink-0" />
                <span>Agendar este Estilo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
