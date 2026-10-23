import React, { useState } from 'react';
import { saMenuData } from '../data/bakeryData';
import { Flame, Wine, Clock, MapPin, Phone, ArrowLeft, Navigation, Sparkles, ZoomIn, X } from 'lucide-react';
import { InstagramIcon } from './Icons';
import hiroshigeImg from '../assets/images/tokaido-mariko-hiroshige.jpg';

export default function SAPage({ onSwitchLocation }) {
  const [activeTab, setActiveTab] = useState('izakaya');
  const [zoomImage, setZoomImage] = useState(null);

  const tabs = [
    { id: 'izakaya', label: 'Izakaya Small Plates ($9–$14.50)' },
    { id: 'yakitori', label: 'Charcoal Yakitori Skewers ($7.50–$9.50)' },
    { id: 'sake', label: 'Craft Sake Flights & Highballs ($7–$18)' }
  ];

  const mapGraphicUrl = "https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/2d5d883f-1ef9-451e-b0a3-47a652c8f5a4/061523_TSA_MapGraphic+20x15.jpg";

  return (
    <div className="pt-28 pb-20 bg-bakery-cream text-bakery-charcoal min-h-screen">
      {/* Back to Portal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={() => onSwitchLocation('portal')}
          className="inline-flex items-center gap-2 text-xs font-bold text-bakery-charcoal hover:text-bakery-ink transition bg-white px-3.5 py-1.5 rounded-full border border-bakery-border shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to All Takahachi Locations</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-bakery-ink text-white min-h-[380px] flex items-end p-8 sm:p-12 shadow-card border border-bakery-border">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1691863368575-URSW9TOI8MMUVB92A971/IMG_6792%2Bcopy.jpg"
            alt="Takahachi SA Brooklyn Izakaya Interior"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 backdrop-blur-md text-red-200 text-xs font-bold tracking-wider uppercase border border-red-700/40">
              <Flame size={13} className="text-red-400" />
              <span>Bushwick, Brooklyn • Izakaya, Yakitori & Sake Bar</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Takahachi <span className="italic font-medium text-red-400">SA</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Takahachi "Service Area" brings the convivial roadside comfort of Japan's historic Tokaido highway to Bushwick, Brooklyn. Enjoy sizzling binchotan charcoal yakitori, melt-in-mouth pork belly kakuni, and small-batch craft sake.
            </p>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-stone-200">
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin size={13} className="text-red-400" /> 29 Wyckoff Ave, Brooklyn (L Train)
              </span>
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
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
        
        {/* ================================================================= */}
        {/* FEATURED: The "Service Area" on the Tokaido Road + Main Map Photo */}
        {/* ================================================================= */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-bakery-border shadow-card space-y-8">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} className="text-red-600" />
              <span>Historical Concept & Route Heritage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-bakery-ink font-normal">
              The “Service Area” on the <span className="italic font-medium text-red-700">Tokaido Road</span>
            </h2>
            <p className="text-xs sm:text-sm text-bakery-muted font-medium">
              Inspired by Utagawa Hiroshige’s 53 Stations of the Tokaido (1832) & Edo-period traveler waystations
            </p>
          </div>

          {/* Tokaido Illustrated Map Card (Featured Prominently) */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-bakery-border bg-bakery-sand/40 shadow-sm group">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-100 cursor-pointer" onClick={() => setIsMapModalOpen(true)}>
              <img
                src={mapGraphicUrl}
                alt="Historic Tokaido Road Map Graphic showing 53 stations from Edo to Kyoto"
                className="w-full h-full object-contain sm:object-cover object-center group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setZoomImage({
                    url: mapGraphicUrl,
                    title: "Takahachi SA — Tokaido Road Highway Map Graphic",
                    subtitle: "53 Historic Service Area Stations (1603–1832)"
                  })}
                  className="px-4 py-2 rounded-xl bg-white/95 text-bakery-charcoal text-xs font-bold shadow-lg flex items-center gap-1.5 group-hover:scale-105 transition"
                >
                  <ZoomIn size={14} className="text-red-700" />
                  <span>Click to Inspect Full Tokaido Map Graphic</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-bakery-sand/80 border-t border-bakery-border flex flex-col sm:flex-row items-center justify-between text-xs text-bakery-charcoal gap-2">
              <span className="font-medium text-center sm:text-left">
                🗺️ <strong>Takahachi SA Tokaido Road Map Graphic</strong>: Tracing the route from Nihonbashi (Edo) to Sanjo Ohashi (Kyoto).
              </span>
              <button
                type="button"
                onClick={() => setZoomImage({
                  url: mapGraphicUrl,
                  title: "Takahachi SA — Tokaido Road Highway Map Graphic",
                  subtitle: "53 Historic Service Area Stations (1603–1832)"
                })}
                className="text-red-700 hover:text-red-800 font-bold underline flex items-center gap-1"
              >
                <span>View High-Res Map</span>
              </button>
            </div>
          </div>

          {/* Historical Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-bakery-charcoal/90 leading-relaxed">
              <p>
                <strong>THE TOKAIDO ("Eastern Sea Road")</strong> was Japan’s most celebrated highway. Constructed in 1603 by the Tokugawa shogunate, it joined Edo (modern-day Tokyo) with Kyoto across 300 miles of coastal plains, mountain passes, and rivers.
              </p>
              <p>
                Spaced at regular day-walk intervals along the road were <strong>53 stopping stations—the original "Service Areas" (SA)</strong>—where travelers, porters, merchants, and samurai found stables, freshly cooked meals, warm hospitality, and a welcoming night’s rest.
              </p>
              <p>
                <strong>UTAGAWA HIROSHIGE (1797–1858)</strong>, Japan’s master landscape artist, traveled this exact route in 1832, immortalizing the passing scenery, street-food stalls, and sake stations in his renowned <em>The Fifty-Three Stations of the Tokaido</em> woodblock prints.
              </p>
              <p className="font-medium text-bakery-ink">
                At <strong>Takahachi SA in Bushwick</strong>, we bring this timeless tradition of conviviality to life with sizzling skewers, comforting homestyle dishes, and chilled craft sake.
              </p>
            </div>

            {/* Authentic Hiroshige Woodblock Card */}
            <div
              onClick={() => setZoomImage({
                url: hiroshigeImg,
                title: "Utagawa Hiroshige — The Fifty-Three Stations of the Tōkaidō",
                subtitle: "Station 20: The Famous Teahouse at Mariko (c. 1833–1834) — Travelers resting at a roadside inn"
              })}
              className="md:col-span-4 rounded-2xl overflow-hidden border border-bakery-border bg-white shadow-soft p-3 space-y-2 cursor-pointer group hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              <div className="relative rounded-lg overflow-hidden bg-stone-100">
                <img
                  src={hiroshigeImg}
                  alt="Utagawa Hiroshige — The Famous Teahouse at Mariko (Station 20, 53 Stations of the Tokaido)"
                  className="w-full h-auto rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={12} />
                  <span>Inspect</span>
                </div>
              </div>
              <div className="text-center space-y-0.5 pt-1">
                <p className="text-xs font-bold text-bakery-ink">
                  Utagawa Hiroshige (1833)
                </p>
                <p className="text-[11px] text-bakery-muted italic">
                  Station 20: The Famous Teahouse at Mariko — travelers stopping for food & sake along the Tokaido
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Menu & Offerings Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-3xl font-normal text-bakery-ink">
              Izakaya Menu & <span className="italic font-medium text-red-700">Craft Sake</span>
            </h3>
            <p className="text-xs text-bakery-muted">
              Designed for sharing with friends, sipping cold beer, and enjoying authentic Japanese pub culture.
            </p>
          </div>

          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-bakery-border pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-red-700 text-white shadow'
                    : 'bg-white hover:bg-bakery-sand text-bakery-charcoal border border-bakery-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Izakaya Small Plates */}
          {activeTab === 'izakaya' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {saMenuData.izakayaPlates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-bakery-border shadow-soft hover:shadow-card hover:border-red-300 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-bakery-ink">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-700 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-bakery-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-bakery-border/50 text-[10px] uppercase font-bold text-red-700 tracking-wider">
                    Izakaya Favorite
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Yakitori Skewers */}
          {activeTab === 'yakitori' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {saMenuData.yakitoriSkewers.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-bakery-border shadow-soft hover:shadow-card hover:border-red-300 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-bakery-ink">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-700 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-bakery-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-bakery-muted">
                    🔥 Grilled Over Natural Binchotan Charcoal
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Craft Sake & Drinks */}
          {activeTab === 'sake' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {saMenuData.sakeAndDrinks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-bakery-border shadow-soft hover:shadow-card hover:border-red-300 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <h4 className="font-serif text-base font-bold text-bakery-ink">
                        {item.name}
                      </h4>
                      <span className="font-serif font-bold text-red-700 text-base">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-bakery-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-wider text-red-800">
                    🍶 Chilled or Warm Service Available
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Location & Contact Bar (Consistent Light Theme) */}
        <div className="p-8 rounded-3xl bg-white border border-bakery-border shadow-card grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-bakery-ink">
              Visit Takahachi SA
            </h3>
            <p className="text-xs text-bakery-charcoal">
              29 Wyckoff Avenue, Brooklyn, NY 11237
            </p>
            <p className="text-xs text-bakery-muted">
              Subway: L train at DeKalb Ave or Jefferson St (Bushwick)
            </p>
          </div>

          <div className="space-y-1 text-xs text-bakery-charcoal">
            <p><strong>Tuesday – Sunday:</strong> 5:00 PM – 11:30 PM</p>
            <p><strong>Monday:</strong> Closed</p>
            <p><strong>Phone:</strong> (929) 607-4200</p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="tel:9296074200"
              className="py-2.5 px-4 rounded-xl bg-red-700 hover:bg-red-800 text-white font-semibold text-xs uppercase tracking-wider text-center shadow"
            >
              Call for Tables & Walk-ins
            </a>
            <a
              href="https://maps.google.com/?q=Takahachi+SA+29+Wyckoff+Ave+Brooklyn+NY+11237"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-4 rounded-xl border border-bakery-border hover:bg-bakery-sand text-bakery-charcoal font-medium text-xs text-center flex items-center justify-center gap-1.5"
            >
              <Navigation size={13} />
              <span>Get Directions in Maps</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal (For Map or Hiroshige Print) */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setZoomImage(null)}
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 transition"
            aria-label="Close View"
          >
            <X size={24} />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-bakery-cream border-b border-bakery-border flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-bakery-ink">
                  {zoomImage.title}
                </h3>
                {zoomImage.subtitle && (
                  <p className="text-xs text-bakery-muted">
                    {zoomImage.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setZoomImage(null)}
                className="p-1 rounded-lg text-bakery-muted hover:text-bakery-charcoal"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-3 overflow-auto max-h-[75vh] flex items-center justify-center bg-stone-100">
              <img
                src={zoomImage.url}
                alt={zoomImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
