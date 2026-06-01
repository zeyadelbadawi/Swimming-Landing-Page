import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Users, Award, MapPin, Waves } from 'lucide-react';

const HERO_BG = 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmelq6yaag6q/hero-underwater-pool-light-rays.png';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-title', { y: 80, opacity: 0, duration: 1.2 })
      .from('.hero-subtitle', { y: 40, opacity: 0, duration: 1 }, '-=0.6')
      .from('.hero-badges', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
      .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, '-=0.4')
      .from('.hero-scroll', { y: 20, opacity: 0, duration: 0.6 }, '-=0.2');

    // Floating bubbles
    if (bubblesRef.current) {
      const bubbles = bubblesRef.current.children;
      Array.from(bubbles).forEach((bubble, i) => {
        gsap.to(bubble, {
          y: -window.innerHeight,
          x: `random(-50, 50)`,
          duration: `random(8, 15)`,
          repeat: -1,
          delay: i * 0.8,
          ease: 'none',
          opacity: 0,
          modifiers: {
            y: (y) => (parseFloat(y) % window.innerHeight) + 'px',
          },
        });
      });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Underwater pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/60 to-[#0a1628]/90" />
      </div>

      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[200%] h-[80px] animate-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(6, 182, 212, 0.1)"
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div ref={bubblesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/20 bg-cyan-400/5"
            style={{
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
          Dive Into
          <span className="block text-gradient-aqua">Excellence</span>
        </h1>

        <p className="hero-subtitle mt-6 text-lg sm:text-xl md:text-2xl text-cyan-100/80 max-w-3xl mx-auto font-light leading-relaxed">
          Premium swimming academy for all ages. From first splash to competitive mastery — 
          unlock your potential in the water.
        </p>

        {/* Trust Badges */}
        <div className="hero-badges flex flex-wrap justify-center gap-3 sm:gap-4 mt-10">
          {[
            { icon: Users, text: 'Ages 3+' },
            { icon: Award, text: 'Certified Coaches' },
            { icon: Waves, text: 'Private & Group' },
            { icon: MapPin, text: 'New Cairo' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="glass flex items-center gap-2 px-4 py-2 rounded-full text-sm text-cyan-100"
            >
              <Icon className="w-4 h-4 text-cyan-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <a
            href="https://wa.me/201228384225"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:-translate-y-1 text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Book Your Session</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 border-2 border-cyan-400/50 text-cyan-100 font-semibold rounded-full hover:bg-cyan-400/15 hover:border-cyan-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Learn More
          </a>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
}
