import React from 'react';
import { sisterLocations } from '../data/bakeryData';
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-bakery-ink text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bakery-matcha text-white flex items-center justify-center font-serif text-lg font-bold">
                八
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  TAKAHACHI <span className="font-light italic text-bakery-honey">Bakery</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-white/50">
                  Japanese Patisserie & Artisanal Café
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Established in 2010 by Hiroyuki Takahashi and Executive Patissiere Naoko Mabuchi. Dedicated to delicate Japanese craftsmanship, French viennoiserie, and community joy in Tribeca, New York City.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/takahachibakery/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-bakery-azuki flex items-center justify-center text-white transition"
                title="Instagram"
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
              Bakery Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#menu" className="hover:text-white transition">Menu & Drinks</a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-white transition">Whole Cakes & Mousse</a>
              </li>
              <li>
                <a href="#order-builder" className="hover:text-white transition text-bakery-honey">Custom Cake Pre-Order</a>
              </li>
              <li>
                <a href="#chef" className="hover:text-white transition">Chef Naoko Mabuchi</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">Photo Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition">Press & Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition">Hours & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: The Takahachi Sister Locations */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bakery-honey">
              The Takahachi Trio
            </h4>
            <div className="space-y-3 text-xs">
              {sisterLocations.map((loc) => (
                <div key={loc.id} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center justify-between">
                    <strong className="text-white text-xs">{loc.name}</strong>
                    {loc.active ? (
                      <span className="text-[10px] text-bakery-matchaLight font-semibold">Current Site</span>
                    ) : (
                      <a
                        href={loc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-bakery-honey hover:underline flex items-center gap-1"
                      >
                        <span>Visit Site</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                  <p className="text-[11px] text-white/60 mt-0.5">{loc.address}</p>
                  <p className="text-[11px] text-white/60">{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Takahachi Bakery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with Japanese care & modern web design</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
