import React from 'react';
import { sisterLocations } from '../data/bakeryData';
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';

export default function Footer({ onSelectLocation }) {
  return (
    <footer className="bg-bakery-ink text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onSelectLocation && onSelectLocation('portal')}
                className="flex items-center gap-3 text-left group"
              >
                <div className="w-10 h-10 rounded-full bg-bakery-matcha text-white flex items-center justify-center font-serif text-lg font-bold group-hover:scale-105 transition">
                  八
                </div>
                <div>
                  <span className="font-serif text-2xl font-bold tracking-wider text-white">
                    TAKAHACHI <span className="font-light italic text-bakery-honey">Group</span>
                  </span>
                  <p className="text-[10px] tracking-widest uppercase text-white/50">
                    Artisanal Patisserie, Sushi Dining & Brooklyn Izakaya
                  </p>
                </div>
              </button>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Established in New York City by Hiroyuki Takahashi. Bringing dedication, Japanese ingredient integrity, and culinary warmth to Tribeca and Bushwick across three distinct concepts.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/takahachibakery/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-bakery-azuki flex items-center justify-center text-white transition"
                title="Bakery Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/TAKAHACHI-BAKERY-112319308787259/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition text-xs font-bold"
                title="Facebook"
              >
                f
              </a>
              <a
                href="https://www.yelp.com/biz/takahachi-bakery-new-york"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition text-xs font-bold"
                title="Yelp"
              >
                ★
              </a>
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g60763-d2395138-Reviews-Takahachi_Bakery-New_York_City_New_York.html"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition text-xs font-bold"
                title="TripAdvisor"
              >
                TA
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bakery-honey">
              Destination Portals
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectLocation && onSelectLocation('portal')}
                  className="hover:text-white transition text-left"
                >
                  ● Front Page / All Concepts
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectLocation && onSelectLocation('bakery')}
                  className="hover:text-white transition text-left"
                >
                  ● Takahachi Bakery (Tribeca)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectLocation && onSelectLocation('tribeca')}
                  className="hover:text-white transition text-left"
                >
                  ● Takahachi Tribeca (Sushi & Dining)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectLocation && onSelectLocation('sa')}
                  className="hover:text-white transition text-left"
                >
                  ● Takahachi SA (Brooklyn Izakaya)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: The Takahachi Sister Locations Cards */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bakery-honey">
              The Takahachi Trio
            </h4>
            <div className="space-y-2.5 text-xs">
              {sisterLocations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => onSelectLocation && onSelectLocation(loc.id)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-white text-xs hover:text-bakery-honey transition">
                      {loc.name}
                    </strong>
                    <span className="text-[10px] text-bakery-honey font-bold">
                      Open Page →
                    </span>
                  </div>
                  <p className="text-[11px] text-white/60 mt-0.5">{loc.concept}</p>
                  <p className="text-[10px] text-white/40">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Takahachi Group NYC. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <button onClick={() => onSelectLocation && onSelectLocation('portal')} className="hover:underline">
              All 3 Locations Portal
            </button>
            <span>•</span>
            <button onClick={() => onSelectLocation && onSelectLocation('bakery')} className="hover:underline">
              Bakery
            </button>
            <span>•</span>
            <button onClick={() => onSelectLocation && onSelectLocation('tribeca')} className="hover:underline">
              Tribeca Sushi
            </button>
            <span>•</span>
            <button onClick={() => onSelectLocation && onSelectLocation('sa')} className="hover:underline">
              SA Izakaya
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
