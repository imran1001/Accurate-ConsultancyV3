import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    // Your unique Web3Forms Access Key
    formData.append("access_key", "b29ca9ee-eede-40a0-9479-fc890a51140b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true); 
      } else {
        console.error("Submission failed", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="w-16 h-16 bg-[#25d366]/10 text-[#25d366] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          Your consultation request has been received. Our team will contact you within 24 hours via email or WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#020818] p-8 rounded-xl shadow-2xl border border-[#c9a55a]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name *</label>
          <input type="text" name="name" id="name" required className="w-full bg-[#0a1628] border border-[#c9a55a]/30 text-white rounded-md p-3 focus:ring-[#c9a55a] focus:border-[#c9a55a] placeholder-white/30" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address *</label>
          <input type="email" name="email" id="email" required className="w-full bg-[#0a1628] border border-[#c9a55a]/30 text-white rounded-md p-3 focus:ring-[#c9a55a] focus:border-[#c9a55a] placeholder-white/30" placeholder="john@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone/WhatsApp *</label>
          <input type="tel" name="phone" id="phone" required className="w-full bg-[#0a1628] border border-[#c9a55a]/30 text-white rounded-md p-3 focus:ring-[#c9a55a] focus:border-[#c9a55a] placeholder-white/30" placeholder="+92 316 0000000" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">Service Required *</label>
          <select name="service" id="service" required className="w-full bg-[#0a1628] border border-[#c9a55a]/30 text-white rounded-md p-3 focus:ring-[#c9a55a] focus:border-[#c9a55a]">
            <option value="" className="bg-[#0a1628]">Select a program</option>
            <option value="UK Seasonal Worker" className="bg-[#0a1628]">UK Seasonal Worker</option>
            <option value="Skilled Immigration" className="bg-[#0a1628]">Skilled Immigration</option>
            <option value="Business Immigration" className="bg-[#0a1628]">Business Immigration</option>
            <option value="Study Abroad" className="bg-[#0a1628]">Study Abroad</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Additional Details</label>
        <textarea name="message" id="message" rows="4" className="w-full bg-[#0a1628] border border-[#c9a55a]/30 text-white rounded-md p-3 focus:ring-[#c9a55a] focus:border-[#c9a55a] placeholder-white/30" placeholder="Tell us about your immigration goals..."></textarea>
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#c9a55a] hover:bg-[#b08e42] text-[#020818] font-bold py-3 px-6 rounded-md transition duration-300 disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
      </button>
    </form>
  );
}
