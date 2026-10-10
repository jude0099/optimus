import { useState } from 'react';

const testimonials = [
  {
    name: "Mrs. Chioma Adeleke",
    role: "Parent",
    text: "Optimus School has been a blessing to our family. The quality of education and the care given to our children is exceptional. My children have grown in confidence and academic excellence since joining.",
    rating: 5,
  },
  {
    name: "Mr. Olumide Akinwale",
    role: "Parent",
    text: "The teachers at Optimus are truly dedicated. They go above and beyond to ensure every child reaches their full potential. The school's facilities are world-class and the environment is very conducive for learning.",
    rating: 5,
  },
  {
    name: "Mrs. Blessing Ogunleye",
    role: "Parent",
    text: "I'm so impressed with the holistic approach to education at Optimus. My daughter not only excels academically but has also developed great social skills and confidence. Best decision we ever made!",
    rating: 5,
  },
  {
    name: "Dr. Emeka Nwosu",
    role: "Parent",
    text: "The leadership and vision at Optimus School is remarkable. They truly prepare children for the future with their modern teaching methods and emphasis on character development. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-[#012f5b] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-300 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Parents Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Hear from parents who have entrusted us with their children's education.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-amber-400/50 scale-[1.02]' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400"></i>
                ))}
              </div>
              {/* Quote */}
              <p className="text-gray-200 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-amber-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-10 bg-amber-400' : 'w-2.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
