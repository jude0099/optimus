const features = [
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Expert Teachers",
    description: "Our highly qualified and experienced teachers use modern teaching methods to deliver exceptional education.",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Modern Technology",
    description: "State-of-the-art computer labs, smart classrooms, and digital learning tools for 21st-century education.",
  },
  {
    icon: "fas fa-futbol",
    title: "Sports & Arts",
    description: "Comprehensive extracurricular programs including sports, music, drama, and creative arts.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Safe Environment",
    description: "Secure campus with CCTV surveillance, trained security personnel, and strict safety protocols.",
  },
  {
    icon: "fas fa-bus",
    title: "School Transport",
    description: "Comfortable and safe school bus service covering major routes within the city.",
  },
  {
    icon: "fas fa-utensils",
    title: "Nutritious Meals",
    description: "Well-balanced and hygienically prepared meals served daily in our modern cafeteria.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012f5b] mb-4">
            Why Parents Choose Optimus
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a complete educational experience that nurtures the whole child — academically, socially, and morally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-50 group-hover:gold-gradient rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                <i className={`${feature.icon} text-xl text-amber-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-lg font-bold text-[#012f5b] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
