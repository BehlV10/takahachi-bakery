import React, { useState } from 'react';
import { photoGallery } from '../data/bakeryData';
import { Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function PhotoGalleryModal() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Cakes', 'Breads & Savory', 'Bakery', 'Kitchen'];

  const filteredPhotos = filter === 'All'
    ? photoGallery
    : photoGallery.filter((p) => p.category === filter);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 bg-bakery-sand/40 border-t border-bakery-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-charcoal/10 text-bakery-charcoal text-xs font-bold uppercase tracking-wider">
            <Camera size={14} />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            A Glimpse into <span className="italic font-medium text-bakery-caramel">Our Craft</span>
          </h2>
          <p className="text-sm text-bakery-muted">
            Click on any image to inspect in full-resolution lightbox view.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-bakery-charcoal text-white shadow'
                    : 'bg-white hover:bg-bakery-sand text-bakery-charcoal border border-bakery-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-bakery-sand cursor-pointer shadow-soft hover:shadow-float transition-all duration-300 border border-bakery-border/80"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <span className="self-end p-2 rounded-full bg-white/20 backdrop-blur-md">
                  <Maximize2 size={14} />
                </span>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-bakery-honey">
                    {photo.category}
                  </span>
                  <h4 className="font-serif text-base font-bold">{photo.title}</h4>
                  <p className="text-xs text-white/80 line-clamp-1">{photo.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-50 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Card */}
            <div
              className="max-w-4xl w-full max-h-[85vh] bg-bakery-charcoal rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[300px] max-h-[65vh]">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-w-full max-h-[65vh] object-contain"
                />
              </div>
              <div className="p-6 bg-bakery-ink text-white flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-bakery-honey">
                    {activePhoto.category} • {lightboxIndex + 1} of {filteredPhotos.length}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                    {activePhoto.title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1">{activePhoto.desc}</p>
                </div>
                <a
                  href="#order-builder"
                  onClick={() => setLightboxIndex(null)}
                  className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-bakery-matcha hover:bg-white hover:text-bakery-charcoal text-white font-semibold text-xs uppercase tracking-wider transition whitespace-nowrap"
                >
                  Pre-Order Cake
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
