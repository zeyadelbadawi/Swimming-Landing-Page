import { useScrollReveal } from '@/hooks/useGSAP';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-ocean-gradient section-padding overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
          Take the Plunge
        </span>

        <h2 data-animate="up" data-delay="0.1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
          Start Your Swimming
          <span className="block text-gradient-aqua">Transformation Today</span>
        </h2>

        <p data-animate="up" data-delay="0.2" className="mt-8 text-xl md:text-2xl text-cyan-100/80 max-w-3xl mx-auto font-light leading-relaxed">
          Join our thriving community of swimmers at Swim City Academy. From confident beginners to competitive champions, 
          we&apos;re here to help you achieve your swimming dreams with world-class coaching and world-class facilities.
        </p>

        {/* Quick Facts */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 mb-12">
          {[
            { label: 'Happy Families', value: '500+' },
            { label: 'Expert Coaches', value: '15+' },
            { label: 'Years Training', value: '10+' },
          ].map(({ label, value }) => (
            <div
              key={label}
              data-animate="up"
              className="glass rounded-2xl p-6 border border-cyan-500/20"
            >
              <p className="text-3xl font-bold text-cyan-400">{value}</p>
              <p className="text-cyan-100/60 text-sm mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div data-animate="up" data-delay="0.3" className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/201228384225"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold rounded-full hover:scale-110 hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="https://wa.me/201228384225"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white font-semibold rounded-full hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            <span>Reserve Your Spot</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <p data-animate="up" data-delay="0.4" className="mt-10 text-cyan-100/50 text-sm">
          ✓ First session • ✓ No commitment • ✓ Flexible scheduling • ✓ Professional guidance
        </p>
      </div>
    </section>
  );
}
