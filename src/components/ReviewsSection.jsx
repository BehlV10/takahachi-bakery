import React from 'react';
import { reviews } from '../data/bakeryData';
import { Quote, Star, Award, ExternalLink } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white border-t border-bakery-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-azuki/10 text-bakery-azuki text-xs font-bold uppercase tracking-wider">
            <Award size={14} />
            <span>Critic Acclaim</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            What the <span className="italic font-medium text-bakery-azuki">Critics Say</span>
          </h2>
          <p className="text-sm text-bakery-muted">
            Praised by New York culinary publications for bringing refined Tokyo patisserie craft to Downtown Manhattan.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-bakery-cream/40 border border-bakery-border hover:border-bakery-caramel/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote
                size={36}
                className="text-bakery-caramel/20 absolute top-6 right-6 group-hover:text-bakery-caramel/40 transition-colors"
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-bakery-matchaPale text-bakery-matcha">
                    {rev.badge}
                  </span>
                  <div className="flex items-center text-bakery-honey gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-bakery-charcoal/90 leading-relaxed italic font-serif">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-bakery-border/60 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-bakery-ink">
                    {rev.source}
                  </h4>
                  <p className="text-xs text-bakery-muted">{rev.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press mentions footer banner */}
        <div className="mt-12 text-center text-xs text-bakery-muted flex flex-wrap items-center justify-center gap-6">
          <span className="font-semibold text-bakery-charcoal">Featured In:</span>
          <span>Time Out New York</span>
          <span>•</span>
          <span>Serious Eats</span>
          <span>•</span>
          <span>Zomato</span>
          <span>•</span>
          <span>New York Magazine Grub Street</span>
          <span>•</span>
          <span>Eater NY</span>
        </div>

      </div>
    </section>
  );
}
