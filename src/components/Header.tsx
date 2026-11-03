import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData';

interface HeaderProps {
  onNavigateToBooking: () => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export const Header: React.FC<HeaderProps> = ({ onNavigateToBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#080808]/95 backdrop-blur-md'
          : 'border-b border-white/5 bg-[#080808]/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-wider text-white uppercase transition-colors hover:text-[#C9A45C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
        >
          {BUSINESS_INFO.shortName}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-neutral-300 transition-colors duration-150 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C9A45C] after:transition-all after:duration-200 hover:after:w-full whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9A45C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateToBooking}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#C9A45C] px-5 py-2 text-xs font-semibold tracking-wider text-[#080808] uppercase transition-all duration-150 hover:bg-[#d8b56d] active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A45C]"
          >
            AGENDAR HORÁRIO
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-[#171717] text-white transition-colors hover:border-[#C9A45C]/50 hover:text-[#C9A45C] lg:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#080808] px-6 py-5 lg:hidden">
          <nav aria-label="Menu móvel" className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center border-b border-white/5 text-base font-medium text-neutral-200 transition-colors hover:text-[#C9A45C]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToBooking();
              }}
              className="mt-2 flex min-h-[48px] w-full items-center justify-center rounded-md bg-[#C9A45C] px-5 py-3 text-xs font-semibold tracking-wider text-[#080808] uppercase transition-colors hover:bg-[#d8b56d] cursor-pointer"
            >
              AGENDAR HORÁRIO
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
