import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Welcome />
      <Programs />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Admissions />
      <CTA />
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity z-50"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up text-white"></i>
    </button>
  );
}
