import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Below-the-fold components are lazy-loaded to optimize initial mobile payload
const Services = lazy(() => import('./components/Services'));
const Destinations = lazy(() => import('./components/Destinations'));
const About = lazy(() => import('./components/About'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const ConsultationForm = lazy(() => import('./components/ConsultationForm'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppWidget = lazy(() => import('./components/WhatsAppWidget'));

// Seamless micro-placeholder keeping your CLS (Layout Shift) score perfectly stable
const SectionLoader = () => <div className="w-full h-32 bg-gray-50/10 animate-pulse" />;

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#D4AF37]/20">
      {/* ⚡ CRITICAL ABOVE-THE-FOLD: Rendered immediately */}
      <Navbar />
      
      <main>
        <Hero />
        
        {/* 💤 DEFERRED BELOW-THE-FOLD: Loaded asynchronously to free up main thread thread */}
        <Suspense fallback={<SectionLoader />}>
          <Services />
          <Destinations />
          <About />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <ConsultationForm />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20 bg-[#020916]" />}>
        <Footer />
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
}

export default App;
