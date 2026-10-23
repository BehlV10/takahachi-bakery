import React, { useState, useEffect } from 'react';
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
import PortalHome from './components/PortalHome';
import TribecaPage from './components/TribecaPage';
import SAPage from './components/SAPage';

export default function App() {
  // activeLocation can be 'portal', 'bakery', 'tribeca', 'sa'
  const [activeLocation, setActiveLocation] = useState('portal');
  const [selectedCakeForOrder, setSelectedCakeForOrder] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Hash synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['portal', 'bakery', 'tribeca', 'sa'].includes(hash)) {
        setActiveLocation(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSwitchLocation = (locId) => {
    setActiveLocation(locId);
    window.location.hash = locId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCake = (cake) => {
    setSelectedCakeForOrder(cake);
    const orderElement = document.getElementById('order-builder');
    if (orderElement) {
      orderElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-bakery-cream text-bakery-charcoal selection:bg-bakery-matcha selection:text-white">
      {/* Top Navbar with Location Switcher */}
      <Navbar
        activeLocation={activeLocation}
        onSelectLocation={handleSwitchLocation}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      <main>
        {/* VIEW 1: Grand Front Page Portal */}
        {activeLocation === 'portal' && (
          <PortalHome onSelectLocation={handleSwitchLocation} />
        )}

        {/* VIEW 2: Takahachi Bakery (Full Patisserie Experience) */}
        {activeLocation === 'bakery' && (
          <>
            <Hero
              onSwitchLocation={handleSwitchLocation}
              onOpenOrderModal={() => setIsOrderModalOpen(true)}
            />
            <SisterLocationsBanner onSelectLocation={handleSwitchLocation} />
            <CakesSection onSelectCakeForOrder={handleSelectCake} />
            <CakeOrderBuilder
              selectedCake={selectedCakeForOrder}
              onResetCake={() => setSelectedCakeForOrder(null)}
            />
            <MenuSection />
            <ChefStory />
            <PhotoGalleryModal />
            <ReviewsSection />
            <LocationHoursSection onOpenOrderModal={() => setIsOrderModalOpen(true)} />
          </>
        )}

        {/* VIEW 3: Takahachi Tribeca (Sushi & Dining) */}
        {activeLocation === 'tribeca' && (
          <TribecaPage onSwitchLocation={handleSwitchLocation} />
        )}

        {/* VIEW 4: Takahachi SA (Brooklyn Izakaya & Sake Bar) */}
        {activeLocation === 'sa' && (
          <SAPage onSwitchLocation={handleSwitchLocation} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onSelectLocation={handleSwitchLocation} />

      {/* Global Quick Online Order Modal */}
      <OnlineOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
