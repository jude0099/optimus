export default function Footer() {
  return (
    <footer id="contact" className="bg-[#011d3a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">OPTIMUS</h3>
                <p className="text-xs text-gray-400 -mt-1">SCHOOL</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Optimus School is a leading educational institution committed to raising globally-minded, result-driven students rooted in strong values and prepared to thrive anywhere in the world.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Programs</a></li>
              <li><a href="#admissions" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Admissions</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Testimonials</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Crèche</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Early Years</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Primary School</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> High School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> After School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-amber-500"></i> Holiday Club</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-amber-400 text-sm"></i>
                </div>
                <span className="text-gray-400">123 Education Avenue, GRA, Benin City, Edo State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-amber-400 text-sm"></i>
                </div>
                <div>
                  <a href="tel:+2348012345678" className="text-gray-400 hover:text-amber-400 transition-colors block">+234 801-234-5678</a>
                  <a href="tel:+2349138045398" className="text-gray-400 hover:text-amber-400 transition-colors block">+234 913-804-5398</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-amber-400 text-sm"></i>
                </div>
                <a href="mailto:admin@optimusschool.ng" className="text-gray-400 hover:text-amber-400 transition-colors">admin@optimusschool.ng</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-amber-400 text-sm"></i>
                </div>
                <span className="text-gray-400">Mon - Fri: 7:30AM - 4:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Optimus School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
