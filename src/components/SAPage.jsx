import React, { useState } from 'react';
import { saMenuData } from '../data/bakeryData';
import { Flame, Wine, Clock, MapPin, Phone, ArrowLeft, Navigation, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function SAPage({ onSwitchLocation }) {
  const [activeTab, setActiveTab] = useState('izakaya');

  const tabs = [
    { id: 'izakaya', label: 'Izakaya Small Plates ($9–$14.50)' },
    { id: 'yakitori', label: 'Charcoal Yakitori Skewers ($7.50–$9.50)' },
    { id: 'sake', label: 'Craft Sake Flights & Highballs ($7–$18)' }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#161214] text-stone-200 min-h-screen">
      {/* Back to Portal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={() => onSwitchLocation('portal')}
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-300 hover:text-white transition bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
        >
          <ArrowLeft size={14} />
          <span>Back to All Takahachi Locations</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-black text-white min-h-[400px] flex items-end p-8 sm:p-12 shadow-2xl border border-red-950/40">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/2d5d883f-1ef9-451e-b0a3-47a652c8f5a4/061523_TSA_MapGraphic+20x15.jpg"
            alt="Takahachi SA Tokaido Road Map"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 backdrop-blur-md text-red-300 text-xs font-bold tracking-wider uppercase border border-red-800/40">
              <Flame size={12} className="text-red-400" />
              <span>Bushwick, Brooklyn • Izakaya & Sake Bar</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Takahachi <span className="italic font-medium text-red-400">SA</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Inspired by the historic "Service Areas" along Japan’s Tokaido Highway. Serving sizzling charcoal yakitori skewers, comforting braised pork kakuni, and small-batch Japanese craft sake in Bushwick.
            </p>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin size={13} className="text-red-400" /> 29 Wyckoff Ave, Bushwick, Brooklyn
              </span>
              <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <Clock size={13} className="text-red-400" /> Tue–Sun: 5:00 PM – 11:30 PM (Mon Closed)
              </span>
              <a
                href="tel:9296074200"
                className="flex items-center gap-1.5 bg-red-700 hover:bg-red-600 text-white font-bold px-3.5 py-1.5 rounded-lg transition shadow"
              >
                <Phone size={13} /> (929) 607-4200
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* The Tokaido Road Heritage Story */}
        <div className="p-8 rounded-3xl bg-stone-900/90 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-400 flex items-center gap-1.5">
              <Sparkles size={13} />
              The Historical Origin
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {saMenuData.tokaidoStory.title}
            </h3>
            <p className="text-xs text-red-300 font-medium">
              {saMenuData.tokaidoStory.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              {saMenuData.tokaidoStory.text}
            </p>
          </div>
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-stone-700">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1693400317240-MZK1V4R728VKCBJYV4JT/Screen%2BShot%2B2023-08-16%2Bat%2B1.22.58%2BPM.jpg"
              alt="Hiroshige Ukiyo-e Tokaido Woodblock Print"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Menu Tabs */}
        <div>
          <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-800 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-red-700 text-white shadow'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Izakaya Small Plates */}
          {activeTab === 'izakaya' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {saMenuData.izakayaPlates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 shadow-sm hover:border-red-900/60 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-white">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-400 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Yakitori Skewers */}
          {activeTab === 'yakitori' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {saMenuData.yakitoriSkewers.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 shadow-sm hover:border-red-900/60 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-white">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-400 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Grilled Over Natural Binchotan Charcoal
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Craft Sake & Drinks */}
          {activeTab === 'sake' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {saMenuData.sakeAndDrinks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/80 p-5 rounded-2xl border border-stone-800 shadow-sm hover:border-red-900/60 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-white">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-400 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location & Contact Bar */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-white">
              Visit Takahachi SA
            </h3>
            <p className="text-xs text-stone-400">
              29 Wyckoff Avenue, Brooklyn, NY 11237
            </p>
            <p className="text-xs text-stone-500">
              Subway: L train at DeKalb Ave or Jefferson St
            </p>
          </div>

          <div className="space-y-1 text-xs text-stone-300">
            <p><strong>Tuesday – Sunday:</strong> 5:00 PM – 11:30 PM</p>
            <p><strong>Monday:</strong> Closed</p>
            <p><strong>Phone:</strong> (929) 607-4200</p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="tel:9296074200"
              className="py-2.5 px-4 rounded-xl bg-red-700 hover:bg-red-600 text-white font-semibold text-xs uppercase tracking-wider text-center shadow"
            >
              Call for Walk-in & Tables
            </a>
            <a
              href="https://maps.google.com/?q=Takahachi+SA+29+Wyckoff+Ave+Brooklyn+NY+11237"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-4 rounded-xl border border-stone-700 hover:bg-stone-800 text-stone-200 font-medium text-xs text-center flex items-center justify-center gap-1.5"
            >
              <Navigation size={13} />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
