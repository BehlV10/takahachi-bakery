import React from 'react';
import { sisterLocations } from '../data/bakeryData';
import { ArrowRight, MapPin, Phone, Clock, DollarSign, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PortalHome({ onSelectLocation }) {
  return (
    <div className="pt-28 pb-20 bg-bakery-cream">
      {/* Brand Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bakery-sand border border-bakery-border text-xs font-bold uppercase tracking-wider text-bakery-charcoal shadow-sm">
          <span>竹八 • NEW YORK CITY</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bakery-ink font-normal leading-tight max-w-4xl mx-auto">
          One Japanese Culinary Family. <br className="hidden sm:inline" />
          <span className="italic font-medium text-bakery-matcha">Three Distinct Destinations</span>.
        </h1>

        <p className="text-sm sm:text-base text-bakery-muted max-w-2xl mx-auto leading-relaxed">
          Founded by Hiroyuki Takahashi, the Takahachi family brings authentic Japanese gastronomy to Manhattan and Brooklyn—from artisanal morning viennoiserie to fresh Toyosu market sushi and late-night izakaya sake.
        </p>

        <p className="text-xs uppercase font-bold tracking-widest text-bakery-azuki pt-2">
          Select a destination below to explore menus, individual offerings & pricing:
        </p>
      </section>

      {/* 3 Dedicated Concept Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sisterLocations.map((loc) => {
            const isBakery = loc.id === 'bakery';
            const isTribeca = loc.id === 'tribeca';
            const isSA = loc.id === 'sa';

            return (
              <div
                key={loc.id}
                className="bg-white rounded-3xl overflow-hidden border border-bakery-border shadow-soft hover:shadow-float transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-bakery-charcoal">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                      {loc.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white/95 text-bakery-charcoal shadow">
                      {loc.shortLabel}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="font-serif text-2xl font-bold">{loc.name}</h2>
                    <p className="text-xs text-white/80 font-medium">{loc.concept}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs text-bakery-charcoal/90 leading-relaxed font-medium">
                      "{loc.tagline}"
                    </p>

                    {/* Pricing Highlight Box */}
                    <div className="p-3.5 rounded-2xl bg-bakery-cream border border-bakery-border text-xs space-y-1">
                      <div className="flex items-center gap-1 font-bold text-bakery-ink">
                        <DollarSign size={13} className="text-bakery-azuki" />
                        <span>Pricing & Offerings:</span>
                      </div>
                      <p className="text-[11px] text-bakery-azuki font-semibold">
                        {loc.priceRange}
                      </p>
                    </div>

                    {/* Signature Specialties */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-muted block">
                        Signature Items:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.specialties.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-bakery-sand/70 text-bakery-charcoal font-medium border border-bakery-border/50"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Logistics */}
                    <div className="space-y-1.5 text-xs text-bakery-muted pt-2 border-t border-bakery-border/60">
                      <p className="flex items-center gap-2">
                        <MapPin size={13} className="text-bakery-caramel flex-shrink-0" />
                        <span>{loc.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock size={13} className="text-bakery-caramel flex-shrink-0" />
                        <span className="text-[11px]">{loc.hours}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone size={13} className="text-bakery-caramel flex-shrink-0" />
                        <span className="font-semibold text-bakery-charcoal">{loc.phone}</span>
                      </p>
                    </div>
                  </div>

                  {/* Primary Button to Enter Individual Webpage */}
                  <button
                    onClick={() => onSelectLocation(loc.id)}
                    className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider transition shadow flex items-center justify-center gap-2 ${
                      isBakery
                        ? 'bg-bakery-matcha hover:bg-bakery-charcoal'
                        : isTribeca
                        ? 'bg-blue-900 hover:bg-blue-800'
                        : 'bg-red-700 hover:bg-red-600'
                    }`}
                  >
                    <span>View {loc.name} Page & Full Menu</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-bakery-border shadow-card space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-bakery-ink">
              Quick Comparison: Offerings & Pricing by Location
            </h3>
            <p className="text-xs text-bakery-muted">
              Choose the right Takahachi experience for your occasion.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-bakery-border text-bakery-muted uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-3">Location</th>
                  <th className="py-3 px-3">Primary Cuisine</th>
                  <th className="py-3 px-3">Price Point</th>
                  <th className="py-3 px-3">Hours & Days</th>
                  <th className="py-3 px-3">Best For</th>
                  <th className="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bakery-border/60">
                <tr className="hover:bg-bakery-cream/50 transition">
                  <td className="py-4 px-3">
                    <strong className="block text-bakery-ink text-sm">Takahachi Bakery</strong>
                    <span className="text-bakery-muted">25 Murray St, Tribeca</span>
                  </td>
                  <td className="py-4 px-3 font-medium">Patisserie, Shokupan, Whole Cakes & Matcha Café</td>
                  <td className="py-4 px-3 font-bold text-bakery-azuki">$1.90 – $6.50 (Drinks/Breads)<br/>$34 – $240 (Whole Cakes)</td>
                  <td className="py-4 px-3">Mon–Fri: 8:30 AM – 6:00 PM<br/><span className="text-bakery-muted">(Weekends Closed)</span></td>
                  <td className="py-4 px-3">Morning coffee, bakery treats & custom birthday cakes</td>
                  <td className="py-4 px-3 text-right">
                    <button
                      onClick={() => onSelectLocation('bakery')}
                      className="px-3 py-1.5 rounded-lg bg-bakery-matcha text-white font-bold text-xs hover:bg-bakery-charcoal transition"
                    >
                      Enter Bakery
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-bakery-cream/50 transition">
                  <td className="py-4 px-3">
                    <strong className="block text-stone-900 text-sm">Takahachi Tribeca</strong>
                    <span className="text-bakery-muted">145 Duane St, Tribeca</span>
                  </td>
                  <td className="py-4 px-3 font-medium">Sushi Bar, Lunch Bento Boxes & Robata Dinners</td>
                  <td className="py-4 px-3 font-bold text-blue-900">$18.50 – $26.50 (Lunch Boxes)<br/>$22 – $45+ (Dinners)</td>
                  <td className="py-4 px-3">Mon–Sun Lunch: 12–2:30 PM<br/>Dinner: 5–10 PM</td>
                  <td className="py-4 px-3">Fresh sushi lunch, business meetings & date night dinners</td>
                  <td className="py-4 px-3 text-right">
                    <button
                      onClick={() => onSelectLocation('tribeca')}
                      className="px-3 py-1.5 rounded-lg bg-blue-900 text-white font-bold text-xs hover:bg-blue-800 transition"
                    >
                      Enter Tribeca
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-bakery-cream/50 transition">
                  <td className="py-4 px-3">
                    <strong className="block text-stone-900 text-sm">Takahachi SA</strong>
                    <span className="text-bakery-muted">29 Wyckoff Ave, Bushwick</span>
                  </td>
                  <td className="py-4 px-3 font-medium">Bushwick Izakaya, Yakitori Skewers & Craft Sake</td>
                  <td className="py-4 px-3 font-bold text-red-700">$9 – $14.50 (Plates)<br/>$7.50 – $18 (Yakitori & Sake)</td>
                  <td className="py-4 px-3">Tue–Sun: 5:00 PM – 11:30 PM<br/><span className="text-bakery-muted">(Mon Closed)</span></td>
                  <td className="py-4 px-3">Evening drinks, friends gathering, late-night izakaya bites</td>
                  <td className="py-4 px-3 text-right">
                    <button
                      onClick={() => onSelectLocation('sa')}
                      className="px-3 py-1.5 rounded-lg bg-red-700 text-white font-bold text-xs hover:bg-red-600 transition"
                    >
                      Enter SA
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
