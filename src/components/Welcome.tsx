export default function Welcome() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-amber-700 text-sm font-medium">Welcome to Optimus School</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012f5b] mb-6">
              Shaping Tomorrow's <span className="text-gradient">Leaders</span> Today
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Optimus School, a thriving educational community where students are empowered to excel in the 21st century. Trusted by parents for our well-trained staff, intensive curriculum, and stimulating environment, we combine innovative teaching strategies, cutting-edge technology, and purpose-built facilities to nurture confidence, self-esteem, and a lifelong love for learning.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our goal is to raise globally-minded, result-driven students rooted in strong values and prepared to thrive anywhere in the world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#012f5b]">15+</div>
                <div className="text-sm text-gray-500 mt-1">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#012f5b]">2000+</div>
                <div className="text-sm text-gray-500 mt-1">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#012f5b]">98%</div>
                <div className="text-sm text-gray-500 mt-1">Success Rate</div>
              </div>
            </div>

            <a
              href="#programs"
              className="inline-flex items-center gap-2 mt-8 text-[#012f5b] font-semibold hover:text-amber-600 transition-colors"
            >
              Read More <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://image.qwenlm.ai/generated-images/628429a4-11a7-4241-8452-9591517aefde/_result.png"
                alt="Optimus School Campus"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                  <i className="fas fa-award text-white text-lg"></i>
                </div>
                <div>
                  <div className="font-bold text-[#012f5b]">Best School</div>
                  <div className="text-sm text-gray-500">Award 2024</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-amber-400/30 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
