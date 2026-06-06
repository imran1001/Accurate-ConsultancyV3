import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <About />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
