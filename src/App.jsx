import Navbar             from '@components/Navbar';
import Hero               from '@components/Hero';
import Services           from '@components/Services';
import Destinations       from '@components/Destinations';
import WhyChooseUs        from '@components/WhyChooseUs';
import ConsultationForm   from '@components/ConsultationForm';
import Footer             from '@components/Footer';
import WhatsAppWidget     from '@components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <WhyChooseUs />
        <ConsultationForm />
      </main>
      <Footer />

      {/* Floating WhatsApp widget — renders above everything */}
      <WhatsAppWidget />
    </div>
  );
}
