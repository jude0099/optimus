import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#012f5b] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:admin@optimusschool.ng" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <i className="fas fa-envelope text-amber-400"></i>
              <span>admin@optimusschool.ng</span>
            </a>
            <a href="tel:+2348012345678" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <i className="fas fa-phone text-amber-400"></i>
              <span>+234 801-234-5678</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-amber-400 transition-colors"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white nav-shadow' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#012f5b] rounded-full flex items-center justify-center">
                <span className="text-amber-400 font-bold text-xl">O</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#012f5b]">OPTIMUS</h1>
                <p className="text-xs text-gray-500 -mt-1">SCHOOL</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-[#012f5b] font-medium hover:text-amber-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">About</a>
              <a href="#programs" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">Programs</a>
              <a href="#team" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">Our Team</a>
              <a href="#testimonials" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">Testimonials</a>
              <a href="#admissions" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">Admissions</a>
              <a href="#contact" className="text-gray-600 font-medium hover:text-amber-600 transition-colors">Contact</a>
              <a href="#admissions" className="gold-gradient text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg">
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#012f5b] text-2xl"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100">
              <div className="flex flex-col gap-3 pt-4">
                <a href="#home" onClick={() => setIsOpen(false)} className="text-[#012f5b] font-medium px-4 py-2 hover:bg-gray-50 rounded">Home</a>
                <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">About</a>
                <a href="#programs" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">Programs</a>
                <a href="#team" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">Our Team</a>
                <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">Testimonials</a>
                <a href="#admissions" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">Admissions</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 font-medium px-4 py-2 hover:bg-gray-50 rounded">Contact</a>
                <a href="#admissions" onClick={() => setIsOpen(false)} className="gold-gradient text-white px-6 py-2.5 rounded-full font-medium text-center mt-2">Apply Now</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
