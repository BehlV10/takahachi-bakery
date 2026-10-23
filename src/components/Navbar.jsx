import React, { useState, useEffect } from 'react';
import { sisterLocations } from '../data/bakeryData';
import { MapPin, Phone, Clock, Menu as MenuIcon, X, ShoppingBag, ExternalLink, Sparkles, Navigation } from 'lucide-react';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Takahachi Family Sister Locations Top Bar */}
      <div className="bg-bakery-ink text-white/80 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Trio Selector */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-bakery-honey uppercase tracking-widest text-[10px] font-bold flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-bakery-honey animate-pulse"></span>
              The Takahachi Trio:
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {sisterLocations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.active ? '#hero' : loc.url}
                  target={loc.active ? '_self' : '_blank'}
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full transition-all text-[11px] font-semibold whitespace-nowrap ${
                    loc.active
                      ? 'bg-bakery-matcha text-white shadow-sm ring-1 ring-white/20'
                      : 'hover:text-white hover:bg-white/15 text-white/70 bg-white/5'
                  }`}
                  title={`${loc.name} (${loc.neighborhood})`}
                >
                  <span>{loc.shortLabel}</span>
                  {!loc.active && <ExternalLink size={10} className="opacity-60" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick info right */}
          <div className="hidden md:flex items-center gap-4 text-[11px] text-white/70">
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-bakery-honey" /> Mon–Fri: 8:30 AM – 6:00 PM
            </span>
            <a href="tel:2127915550" className="flex items-center gap-1 hover:text-white transition">
              <Phone size={12} className="text-bakery-honey" /> (212) 791-5550
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-bakery-cream/95 backdrop-blur-md shadow-md py-3 border-b border-bakery-border'
            : 'bg-bakery-cream/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-bakery-matcha text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition group-hover:scale-105">
                八
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-bakery-charcoal flex items-center gap-1.5">
                  TAKAHACHI <span className="font-light italic text-bakery-caramel">Bakery</span>
                </div>
                <p className="text-[10px] tracking-widest uppercase text-bakery-muted font-medium">
                  Japanese Patisserie & Café • Tribeca NYC
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-bakery-charcoal">
            <a href="#menu" className="hover:text-bakery-matcha transition-colors">
              Menu & Drinks
            </a>
            <a href="#cakes" className="hover:text-bakery-matcha transition-colors">
              Cakes & Pastries
            </a>
            <a href="#order-builder" className="hover:text-bakery-matcha transition-colors flex items-center gap-1 text-bakery-azuki font-semibold">
              <Sparkles size={14} /> Custom Pre-Order
            </a>
            <a href="#chef" className="hover:text-bakery-matcha transition-colors">
              Chef Story
            </a>
            <a href="#gallery" className="hover:text-bakery-matcha transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-bakery-matcha transition-colors">
              Press
            </a>
            <a href="#location" className="hover:text-bakery-matcha transition-colors">
              Visit & Hours
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:2127915550"
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-bakery-charcoal/20 text-bakery-charcoal hover:bg-bakery-sand transition"
            >
              (212) 791-5550
            </a>
            <button
              onClick={onOpenOrderModal}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-bakery-matcha text-white hover:bg-bakery-charcoal transition shadow-sm flex items-center gap-1.5"
            >
              <ShoppingBag size={14} />
              <span>Order Online / Pickup</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-bakery-charcoal hover:bg-bakery-sand rounded-lg transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-bakery-cream border-t border-bakery-border mt-3 px-6 py-6 space-y-5 shadow-xl">
            {/* Sister sites quick tabs in mobile */}
            <div className="p-3 bg-bakery-sand rounded-xl border border-bakery-border space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-muted block">
                The Takahachi Locations:
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-center">
                {sisterLocations.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.active ? '#hero' : loc.url}
                    target={loc.active ? '_self' : '_blank'}
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                      loc.active
                        ? 'bg-bakery-matcha text-white shadow-sm'
                        : 'bg-white text-bakery-charcoal border border-bakery-border'
                    }`}
                  >
                    <span>{loc.shortLabel}</span>
                    {!loc.active && <ExternalLink size={10} />}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-3 font-medium text-bakery-charcoal text-base">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha border-b border-bakery-border/50 pb-2"
              >
                Menu & Drinks
              </a>
              <a
                href="#cakes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha border-b border-bakery-border/50 pb-2"
              >
                Cakes & Whole Mousse
              </a>
              <a
                href="#order-builder"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-bakery-azuki font-semibold border-b border-bakery-border/50 pb-2 flex items-center gap-2"
              >
                <Sparkles size={16} /> Cake Pre-Order Builder
              </a>
              <a
                href="#chef"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha border-b border-bakery-border/50 pb-2"
              >
                Executive Chef Naoko Mabuchi
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha border-b border-bakery-border/50 pb-2"
              >
                Photo Gallery
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha border-b border-bakery-border/50 pb-2"
              >
                Reviews & Press
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-bakery-matcha pb-2"
              >
                Location & Opening Hours
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-bakery-matcha text-white shadow"
              >
                Order Online / Delivery Options
              </button>
              <a
                href="tel:2127915550"
                className="w-full py-2.5 text-center text-sm font-semibold rounded-lg border border-bakery-charcoal/20 text-bakery-charcoal"
              >
                Call Bakery: (212) 791-5550
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
