export default function CTA() {
  return (
    <section className="py-16 gold-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Give your child the best future with world-class education. A legacy for champions starts here at Optimus School.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#admissions"
              className="bg-[#012f5b] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#011d3a] transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <i className="fas fa-paper-plane"></i> Apply Now
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <i className="fas fa-phone"></i> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
