import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import AgeGroups from '@/components/AgeGroups';
import TrainingJourney from '@/components/TrainingJourney';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollProgress from '@/components/ScrollProgress';

export default function Index() {
  return (
    <div className="bg-[#0a1628] min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <AgeGroups />
      <TrainingJourney />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCTA />
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#060d1a] to-[#030609] border-t border-cyan-500/20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

        <div className="relative">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                 
                  <div>
                    <p className="text-white font-bold text-lg">Swim City</p>
                    <p className="text-cyan-400 text-xs font-semibold">Academy</p>
                  </div>
                </div>
                <p className="text-cyan-100/60 text-sm leading-relaxed">
                  Excellence in swimming. Confidence in water. Community in spirit.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Programs</h4>
                <ul className="space-y-2">
                  {['Kids Swimming', 'Private Sessions', 'Group Classes', 'Advanced Training'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Information */}
              <div>
                <h4 className="text-white font-semibold mb-4">Information</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm">
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-cyan-100/60 hover:text-cyan-400 transition-colors text-sm">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/201228384225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    💬 WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/swim4life_swim.academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    📸 Instagram
                  </a>
                  <p className="text-cyan-100/60 text-sm">
                    New Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-8" />

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-cyan-100/40 text-sm">
                © 2026 Swim City Academy. All rights reserved. | New Cairo, Egypt
              </p>
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/swim4life_swim.academy" target="_blank" rel="noopener noreferrer" className="text-cyan-100/40 hover:text-cyan-400 transition-colors text-sm font-medium">
                  Instagram
                </a>
                <a href="https://wa.me/201228384225" target="_blank" rel="noopener noreferrer" className="text-cyan-100/40 hover:text-cyan-400 transition-colors text-sm font-medium">
                  WhatsApp
                </a>
              </div>
              <a href="#" className="text-cyan-100/40 hover:text-cyan-300 transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
