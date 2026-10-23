import React from 'react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

export default function ChefStory() {
  const kitchenPhotos = [
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1544290167985-EWS0Y9KEIU69J3NVDYSQ/kitchen_9.jpg',
      caption: 'Chef Naoko preparing delicate mousse layers'
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139767421-KT0TKWMZXJ4I7IC4LAJ8/kitchen_1.jpg',
      caption: 'Precision piping on whole celebration cakes'
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139767461-EE750O5TI3H770JOEN91/kitchen_2.jpg',
      caption: 'Artisan dough shaping in morning kitchen'
    },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/5bcc705ff4e5317e57cd7d81/1540139771171-AGZOA8MIAM3G0X7YLI8W/kitchen_7.jpg',
      caption: 'Freshly baked Shokupan loaves cooling'
    }
  ];

  return (
    <section id="chef" className="py-20 bg-bakery-cream border-t border-bakery-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photos Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {kitchenPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-soft border border-bakery-border bg-white group aspect-[4/3] relative"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-[11px] text-white font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Chef Biography & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-sand border border-bakery-border text-xs font-bold uppercase tracking-wider text-bakery-azuki">
              <Award size={14} />
              <span>Executive Patissiere Spotlight</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
                Naoko Mabuchi
              </h2>
              <p className="text-xs sm:text-sm text-bakery-muted font-jp tracking-widest">
                エグゼクティブ パティシエール • 馬渕 直子
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-bakery-muted leading-relaxed font-normal">
              <p>
                Born in Tokyo, Japan, Naoko traveled to the United States to advance her culinary mastery. After graduating with top honors from the prestigious <strong>French Culinary Institute</strong> in New York City, she worked for over <strong>8 years at famed 3-star Bouley Restaurant</strong>.
              </p>
              <p>
                She traveled to Austria on multiple pastry apprenticeships to perfect classical European sponge aeration, laminations, and chocolate temperings. In June 2010, she was appointed Executive Patissiere of Takahachi Bakery.
              </p>
              <p>
                Naoko is deeply passionate about sourcing Japanese and European ingredients of exceptional quality—organic Uji matcha, Normandy butter, and French Valrhona chocolate. Her philosophy is rooted in lightness, harmony, and creating healthier, delicate pastries that bring everyday joy to our downtown community.
              </p>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-bakery-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-bakery-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-bakery-matcha" />
                <span>French Culinary Institute Alum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-bakery-matcha" />
                <span>8+ Years at Famed Bouley NYC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-bakery-matcha" />
                <span>Austrian Pastry Apprenticeship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-bakery-matcha" />
                <span>Executive Patissiere Since 2010</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
