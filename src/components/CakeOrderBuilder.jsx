import React, { useState, useEffect } from 'react';
import { cakeCatalog } from '../data/bakeryData';
import { Sparkles, Calendar, Clock, User, Phone, Mail, FileText, Check, Copy, Send, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CakeOrderBuilder({ selectedCake, onResetCake }) {
  // Active selected cake
  const [activeCakeId, setActiveCakeId] = useState(selectedCake?.id || cakeCatalog[0].id);
  const currentCake = cakeCatalog.find((c) => c.id === activeCakeId) || cakeCatalog[0];

  // Active selected size index
  const [sizeIndex, setSizeIndex] = useState(0);

  // Form inputs
  const [messagePlaque, setMessagePlaque] = useState('');
  const [candles, setCandles] = useState('yes');
  const [candleCount, setCandleCount] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('11:00 AM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');

  // Status feedback
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if parent passes cake
  useEffect(() => {
    if (selectedCake?.id) {
      setActiveCakeId(selectedCake.id);
      setSizeIndex(0);
    }
  }, [selectedCake]);

  const activeSize = currentCake.sizes[sizeIndex] || currentCake.sizes[0];
  const totalPrice = activeSize.price;

  const orderSummaryText = `--- TAKAHACHI BAKERY CAKE PRE-ORDER REQUEST ---
Cake: ${currentCake.name} (${currentCake.jpName})
Size: ${activeSize.size} (Serves ${activeSize.serves})
Estimated Total: $${totalPrice}
Plaque Message: "${messagePlaque || 'No Message'}"
Candles: ${candles === 'yes' ? (candleCount ? `${candleCount} candles` : 'Yes, standard pack') : 'No candles'}
Pickup Date: ${pickupDate || 'Not specified'}
Pickup Time: ${pickupTime}
Customer Name: ${customerName || 'Pending'}
Phone: ${customerPhone || 'Pending'}
Email: ${customerEmail || 'Pending'}
Special Notes: ${dietaryNotes || 'None'}
Store: Takahachi Bakery (25 Murray St, NY, 10007 | 212-791-5550)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger joyful confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    // Open prefilled email
    const subject = encodeURIComponent(`Cake Pre-Order: ${currentCake.name} - ${customerName}`);
    const body = encodeURIComponent(orderSummaryText);
    window.location.href = `mailto:takahachibakery@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="order-builder" className="py-20 bg-bakery-sand/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bakery-azuki/10 text-bakery-azuki text-xs font-bold tracking-wider uppercase">
            <Sparkles size={14} />
            <span>Interactive Pre-Order & Inquiry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bakery-ink font-normal">
            Custom Cake <span className="italic font-medium text-bakery-azuki">Inquiry & Calculator</span>
          </h2>
          <p className="text-sm sm:text-base text-bakery-muted leading-relaxed">
            Configure your dream cake, choose sizes and complimentary chocolate plaque messaging, and send your request straight to our pastry kitchen.
          </p>
        </div>

        {/* 2-Column Grid: Configurator on Left, Live Order Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Options */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-bakery-border shadow-card space-y-8">
            
            {/* Step 1: Select Cake */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal flex items-center justify-between">
                <span>1. Select Your Cake</span>
                <span className="text-[11px] font-normal text-bakery-muted font-jp">
                  {currentCake.jpName}
                </span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {cakeCatalog.map((cake) => (
                  <button
                    key={cake.id}
                    type="button"
                    onClick={() => {
                      setActiveCakeId(cake.id);
                      setSizeIndex(0);
                    }}
                    className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      cake.id === activeCakeId
                        ? 'border-bakery-matcha bg-bakery-matchaPale/60 ring-2 ring-bakery-matcha'
                        : 'border-bakery-border hover:border-bakery-charcoal/30 bg-bakery-cream/30'
                    }`}
                  >
                    <div className="w-full h-16 rounded-lg overflow-hidden mb-2 bg-bakery-sand">
                      <img
                        src={cake.image}
                        alt={cake.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-bakery-charcoal line-clamp-1">
                      {cake.name}
                    </span>
                    <span className="text-[10px] text-bakery-azuki font-serif font-bold mt-0.5">
                      From ${cake.sizes[0].price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Size / Servings */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal">
                2. Select Size & Guest Count
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCake.sizes.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSizeIndex(idx)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      sizeIndex === idx
                        ? 'border-bakery-azuki bg-bakery-azuki/5 ring-2 ring-bakery-azuki text-bakery-azuki font-semibold'
                        : 'border-bakery-border hover:bg-bakery-cream/50 text-bakery-charcoal'
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold">{s.size}</p>
                      <p className="text-xs text-bakery-muted">Serves {s.serves}</p>
                    </div>
                    <div className="font-serif text-lg font-bold text-bakery-azuki">
                      ${s.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Message Plaque & Candles */}
            <div className="space-y-4 pt-2 border-t border-bakery-border">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal mb-1">
                  3. Chocolate Plaque Inscription (Complimentary)
                </label>
                <input
                  type="text"
                  value={messagePlaque}
                  onChange={(e) => setMessagePlaque(e.target.value)}
                  placeholder="e.g., Happy Birthday Chloe! / Congratulations!"
                  maxLength={40}
                  className="w-full px-4 py-2.5 rounded-xl border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-matcha text-sm"
                />
                <p className="text-[11px] text-bakery-muted mt-1">
                  Hand-piped in dark chocolate on a sugar plaque. Up to 40 characters.
                </p>
              </div>

              {/* Candles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal mb-1">
                    Complimentary Candles
                  </label>
                  <select
                    value={candles}
                    onChange={(e) => setCandles(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-matcha text-sm bg-white"
                  >
                    <option value="yes">Include birthday candles</option>
                    <option value="no">No candles needed</option>
                  </select>
                </div>

                {candles === 'yes' && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal mb-1">
                      Age / Candle Count (Optional)
                    </label>
                    <input
                      type="text"
                      value={candleCount}
                      onChange={(e) => setCandleCount(e.target.value)}
                      placeholder="e.g., 25 or 5 big candles"
                      className="w-full px-4 py-2.5 rounded-xl border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-matcha text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Pickup Scheduling & Contact */}
            <div className="space-y-4 pt-2 border-t border-bakery-border">
              <label className="block text-xs font-bold uppercase tracking-wider text-bakery-charcoal">
                4. Pickup Date & Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-bakery-muted mb-1 flex items-center gap-1">
                    <Calendar size={12} /> Desired Pickup Date
                  </span>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-matcha text-sm bg-white"
                  />
                  <span className="text-[10px] text-bakery-muted">
                    Mon–Fri only (Bakery closed weekends)
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-bakery-muted mb-1 flex items-center gap-1">
                    <Clock size={12} /> Estimated Pickup Time
                  </span>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-bakery-border focus:outline-none focus:ring-2 focus:ring-bakery-matcha text-sm bg-white"
                  >
                    <option>9:00 AM – 10:00 AM</option>
                    <option>10:00 AM – 11:30 AM</option>
                    <option>11:30 AM – 1:00 PM</option>
                    <option>1:00 PM – 3:00 PM</option>
                    <option>3:00 PM – 5:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Name, Phone, Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <span className="block text-xs text-bakery-muted mb-1">Your Full Name</span>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Kenji Sato"
                    className="w-full px-3.5 py-2 rounded-xl border border-bakery-border text-xs focus:outline-none focus:ring-2 focus:ring-bakery-matcha"
                  />
                </div>
                <div>
                  <span className="block text-xs text-bakery-muted mb-1">Phone Number</span>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(212) 555-0199"
                    className="w-full px-3.5 py-2 rounded-xl border border-bakery-border text-xs focus:outline-none focus:ring-2 focus:ring-bakery-matcha"
                  />
                </div>
                <div>
                  <span className="block text-xs text-bakery-muted mb-1">Email Address</span>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-bakery-border text-xs focus:outline-none focus:ring-2 focus:ring-bakery-matcha"
                  />
                </div>
              </div>

              {/* Dietary notes */}
              <div>
                <span className="block text-xs text-bakery-muted mb-1">Allergies / Special Instructions (Optional)</span>
                <textarea
                  rows={2}
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  placeholder="e.g., Nut allergy, please package with extra ice pack for transport..."
                  className="w-full px-4 py-2 rounded-xl border border-bakery-border text-xs focus:outline-none focus:ring-2 focus:ring-bakery-matcha"
                />
              </div>

            </div>

          </div>

          {/* Right Summary Card (Sticky) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-bakery-border shadow-float space-y-6">
              
              <div className="flex items-start gap-4 pb-5 border-b border-bakery-border">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-bakery-sand flex-shrink-0 border border-bakery-border">
                  <img
                    src={currentCake.image}
                    alt={currentCake.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-bakery-azuki/10 text-bakery-azuki">
                    {currentCake.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-bakery-ink mt-1">
                    {currentCake.name}
                  </h3>
                  <p className="text-xs text-bakery-muted font-jp">{currentCake.jpName}</p>
                </div>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-3 text-xs text-bakery-charcoal">
                <div className="flex justify-between py-1 border-b border-dashed border-bakery-border">
                  <span className="text-bakery-muted">Selected Size:</span>
                  <span className="font-semibold">{activeSize.size}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-dashed border-bakery-border">
                  <span className="text-bakery-muted">Estimated Servings:</span>
                  <span className="font-semibold">{activeSize.serves}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-dashed border-bakery-border">
                  <span className="text-bakery-muted">Plaque Message:</span>
                  <span className="font-medium italic truncate max-w-[180px]">
                    {messagePlaque ? `"${messagePlaque}"` : 'None specified'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-dashed border-bakery-border">
                  <span className="text-bakery-muted">Pickup Location:</span>
                  <span className="font-medium">25 Murray St, NYC</span>
                </div>
                <div className="flex justify-between py-1 border-b border-dashed border-bakery-border">
                  <span className="text-bakery-muted">Pickup Schedule:</span>
                  <span className="font-semibold text-bakery-azuki">
                    {pickupDate ? `${pickupDate} @ ${pickupTime}` : 'Date to be confirmed'}
                  </span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="p-4 rounded-2xl bg-bakery-cream border border-bakery-border/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-bakery-muted font-medium">Estimated Total Price</p>
                  <p className="text-[10px] text-bakery-muted">Pay at pickup / phone payment</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-bakery-azuki">
                    ${totalPrice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-3.5 px-4 rounded-xl bg-bakery-matcha hover:bg-bakery-charcoal text-white font-semibold text-xs tracking-wide uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  <span>Send Pre-Order Request via Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-4 rounded-xl border border-bakery-border hover:bg-bakery-sand text-bakery-charcoal font-medium text-xs transition flex items-center justify-center gap-2"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied Summary to Clipboard!' : 'Copy Summary to Clipboard'}</span>
                </button>

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-bakery-muted">
                    Prefer to order by phone? Call our bakers directly:
                  </p>
                  <a
                    href="tel:2127915550"
                    className="font-serif font-bold text-sm text-bakery-azuki hover:underline"
                  >
                    (212) 791-5550
                  </a>
                </div>
              </div>

            </div>

            {/* Note about 24-48h notice */}
            <div className="p-4 rounded-2xl bg-bakery-sand/70 border border-bakery-border text-xs text-bakery-muted space-y-1">
              <p className="font-bold text-bakery-charcoal flex items-center gap-1">
                <Clock size={13} className="text-bakery-azuki" />
                Order Timing & Cancellation
              </p>
              <p className="text-[11px] leading-relaxed">
                Whole cakes are handmade from scratch. We recommend submitting pre-orders at least 24 to 48 hours prior to pickup. For party sheet sizes (11"x17"), please give 3 days notice.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
