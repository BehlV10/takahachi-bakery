import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MapPin, Award, Coffee, Clock, Phone, ArrowLeft, CheckCircle2 } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1695579826825-HFP89GHD3MJQVJ4BFELN/IMG_0063.jpg',
    title: 'Kyoto Matcha Mousse',
    subtitle: 'Ceremonial Uji green tea with red bean compote & 24k gold leaf'
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625341025-YFNOFGCNVYLTOEVL5A5O/IMG_0494.jpg',
    title: 'Japanese Strawberry Shortcake',
    subtitle: 'Cloud-soft sponge with fresh Hokkaido-style whipped chantilly'
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1694625342419-QFMBMGNUYDX3ANNUP639/IMG_2734.jpg',
    title: 'Matcha Mille Crêpe',
    subtitle: '20 handmade micro-crepe layers with matcha diplomat cream'
  },
  {
    image: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1691861574778-JZ63ZZINEHZZ09OOV2ZP/DSC00357.jpg',
    title: 'Daily Fresh Baked Breads',
    subtitle: 'Authentic Shokupan, Curry Pan, Melon Pan, and Viennoiserie'
  }
];

export default function Hero({ onSwitchLocation, onOpenOrderModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="pt-28 pb-12 bg-bakery-cream">
      {/* Back to Portal Bar (Matching Tribeca & SA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <button
          onClick={() => onSwitchLocation('portal')}
          className="inline-flex items-center gap-2 text-xs font-bold text-bakery-charcoal hover:text-bakery-ink transition bg-white px-3.5 py-1.5 rounded-full border border-bakery-border shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Back to All Takahachi Locations</span>
        </button>
      </div>

      {/* Signature Hero Title Banner (Identical format to Tribeca & SA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-bakery-ink text-white min-h-[380px] flex items-end p-8 sm:p-12 shadow-card border border-bakery-border">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540143844424-JXD6YXJ5ZJ6ZYBZGUEMF/store_BG.jpg"
            alt="Takahachi Tribeca Bakery"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bakery-matcha/90 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase border border-bakery-matchaLight/40">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span>Tribeca, Lower Manhattan • Japanese Patisserie & Café</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Takahachi <span className="italic font-medium text-bakery-honey">Bakery</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Handcrafted in Tribeca by Executive Patissiere <strong>Naoko Mabuchi</strong> (formerly of 3-star <em>Bouley</em>). Serving daily fresh Japanese milk bread (Shokupan), artisanal celebration whole cakes, delicate matcha mille crêpes, and Kyoto green tea drinks.
            </p>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-stone-200">
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin size={13} className="text-bakery-honey" /> 25 Murray St, Tribeca, NYC
              </span>
              <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <Clock size={13} className="text-bakery-honey" /> Mon–Fri: 8:30 AM – 6:00 PM
              </span>
              <a
                href="tel:2127915550"
                className="flex items-center gap-1.5 bg-bakery-matcha hover:bg-bakery-matcha/80 text-white font-bold px-3.5 py-1.5 rounded-lg transition shadow"
              >
                <Phone size={13} /> (212) 791-5550
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#cakes"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-bakery-sand text-bakery-charcoal font-bold text-xs uppercase tracking-wider transition shadow"
              >
                Explore Whole Cakes
              </a>
              <a
                href="#order-builder"
                className="px-5 py-2.5 rounded-xl bg-bakery-azuki hover:bg-bakery-azukiLight text-white font-bold text-xs uppercase tracking-wider transition shadow flex items-center gap-1.5"
              >
                <Sparkles size={14} />
                <span>Custom Cake Pre-Order</span>
              </a>
              <button
                onClick={onOpenOrderModal}
                className="px-4 py-2.5 rounded-xl bg-black/50 hover:bg-black/70 border border-white/20 text-white font-semibold text-xs tracking-wider transition"
              >
                Online Pickup & Delivery →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Specialties Photo Carousel & Highlights Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-bakery-border shadow-soft">
          
          {/* Left: Chef Mabuchi intro */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-bakery-azuki uppercase">
              <Award size={14} />
              <span>Patisserie Philosophy</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bakery-ink">
              Where Tokyo Craftsmanship Harmonizes with Classical French Viennoiserie
            </h2>
            <p className="text-xs sm:text-sm text-bakery-muted leading-relaxed">
              Every morning at 8:30 AM, our ovens produce pillowy Yudane Shokupan loaves, crispy golden Curry Pan, and sweet Ogura Anpan. Our whole cakes feature reduced sweetness and air-whipped textures imported from the finest traditions of Tokyo and Paris.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-bakery-border/60 text-xs">
              <div>
                <p className="font-serif text-lg font-bold text-bakery-ink">Est. 2010</p>
                <p className="text-[11px] text-bakery-muted">Serving Tribeca NYC</p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-bakery-matcha">Daily Fresh</p>
                <p className="text-[11px] text-bakery-muted">In-House Scratch Baking</p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-bakery-azuki">Uji Kyoto</p>
                <p className="text-[11px] text-bakery-muted">Organic Green Tea</p>
              </div>
            </div>
          </div>

          {/* Right: Rotating Visual Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-bakery-charcoal shadow-md border border-bakery-border">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-bakery-honey">
                      Daily Highlight
                    </span>
                    <h3 className="font-serif text-lg font-bold">{slide.title}</h3>
                    <p className="text-[11px] text-white/80 line-clamp-1">{slide.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Dots */}
              <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentSlide ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
