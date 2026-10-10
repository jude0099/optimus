import { useState, useEffect } from 'react';

const slides = [
  {
    title: "Nurturing Excellence",
    subtitle: "OPTIMUS SCHOOL",
    description: "Where every child's potential is unlocked and champions are made",
  },
  {
    title: "Home for Champions",
    subtitle: "OPTIMUS SCHOOL",
    description: "Building tomorrow's leaders through quality education and character development",
  },
  {
    title: "World-Class Education",
    subtitle: "OPTIMUS SCHOOL",
    description: "Empowering students to excel in the 21st century with innovative learning",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/628429a4-11a7-4241-8452-9591517aefde/_result.png"
          alt="Optimus School"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                {index === currentSlide && (
                  <>
                    <div className="inline-block bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
                      <span className="text-amber-300 text-sm font-medium">{slide.subtitle}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#admissions"
                        className="gold-gradient text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-2"
                      >
                        Apply Now <i className="fas fa-arrow-right"></i>
                      </a>
                      <a
                        href="#about"
                        className="border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                      >
                        Learn More <i className="fas fa-chevron-down"></i>
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-10 bg-amber-400' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-amber-400/20 rounded-full animate-pulse-slow hidden md:block"></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 border-2 border-white/10 rounded-full animate-pulse-slow hidden md:block"></div>
    </section>
  );
}
