import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// 1. IMPORT YOUR NEW FILES HERE
import FAQ from './components/FAQ'; 
import Testimonials from './components/Testimonials'; // double check if your file name matches exactly
import Consultation from './components/Consultation'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* 2. PLACE THE TAGS HERE TO SHOW THEM ON THE SCREEN */}
      <Testimonials />
      <FAQ />
      
      <Consultation />
      <Footer />
    </div>
  );
}

export default App;
