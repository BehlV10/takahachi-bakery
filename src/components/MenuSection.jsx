import React, { useState } from 'react';
import { drinksMenu, bakedGoods } from '../data/bakeryData';
import { Coffee, CupSoda, Croissant, Sparkles, Plus, Search } from 'lucide-react';

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('breads');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'breads', label: 'Daily Breads & Savory', icon: Croissant },
    { id: 'tea', label: 'Matcha & Japanese Teas', icon: CupSoda },
    { id: 'coffee', label: 'Espresso & Coffee', icon: Coffee },
  ];

  return (
    <section id="menu" className="py-20 bg-white border-t border-bakery-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-bakery-matcha">
            Café & Bakery Menu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            Baked Fresh Every Morning, <span className="italic font-medium text-bakery-caramel">Brewed to Perfection</span>
          </h2>
          <p className="text-sm sm:text-base text-bakery-muted">
            From golden crispy Japanese Curry Pan and soft Hokkaido Shokupan to whisked ceremonial Kyoto matcha and rich espresso drinks.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-bakery-charcoal text-white shadow-md'
                      : 'bg-bakery-sand/70 hover:bg-bakery-sand text-bakery-charcoal border border-bakery-border'
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content by active tab */}
        <div className="mt-8">
          {/* TAB 1: DAILY BREADS & SAVORY */}
          {activeTab === 'breads' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bakedGoods.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-bakery-cream/50 rounded-2xl p-5 border border-bakery-border hover:border-bakery-caramel/40 hover:shadow-card transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-bakery-caramel/10 text-bakery-caramel">
                        {item.tag}
                      </span>
                      <span className="font-serif text-lg font-bold text-bakery-azuki">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-bakery-ink mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-bakery-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-bakery-border/50 text-[11px] text-bakery-matcha font-medium flex items-center gap-1">
                    <span>Fresh batch daily at 8:30 AM</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: MATCHA & JAPANESE TEAS */}
          {activeTab === 'tea' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinksMenu.tea.map((tea, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-bakery-cream/40 border border-bakery-border hover:bg-bakery-cream transition flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-base font-bold text-bakery-ink">
                          {tea.name}
                        </h4>
                        <p className="text-xs text-bakery-muted mt-1 leading-relaxed">
                          {tea.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-bakery-border/60 flex flex-wrap items-center justify-between text-xs gap-2">
                      {tea.hot !== '—' && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-azuki bg-bakery-azuki/10 px-2 py-0.5 rounded">
                            Hot
                          </span>
                          <span className="font-semibold text-bakery-charcoal">{tea.hot}</span>
                        </div>
                      )}
                      {tea.iced !== '—' && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                            Iced
                          </span>
                          <span className="font-semibold text-bakery-charcoal">{tea.iced}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tea Customization Add-ons */}
              <div className="p-6 rounded-2xl bg-bakery-matchaPale border border-bakery-matchaLight/30">
                <p className="text-xs font-bold uppercase tracking-wider text-bakery-matcha mb-3">
                  Milk Alternatives & Infusions:
                </p>
                <div className="flex flex-wrap gap-3">
                  {drinksMenu.customizations.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/90 border border-bakery-matchaLight/40 text-xs text-bakery-charcoal font-medium flex items-center gap-1.5"
                    >
                      <Plus size={12} className="text-bakery-matcha" />
                      <span>{c.item}</span>
                      <strong className="text-bakery-azuki">{c.price}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ESPRESSO & COFFEE */}
          {activeTab === 'coffee' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {drinksMenu.coffee.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-bakery-cream/40 border border-bakery-border hover:bg-bakery-cream transition flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-base font-bold text-bakery-ink">
                          {item.name}
                        </h4>
                        <p className="text-xs text-bakery-muted mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-bakery-border/60 flex flex-wrap items-center justify-between text-xs gap-2">
                      {item.hot !== '—' && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-azuki bg-bakery-azuki/10 px-2 py-0.5 rounded">
                            Hot
                          </span>
                          <span className="font-semibold text-bakery-charcoal">{item.hot}</span>
                        </div>
                      )}
                      {item.iced !== '—' && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                            Iced
                          </span>
                          <span className="font-semibold text-bakery-charcoal">{item.iced}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Syrups & Shots */}
              <div className="p-6 rounded-2xl bg-bakery-sand border border-bakery-border">
                <p className="text-xs font-bold uppercase tracking-wider text-bakery-charcoal mb-3">
                  Barista Customizations:
                </p>
                <div className="flex flex-wrap gap-3">
                  {drinksMenu.customizations.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-bakery-border text-xs text-bakery-charcoal font-medium flex items-center gap-1.5"
                    >
                      <Plus size={12} className="text-bakery-caramel" />
                      <span>{c.item}</span>
                      <strong className="text-bakery-azuki">{c.price}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
