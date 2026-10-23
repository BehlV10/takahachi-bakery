import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SisterLocationsBanner from './components/SisterLocationsBanner';
import CakesSection from './components/CakesSection';
import CakeOrderBuilder from './components/CakeOrderBuilder';
import MenuSection from './components/MenuSection';
import ChefStory from './components/ChefStory';
import PhotoGalleryModal from './components/PhotoGalleryModal';
import ReviewsSection from './components/ReviewsSection';
import LocationHoursSection from './components/LocationHoursSection';
import Footer from './components/Footer';
import OnlineOrderModal from './components/OnlineOrderModal';

export default function App() {
  const [selectedCakeForOrder, setSelectedCakeForOrder] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleSelectCake = (cake) => {
    setSelectedCakeForOrder(cake);
    const orderElement = document.getElementById('order-builder');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bakery-cream text-bakery-charcoal selection:bg-bakery-matcha selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* The 3-in-One Takahachi Family Banner */}
        <SisterLocationsBanner />

        {/* Artisanal Cakes & Mousse Catalog */}
        <CakesSection onSelectCakeForOrder={handleSelectCake} />

        {/* Interactive Cake Pre-Order & Inquiry Builder */}
        <CakeOrderBuilder
          selectedCake={selectedCakeForOrder}
          onResetCake={() => setSelectedCakeForOrder(null)}
        />

        {/* Breads, Coffee, Matcha & Japanese Tea Menu */}
        <MenuSection />

        {/* Executive Patissiere Naoko Mabuchi Story */}
        <ChefStory />

        {/* High-Resolution Photo Gallery with Lightbox */}
        <PhotoGalleryModal />

        {/* Reviews & Press */}
        <ReviewsSection />

        {/* Location, Opening Hours, Directions & Map */}
        <LocationHoursSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Quick Online Order Modal */}
      <OnlineOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
