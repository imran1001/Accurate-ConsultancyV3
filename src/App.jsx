import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FAQ from './components/FAQ'; 
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
