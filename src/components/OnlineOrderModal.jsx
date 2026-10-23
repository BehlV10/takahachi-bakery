import React from 'react';
import { X, Phone, ShoppingBag, ExternalLink, Sparkles, Bike, Calendar } from 'lucide-react';

export default function OnlineOrderModal({ isOpen, onClose, onSelectLocation }) {
  if (!isOpen) return null;

  const handleOpenBuilder = (e) => {
    e.preventDefault();
    if (onSelectLocation) {
      onSelectLocation('bakery');
    }
    onClose();
    setTimeout(() => {
      const el = document.getElementById('order-builder');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-bakery-border relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-bakery-muted hover:text-bakery-charcoal hover:bg-bakery-sand transition"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <div className="w-12 h-12 rounded-full bg-bakery-matchaPale text-bakery-matcha mx-auto flex items-center justify-center mb-2">
            <ShoppingBag size={24} />
          </div>
          <h3 className="font-serif text-2xl font-bold text-bakery-ink">
            Order from Takahachi Bakery
          </h3>
          <p className="text-xs text-bakery-muted">
            Choose your preferred way to order fresh pastries, coffee, and celebration cakes.
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {/* Option 1: Whole Cake Pre-Order Builder */}
          <button
            type="button"
            onClick={handleOpenBuilder}
            className="w-full text-left p-4 rounded-2xl border-2 border-bakery-azuki/40 hover:border-bakery-azuki bg-bakery-azuki/5 hover:bg-bakery-azuki/10 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-bakery-azuki text-white flex items-center justify-center shadow-sm">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-bakery-ink group-hover:text-bakery-azuki transition">
                  Whole Cake Pre-Order Builder
                </h4>
                <p className="text-xs text-bakery-muted">
                  Custom message plaque, size calculator & advance booking
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-bakery-azuki">Configure →</span>
          </button>

          {/* Option 2: Direct Phone Order */}
          <a
            href="tel:2127915550"
            className="p-4 rounded-2xl border border-bakery-border hover:bg-bakery-cream transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-bakery-matcha text-white flex items-center justify-center shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-bakery-ink">
                  Call for Counter Pickup
                </h4>
                <p className="text-xs text-bakery-muted font-mono">
                  (212) 791-5550 (Mon–Fri 8:30 AM – 6 PM)
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-bakery-matcha">Call Now →</span>
          </a>

          {/* Delivery Partners */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-bakery-muted flex items-center gap-1">
                <Bike size={13} /> Official Online Delivery Partners:
              </p>
              <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded font-semibold border border-green-200">
                Verified Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-xs">
              <a
                href="https://www.grubhub.com/restaurant/takahachi-bakery-new-york/2435773"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border-2 border-red-500/30 hover:border-red-500 bg-red-50/30 hover:bg-red-50 transition font-medium flex flex-col items-center gap-1 shadow-sm group"
              >
                <span className="font-bold text-red-600 text-sm group-hover:scale-105 transition-transform">Grubhub</span>
                <span className="text-[11px] text-bakery-muted">Official Store Menu →</span>
              </a>

              <a
                href="https://www.seamless.com/menu/takahachi-bakery-new-york/2435773"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl border-2 border-orange-500/30 hover:border-orange-500 bg-orange-50/30 hover:bg-orange-50 transition font-medium flex flex-col items-center gap-1 shadow-sm group"
              >
                <span className="font-bold text-orange-600 text-sm group-hover:scale-105 transition-transform">Seamless</span>
                <span className="text-[11px] text-bakery-muted">Official Store Menu →</span>
              </a>
            </div>

            {/* UberEats / DoorDash Note */}
            <div className="mt-3 p-2.5 rounded-xl bg-bakery-sand/60 border border-bakery-border/60 text-[11px] text-bakery-muted flex items-center justify-between">
              <span>Looking for UberEats or DoorDash?</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.ubereats.com/search?q=Takahachi+Bakery"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-green-800 hover:underline"
                >
                  UberEats Search ↗
                </a>
                <span>•</span>
                <a
                  href="https://www.doordash.com/search/store/Takahachi%20Bakery/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-red-700 hover:underline"
                >
                  DoorDash ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-bakery-muted mt-5">
          Pickup Address: 25 Murray St, New York, NY 10007
        </p>
      </div>
    </div>
  );
}
