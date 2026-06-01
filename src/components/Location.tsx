import { useScrollReveal } from '@/hooks/useGSAP';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" ref={sectionRef} className="relative bg-[#0a1628] section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Find Us
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Visit Our
            <span className="text-gradient-aqua"> Academy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div data-animate="left" data-delay="0.2" className="relative rounded-2xl overflow-hidden h-[300px] lg:h-full min-h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37609484!2d31.4!3d30.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d0c0c0c0c0c%3A0x0!2sNew%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swim City Academy Location"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl pointer-events-none" />
          </div>

          {/* Contact Info */}
          <div data-animate="right" data-delay="0.3" className="space-y-6">
            {[
              { icon: MapPin, title: 'Address', info: 'Fifth Settlement, New Cairo, Egypt' },
              { icon: Phone, title: 'Phone', info: '+20 100 000 0000' },
              { icon: Mail, title: 'Email', info: 'info@swimcityacademy.com' },
              { icon: Clock, title: 'Working Hours', info: 'Sat - Thu: 7:00 AM - 9:00 PM' },
            ].map(({ icon: Icon, title, info }, i) => (
              <div
                key={title}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                data-animate="right"
                data-delay={String(0.3 + i * 0.1)}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-cyan-100/50 text-sm">{title}</p>
                  <p className="text-white font-medium">{info}</p>
                </div>
              </div>
            ))}

            {/* Quick Contact CTA */}
            <a
              href="https://wa.me/201228384225"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              Send Us a WhatsApp Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}