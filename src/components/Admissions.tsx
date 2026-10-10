export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-amber-100 rounded-full px-4 py-1.5 mb-4">
              <span className="text-amber-700 text-sm font-medium">Admissions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#012f5b] mb-6">
              Join Us Today
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Admission is offered upon success at the entrance examination and the availability of space in the candidate's desired year of entry. The subject areas for the entrance examination are English Language, Mathematics and General Paper. Exams are Computer Based.
            </p>

            {/* How to Apply */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-[#012f5b] mb-4 flex items-center gap-2">
                <i className="fas fa-clipboard-list text-amber-500"></i>
                How to Apply
              </h3>
              <p className="text-gray-600 mb-4">
                You may walk into any of our school addresses on the contact page and obtain an Application Form for ₦20,000. Completed forms should be submitted along with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-6 h-6 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  4 Passport photographs
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-6 h-6 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  4 photocopies of birth certificate
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <div className="w-6 h-6 gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  Most recent academic reports from the last 2 years
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="gold-gradient text-white px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-2"
            >
              Apply Now <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Right Content - Steps */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h4 className="font-bold text-[#012f5b] text-lg">Obtain Application Form</h4>
                <p className="text-gray-600 mt-1">Visit our campus to pick up an application form or download from our portal.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-[#012f5b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h4 className="font-bold text-[#012f5b] text-lg">Submit Documents</h4>
                <p className="text-gray-600 mt-1">Complete the form and submit with all required documents and photographs.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h4 className="font-bold text-[#012f5b] text-lg">Take Entrance Exam</h4>
                <p className="text-gray-600 mt-1">Sit for the computer-based entrance examination in English, Mathematics, and General Paper.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-[#012f5b] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <div>
                <h4 className="font-bold text-[#012f5b] text-lg">Receive Admission</h4>
                <p className="text-gray-600 mt-1">Successful candidates will receive admission letters and enrollment details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
