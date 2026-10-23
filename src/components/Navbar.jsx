import React, { useState, useEffect } from 'react';
import { sisterLocations } from '../data/bakeryData';
import { MapPin, Phone, Clock, Menu as MenuIcon, X, ShoppingBag, ExternalLink, Sparkles, Home, Utensils, Flame, Croissant } from 'lucide-react';

export default function Navbar({ activeLocation, onSelectLocation, onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'portal', label: 'All Concepts', icon: Home, short: 'Overview' },
    { id: 'bakery', label: 'Tribeca Bakery', icon: Croissant, short: 'Japanese Patisserie' },
    { id: 'tribeca', label: 'Tribeca Restaurant', icon: Utensils, short: 'Sushi & Dining' },
    { id: 'sa', label: 'SA Brooklyn', icon: Flame, short: 'Izakaya & Sake' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-bakery-ink text-white/80 text-[11px] py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-bakery-honey uppercase tracking-widest text-[10px] font-bold flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-bakery-honey"></span>
              The Takahachi NYC Family
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/70">
              Bakery: 25 Murray St • Tribeca Sushi: 145 Duane St • SA Izakaya: 29 Wyckoff Ave Brooklyn
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            {activeLocation === 'bakery' && (
              <>
                <span>Mon–Fri: 8:30 AM – 6:00 PM</span>
                <a href="tel:2127915550" className="hover:text-white transition font-medium text-bakery-honey">
                  (212) 791-5550
                </a>
              </>
            )}
            {activeLocation === 'tribeca' && (
              <>
                <span>Lunch & Dinner Daily</span>
                <a href="tel:2125711830" className="hover:text-white transition font-medium text-blue-300">
                  (212) 571-1830
                </a>
              </>
            )}
            {activeLocation === 'sa' && (
              <>
                <span>Tue–Sun: 5:00 PM – 11:30 PM</span>
                <a href="tel:9296074200" className="hover:text-white transition font-medium text-red-300">
                  (929) 607-4200
                </a>
              </>
            )}
            {activeLocation === 'portal' && (
              <span className="text-bakery-honey font-medium">
                Downtown Manhattan & Bushwick Brooklyn
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-bakery-cream/95 backdrop-blur-md shadow-md py-2.5 border-bakery-border'
            : 'bg-bakery-cream/90 backdrop-blur-sm py-3.5 border-bakery-border/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* Left: Brand Logo & Title */}
          <button
            type="button"
            onClick={() => onSelectLocation('portal')}
            className="flex items-center gap-3 text-left group flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-bakery-matcha text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm transition group-hover:scale-105">
              八
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-bakery-charcoal flex items-center gap-1.5 leading-none">
                TAKAHACHI
                <span className="font-light italic text-bakery-caramel text-lg sm:text-xl">
                  {activeLocation === 'bakery'
                    ? 'Bakery'
                    : activeLocation === 'tribeca'
                    ? 'Tribeca'
                    : activeLocation === 'sa'
                    ? 'SA'
                    : 'NYC'}
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-bakery-muted font-medium mt-1">
                {activeLocation === 'bakery'
                  ? 'Japanese Patisserie & Café'
                  : activeLocation === 'tribeca'
                  ? 'Traditional Sushi & Dining'
                  : activeLocation === 'sa'
                  ? 'Bushwick Izakaya & Sake Bar'
                  : 'Artisanal Bakery & Japanese Restaurants'}
              </p>
            </div>
          </button>

          {/* Center: Clean Segmented Location Pill Bar */}
          <div className="hidden lg:flex items-center bg-bakery-sand/80 p-1 rounded-2xl border border-bakery-border shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeLocation === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectLocation(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-bakery-ink shadow-sm ring-1 ring-bakery-border'
                      : 'text-bakery-charcoal/70 hover:text-bakery-ink hover:bg-white/50'
                  }`}
                >
                  <Icon
                    size={14}
                    className={
                      isActive
                        ? item.id === 'bakery'
                          ? 'text-bakery-matcha'
                          : item.id === 'tribeca'
                          ? 'text-blue-700'
                          : item.id === 'sa'
                          ? 'text-red-700'
                          : 'text-bakery-caramel'
                        : 'opacity-50'
                    }
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Quick Action Controls */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            {activeLocation === 'bakery' ? (
              <>
                <a
                  href="#cakes"
                  className="px-3 py-2 text-xs font-semibold text-bakery-charcoal hover:text-bakery-matcha transition"
                >
                  Cake Menu
                </a>
                <a
                  href="#order-builder"
                  className="px-3 py-2 text-xs font-bold text-bakery-azuki hover:bg-bakery-azuki/10 rounded-lg transition"
                >
                  Pre-Order Cake
                </a>
                <button
                  onClick={onOpenOrderModal}
                  className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-bakery-matcha text-white hover:bg-bakery-ink transition shadow-sm flex items-center gap-1.5"
                >
                  <ShoppingBag size={14} />
                  <span>Order Pickup</span>
                </button>
              </>
            ) : activeLocation === 'tribeca' ? (
              <>
                <a
                  href="https://www.takahachi.net/s/Today-SP-menu-Mon-070124-c4hl.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1"
                >
                  <span>Today’s Specials PDF</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="tel:2125711830"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-blue-900 text-white hover:bg-blue-800 transition shadow-sm flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Call (212) 571-1830</span>
                </a>
              </>
            ) : activeLocation === 'sa' ? (
              <>
                <a
                  href="https://maps.google.com/?q=Takahachi+SA+29+Wyckoff+Ave+Brooklyn+NY+11237"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-xs font-semibold text-stone-700 hover:text-red-700 transition"
                >
                  Directions (L Train)
                </a>
                <a
                  href="tel:9296074200"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-red-700 text-white hover:bg-red-800 transition shadow-sm flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Call (929) 607-4200</span>
                </a>
              </>
            ) : (
              <button
                onClick={() => onSelectLocation('bakery')}
                className="px-4 py-2 text-xs font-bold rounded-xl bg-bakery-matcha text-white hover:bg-bakery-ink transition shadow-sm"
              >
                Visit Bakery Site →
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-bakery-charcoal hover:bg-bakery-sand rounded-xl transition border border-bakery-border/60"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-bakery-border px-6 py-6 space-y-5 shadow-xl mt-2.5">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-muted block">
                Select Destination:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeLocation === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onSelectLocation(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                        isActive
                          ? 'bg-bakery-matcha text-white shadow'
                          : 'bg-bakery-cream text-bakery-charcoal border border-bakery-border'
                      }`}
                    >
                      <Icon size={14} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* In Bakery View Links */}
            {activeLocation === 'bakery' && (
              <div className="pt-2 border-t border-bakery-border flex flex-col space-y-2.5 font-medium text-sm text-bakery-charcoal">
                <a
                  href="#menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-bakery-matcha"
                >
                  Menu & Drinks
                </a>
                <a
                  href="#cakes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-bakery-matcha"
                >
                  Cakes & Whole Mousse
                </a>
                <a
                  href="#order-builder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-bakery-azuki font-semibold flex items-center gap-1.5"
                >
                  <Sparkles size={14} /> Custom Cake Pre-Order
                </a>
                <a
                  href="#chef"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-bakery-matcha"
                >
                  Chef Naoko Mabuchi
                </a>
                <a
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-bakery-matcha"
                >
                  Hours & Directions
                </a>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-xl bg-bakery-charcoal text-white shadow"
              >
                Order Online / Delivery Options
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
