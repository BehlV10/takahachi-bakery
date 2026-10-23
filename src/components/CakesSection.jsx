import React, { useState } from 'react';
import { cakeCatalog } from '../data/bakeryData';
import { Sparkles, Users, Ruler, Check, ArrowRight } from 'lucide-react';

export default function CakesSection({ onSelectCakeForOrder }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Whole Cakes' },
    { id: 'mousse', label: 'Mousse Creations' },
    { id: 'sponge', label: 'Shortcakes' },
    { id: 'crepe', label: 'Mille Crêpe' },
    { id: 'cheesecake', label: 'Cheesecakes' },
    { id: 'chocolate', label: 'Chocolate Cakes' },
  ];

  const filteredCakes = filter === 'all'
    ? cakeCatalog
    : cakeCatalog.filter((c) => c.category === filter);

  return (
    <section id="cakes" className="py-20 bg-bakery-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-bakery-azuki uppercase">
            <Sparkles size={14} />
            <span>Artisanal Celebration Cakes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            Whole Cakes & <span className="italic font-medium text-bakery-matcha">Patisserie Mousse</span>
          </h2>
          <p className="text-sm sm:text-base text-bakery-muted leading-relaxed">
            Baked fresh to order for birthdays, weddings, celebrations, and intimate gatherings. Please order at least 24 to 48 hours in advance for whole cakes.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-bakery-matcha text-white shadow-sm'
                    : 'bg-white hover:bg-bakery-sand text-bakery-charcoal border border-bakery-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-3xl overflow-hidden border border-bakery-border shadow-soft hover:shadow-float transition-all duration-300 flex flex-col group"
            >
              {/* Cake Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bakery-sand">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-bakery-charcoal/80 backdrop-blur-md text-white">
                    {cake.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-jp px-2 py-0.5 rounded bg-white/90 backdrop-blur-md text-bakery-charcoal font-medium">
                    {cake.jpName}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-bakery-ink mb-2">
                    {cake.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-bakery-muted leading-relaxed line-clamp-3">
                    {cake.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 pt-3 border-t border-bakery-border/60 flex flex-wrap gap-1.5">
                    {cake.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-1 rounded-md bg-bakery-cream text-bakery-charcoal/80 flex items-center gap-1"
                      >
                        <Check size={10} className="text-bakery-matcha" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sizing & Pricing Table */}
                <div className="bg-bakery-cream/70 rounded-xl p-3.5 space-y-2 border border-bakery-border/70">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-bakery-muted">
                    Sizes & Servings:
                  </p>
                  <div className="space-y-1.5">
                    {cake.sizes.map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-bakery-charcoal">
                          <Ruler size={12} className="text-bakery-caramel" />
                          <span className="font-medium">{s.size}</span>
                          <span className="text-bakery-muted text-[11px]">({s.serves})</span>
                        </div>
                        <span className="font-serif font-bold text-bakery-azuki text-sm">
                          ${s.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onSelectCakeForOrder(cake)}
                  className="w-full py-3 px-4 rounded-xl bg-bakery-matcha hover:bg-bakery-charcoal text-white font-medium text-xs tracking-wide uppercase transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 group-hover:bg-bakery-charcoal"
                >
                  <Sparkles size={14} />
                  <span>Customize & Pre-Order This Cake</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Whole Cake Ordering Notice Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-bakery-matchaPale border border-bakery-matchaLight/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-bakery-matcha">
              Need a Custom Birthday Plaque or Party Size?
            </h4>
            <p className="text-xs text-bakery-charcoal/80">
              Complimentary personalized chocolate message plaques and birthday candles are included with all whole cake pre-orders.
            </p>
          </div>
          <a
            href="#order-builder"
            className="px-6 py-2.5 rounded-xl bg-bakery-matcha text-white font-semibold text-xs tracking-wide uppercase shadow hover:bg-bakery-ink transition whitespace-nowrap"
          >
            Launch Cake Builder ↓
          </a>
        </div>

      </div>
    </section>
  );
}
