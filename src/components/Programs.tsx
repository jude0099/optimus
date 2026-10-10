const programs = [
  {
    title: "Crèche",
    description: "Where every child's journey begins with love, care, and early learning in a safe, nurturing environment.",
    image: "https://image.qwenlm.ai/generated-images/ab4f9820-1cd1-4aff-8449-665bf3568c9a/_result.png",
    icon: "fas fa-baby",
  },
  {
    title: "Early Years Foundation",
    description: "Building strong foundations for lifelong learning and growth through play-based and structured activities.",
    image: "https://image.qwenlm.ai/generated-images/87365c1d-377c-4d53-9d4e-a2b31655bde8/_result.png",
    icon: "fas fa-puzzle-piece",
  },
  {
    title: "Primary School",
    description: "Empowering young minds for academic excellence and personal growth with a comprehensive curriculum.",
    image: "https://image.qwenlm.ai/generated-images/67ddd033-442a-4ff0-8305-9f299946203b/_result.png",
    icon: "fas fa-book-open",
  },
  {
    title: "High School",
    description: "Shaping future leaders for global impact through advanced academics, leadership, and character development.",
    image: "https://image.qwenlm.ai/generated-images/7af8ddaa-33b6-4334-8a33-285229a45da6/_result.png",
    icon: "fas fa-graduation-cap",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-amber-700 text-sm font-medium">Our Programs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#012f5b] mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer quality education for your child, with our highly skilled and qualified teachers dedicated to bringing out the best in every student.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                  <i className={`${program.icon} text-white`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#012f5b] mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 mt-4 text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors"
                >
                  Learn More <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
