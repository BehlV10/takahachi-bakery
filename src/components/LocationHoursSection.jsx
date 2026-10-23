import React from 'react';
import { MapPin, Phone, Mail, Clock, Train, Navigation, ExternalLink } from 'lucide-react';

export default function LocationHoursSection({ onOpenOrderModal }) {
  return (
    <section id="location" className="py-20 bg-bakery-cream border-t border-bakery-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-bakery-matcha">
            Visit & Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            Find Us in <span className="italic font-medium text-bakery-caramel">Tribeca</span>
          </h2>
          <p className="text-sm text-bakery-muted">
            Located on Murray Street, steps away from City Hall Park and the Financial District.
          </p>
        </div>

        {/* 2-Column: Details on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-bakery-border shadow-card flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-sand flex items-center justify-center text-bakery-azuki flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-bakery-ink">Bakery Address</h3>
                  <p className="text-sm text-bakery-charcoal font-medium mt-0.5">
                    25 Murray Street
                  </p>
                  <p className="text-xs text-bakery-muted">
                    New York, NY 10007 (between Broadway & Church St)
                  </p>
                  <a
                    href="https://maps.google.com/?q=Takahachi+Bakery+25+Murray+St+New+York+NY+10007"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-bakery-matcha font-bold mt-2 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-sand flex items-center justify-center text-bakery-caramel flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-bakery-ink">Bakery Hours</h3>
                  <div className="text-xs text-bakery-charcoal space-y-1 mt-1">
                    <p className="flex justify-between gap-6">
                      <span className="font-medium">Monday – Friday:</span>
                      <strong className="text-bakery-ink">8:30 AM – 6:00 PM</strong>
                    </p>
                    <p className="flex justify-between gap-6 text-bakery-muted">
                      <span>Saturday & Sunday:</span>
                      <span className="italic">Closed (Kitchen Preparation)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-sand flex items-center justify-center text-bakery-matcha flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-bakery-ink">Phone & Orders</h3>
                  <p className="text-sm font-semibold text-bakery-charcoal mt-0.5">
                    <a href="tel:2127915550" className="hover:text-bakery-azuki transition">
                      (212) 791-5550
                    </a>
                  </p>
                  <p className="text-xs text-bakery-muted mt-0.5">
                    <a href="mailto:takahachibakery@gmail.com" className="hover:text-bakery-azuki transition">
                      takahachibakery@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Transit Directions */}
              <div className="flex items-start gap-4 pt-4 border-t border-bakery-border">
                <div className="w-10 h-10 rounded-xl bg-bakery-sand flex items-center justify-center text-bakery-ink flex-shrink-0">
                  <Train size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-bakery-ink">Nearby Subway Trains</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded bg-yellow-400 text-black font-bold text-xs">R / W</span>
                    <span className="text-xs text-bakery-muted self-center">City Hall</span>
                    <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold text-xs">1 / 2 / 3</span>
                    <span className="text-xs text-bakery-muted self-center">Chambers St</span>
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-xs">A / C / E</span>
                    <span className="text-xs text-bakery-muted self-center">Chambers St</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenOrderModal}
              className="w-full py-3.5 px-4 rounded-xl bg-bakery-charcoal hover:bg-bakery-ink text-white font-semibold text-xs tracking-wider uppercase transition shadow-md"
            >
              Order Online / View Delivery Partners
            </button>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-bakery-border shadow-card min-h-[400px] flex flex-col">
            <div className="p-4 bg-bakery-sand/70 border-b border-bakery-border flex items-center justify-between text-xs font-medium text-bakery-charcoal">
              <span className="flex items-center gap-1.5 font-bold">
                <Navigation size={14} className="text-bakery-azuki" />
                25 Murray Street, Tribeca, NYC
              </span>
              <a
                href="https://maps.google.com/?q=Takahachi+Bakery+25+Murray+St+New+York+NY+10007"
                target="_blank"
                rel="noreferrer"
                className="text-bakery-azuki hover:underline font-semibold flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ExternalLink size={12} />
              </a>
            </div>
            
            <div className="flex-1 w-full relative min-h-[360px]">
              <iframe
                title="Takahachi Bakery Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1539667794825!2d-74.0094056!3d40.713532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f0a256a65%3A0x60d268d0ee54e158!2sTakahachi%20Bakery!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
