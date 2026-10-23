import React, { useState } from 'react';
import { tribecaMenuData } from '../data/bakeryData';
import { Utensils, Clock, MapPin, Phone, FileText, ExternalLink, ArrowLeft, Star, Navigation } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function TribecaPage({ onSwitchLocation }) {
  const [activeTab, setActiveTab] = useState('lunch');

  const tabs = [
    { id: 'lunch', label: 'Lunch Bento Boxes ($18.50–$26.50)' },
    { id: 'appetizers', label: 'Appetizers & Salads ($6.50–$15)' },
    { id: 'sushi', label: 'Sushi Bar & Maki Rolls ($12–$38)' },
    { id: 'entrees', label: 'Donburi & Entrees ($20–$23.50)' }
  ];

  return (
    <div className="pt-28 pb-20 bg-stone-50 min-h-screen">
      {/* Back to Portal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={() => onSwitchLocation('portal')}
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-stone-900 transition bg-white px-3.5 py-1.5 rounded-full border border-stone-200 shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to All Takahachi Locations</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-stone-900 text-white min-h-[380px] flex items-end p-8 sm:p-12 shadow-xl border border-stone-200">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1542056410098-A998RT72HLZ4BN1KSD8D/LRG_DSC06048.JPG"
            alt="Takahachi Tribeca Sushi Bar"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 backdrop-blur-md text-blue-200 text-xs font-bold tracking-wider uppercase border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Tribeca Flagship Restaurant & Sushi Bar</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Takahachi <span className="italic font-medium text-blue-300">Tribeca</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Authentic Japanese dining on Duane Street. Serving market-fresh nigiri sushi, specialty maki rolls, lunch bento combinations, and daily seafood specials flown in from Tokyo.
            </p>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin size={13} className="text-blue-400" /> 145 Duane St, Tribeca, NYC
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <Clock size={13} className="text-blue-400" /> Lunch: 12–2:30 PM • Dinner: 5–10 PM
              </span>
              <a
                href="tel:2125711830"
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-3.5 py-1.5 rounded-lg transition shadow"
              >
                <Phone size={13} /> (212) 571-1830
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menu & Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Daily Specials PDF Notice */}
        <div className="mb-10 p-5 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-blue-950">
                Today’s Fresh Catch & Market Specials
              </h4>
              <p className="text-xs text-blue-800">
                Seasonal catches flown in weekly from Toyosu Market, Tokyo.
              </p>
            </div>
          </div>
          <a
            href="https://www.takahachi.net/s/Today-SP-menu-Mon-070124-c4hl.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <span>View Today’s Specials PDF</span>
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-stone-200 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Lunch Bento Boxes */}
        {activeTab === 'lunch' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tribecaMenuData.lunchBoxes.map((box, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      {box.name}
                    </h3>
                    <span className="font-serif font-bold text-blue-900 text-base">
                      {box.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {box.desc}
                  </p>
                </div>
                <p className="mt-3 text-[10px] uppercase font-bold text-blue-700 tracking-wider">
                  Served w/ Red or White Miso, Fresh Salad & 2 Sides
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Appetizers & Salads */}
        {activeTab === 'appetizers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tribecaMenuData.appetizers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {item.name}
                    </h3>
                    <span className="font-serif font-bold text-blue-900 text-sm">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Sushi Bar & Maki */}
        {activeTab === 'sushi' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tribecaMenuData.sushiAndMaki.map((roll, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {roll.name}
                    </h3>
                    <span className="font-serif font-bold text-blue-900 text-base">
                      {roll.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {roll.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Donburi & Entrees */}
        {activeTab === 'entrees' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tribecaMenuData.donburiAndEntrees.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {item.name}
                    </h3>
                    <span className="font-serif font-bold text-blue-900 text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <p className="mt-3 text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                  Served with House Miso Soup
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Location & Reservation Box */}
        <div className="mt-14 p-8 rounded-3xl bg-white border border-stone-200 shadow-md grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Visit Takahachi Tribeca
            </h3>
            <p className="text-xs text-stone-600">
              145 Duane Street, New York, NY 10013
            </p>
            <p className="text-xs text-stone-500">
              Subway: 1/2/3 at Chambers St • A/C/E at Chambers St
            </p>
          </div>

          <div className="space-y-1 text-xs text-stone-700">
            <p><strong>Lunch:</strong> Mon–Sun 12:00 PM – 2:30 PM</p>
            <p><strong>Dinner:</strong> Mon–Sun 5:00 PM – 10:00 PM</p>
            <p><strong>Phone:</strong> (212) 571-1830</p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="tel:2125711830"
              className="py-2.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider text-center shadow"
            >
              Call for Reservations
            </a>
            <a
              href="https://maps.google.com/?q=Takahachi+Tribeca+145+Duane+St+New+York+NY+10013"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 font-medium text-xs text-center flex items-center justify-center gap-1.5"
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
