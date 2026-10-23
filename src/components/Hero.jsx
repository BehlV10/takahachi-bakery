import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MapPin, Award, Coffee, Clock } from 'lucide-react';

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

export default function Hero({ onOpenOrderModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-subtle-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bakery-sand border border-bakery-border text-xs font-semibold text-bakery-charcoal shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bakery-matcha"></span>
              <span>TRIBECA, NEW YORK CITY • EST. 2010</span>
            </div>

            <div className="space-y-3">
              <div className="text-bakery-azuki text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
                <span>竹八ベーカリー</span>
                <span className="w-8 h-px bg-bakery-azuki/40"></span>
                <span>Japanese Patisserie & Café</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bakery-ink leading-[1.12] font-normal">
                Where <span className="italic text-bakery-matcha font-medium">Tokyo Tradition</span> Meets Parisian Elegance.
              </h1>
            </div>

            <p className="text-bakery-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Handcrafted in Lower Manhattan by Executive Patissiere <strong>Naoko Mabuchi</strong> (formerly of 3-star <em>Bouley</em>). Enjoy fresh daily Japanese milk bread (Shokupan), artisanal whole celebration cakes, delicate mille crêpes, and specialty Kyoto matcha lattes.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cakes"
                className="px-6 py-3.5 rounded-xl bg-bakery-matcha hover:bg-bakery-ink text-white font-medium text-sm transition-all duration-200 shadow-md flex items-center gap-2 group"
              >
                <span>Explore Cake Menu</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#order-builder"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-bakery-sand text-bakery-charcoal border border-bakery-border font-medium text-sm transition-all duration-200 shadow-sm flex items-center gap-2"
              >
                <Sparkles size={16} className="text-bakery-caramel" />
                <span>Custom Cake Pre-Order</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="px-5 py-3.5 rounded-xl text-bakery-azuki hover:bg-bakery-azuki/10 font-semibold text-sm transition"
              >
                Online Pickup & Delivery →
              </button>
            </div>

            {/* Trust & Key Features Badges */}
            <div className="pt-6 border-t border-bakery-border grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-bakery-ink">2010</p>
                <p className="text-xs text-bakery-muted font-medium">Serving Tribeca NYC</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-bakery-matcha">100%</p>
                <p className="text-xs text-bakery-muted font-medium">Daily In-House Baking</p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-bakery-caramel">Uji Kyoto</p>
                <p className="text-xs text-bakery-muted font-medium">Direct Green Tea Imports</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Photo Showcase with Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-float border-4 border-white bg-bakery-sand aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white z-20 space-y-1">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-bakery-honey">
                        Featured Highlight
                      </span>
                      <h3 className="font-serif text-2xl font-bold">{slide.title}</h3>
                      <p className="text-xs text-white/80 line-clamp-2">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}

                {/* Carousel Indicator Dots */}
                <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentSlide ? 'w-5 bg-white' : 'w-2 bg-white/40'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Chef Badge */}
              <div className="absolute -bottom-6 -left-6 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-bakery-border max-w-[260px] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bakery-sand border-2 border-bakery-matcha overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1544290167985-EWS0Y9KEIU69J3NVDYSQ/kitchen_9.jpg"
                    alt="Chef Naoko Mabuchi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-bakery-matcha">Executive Patissiere</p>
                  <p className="text-xs font-bold text-bakery-ink">Naoko Mabuchi</p>
                  <p className="text-[11px] text-bakery-muted">8+ Years at Famed Bouley NYC</p>
                </div>
              </div>

              {/* Floating Location Tag */}
              <div className="absolute -top-4 -right-4 z-30 bg-bakery-ink text-white px-4 py-2 rounded-xl shadow-lg text-xs font-medium flex items-center gap-2">
                <MapPin size={14} className="text-bakery-honey" />
                <span>25 Murray St, Tribeca</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
