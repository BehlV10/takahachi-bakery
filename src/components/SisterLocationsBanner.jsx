import React from 'react';
import { sisterLocations } from '../data/bakeryData';
import { ExternalLink, MapPin, Phone, CheckCircle2, FileText, Navigation } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function SisterLocationsBanner() {
  return (
    <section className="py-16 bg-bakery-sand/70 border-y border-bakery-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-xs uppercase font-bold tracking-widest text-bakery-azuki">
            The Takahachi NYC Family
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-bakery-ink font-normal">
            Three Sister Locations, <span className="italic font-medium text-bakery-matcha">One Authentic Craft</span>
          </h2>
          <p className="text-sm text-bakery-muted">
            Founded by Hiroyuki Takahashi, explore each concept across Manhattan and Brooklyn.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sisterLocations.map((loc) => (
            <div
              key={loc.id}
              className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col bg-white ${
                loc.active
                  ? 'ring-2 ring-bakery-matcha shadow-card scale-[1.01]'
                  : 'border border-bakery-border hover:shadow-card hover:-translate-y-1'
              }`}
            >
              {/* Image Preview */}
              <div className="relative h-52 overflow-hidden bg-bakery-charcoal group">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase ${
                      loc.active
                        ? 'bg-bakery-matcha text-white'
                        : 'bg-black/60 backdrop-blur-md text-white'
                    }`}
                  >
                    {loc.active && <CheckCircle2 size={11} />}
                    {loc.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/90 text-bakery-charcoal">
                    {loc.shortLabel}
                  </span>
                </div>

                {/* Subtitle overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-xl font-bold text-white mb-0.5">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-medium text-white/80 line-clamp-1">{loc.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-xs text-bakery-muted leading-relaxed line-clamp-2">
                    {loc.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-bakery-charcoal pt-2 border-t border-bakery-border/60">
                    <p className="flex items-center gap-2">
                      <MapPin size={13} className="text-bakery-caramel flex-shrink-0" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={13} className="text-bakery-caramel flex-shrink-0" />
                      <a href={`tel:${loc.phone.replace(/[^0-9]/g, '')}`} className="hover:text-bakery-azuki transition font-medium">
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Unified Card Action Buttons */}
                <div className="pt-3 border-t border-bakery-border space-y-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={loc.url}
                      target={loc.active ? '_self' : '_blank'}
                      rel="noreferrer"
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-center transition flex items-center justify-center gap-1.5 ${
                        loc.active
                          ? 'bg-bakery-matchaPale text-bakery-matcha border border-bakery-matchaLight/40'
                          : 'bg-bakery-charcoal hover:bg-bakery-ink text-white shadow-sm'
                      }`}
                    >
                      <span>{loc.active ? 'Viewing Bakery Site' : `Visit ${loc.shortLabel} Site`}</span>
                      <ExternalLink size={12} />
                    </a>

                    <a
                      href={loc.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-bakery-border hover:bg-bakery-sand text-bakery-charcoal transition"
                      title="Directions in Google Maps"
                    >
                      <Navigation size={14} />
                    </a>

                    <a
                      href={loc.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl border border-bakery-border hover:bg-bakery-sand text-bakery-charcoal hover:text-bakery-azuki transition"
                      title="Instagram"
                    >
                      <InstagramIcon size={14} />
                    </a>
                  </div>

                  {loc.menuUrl && (
                    <a
                      href={loc.menuUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-1.5 text-center text-[11px] font-medium text-bakery-azuki hover:underline flex items-center justify-center gap-1"
                    >
                      <FileText size={12} />
                      <span>View Daily Specials & Menu (PDF)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
