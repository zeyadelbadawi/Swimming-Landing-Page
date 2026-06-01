import { useScrollReveal } from '@/hooks/useGSAP';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Ahmed',
    role: 'Parent of 2 swimmers',
    text: 'My kids were terrified of water. After just 3 months at Swim City, they\'re swimming laps confidently. The coaches are incredibly patient and professional.',
    rating: 5,
  },
  {
    name: 'Mohamed Hassan',
    role: 'Adult Learner',
    text: 'I learned to swim at 35! The adult program is fantastic — no judgment, just pure encouragement. Now swimming is my favorite workout.',
    rating: 5,
  },
  {
    name: 'Nour El-Din',
    role: 'Parent',
    text: 'The facility is spotless, the coaches are certified, and my daughter absolutely loves her weekly sessions. Best investment in her confidence.',
    rating: 5,
  },
  {
    name: 'Amira Khalil',
    role: 'Competitive Swimmer',
    text: 'The advanced training program pushed my technique to the next level. Coach feedback is detailed and the environment is motivating.',
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <section ref={sectionRef} className="relative bg-ocean-gradient section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Real Stories from Our
            <span className="text-gradient-aqua block"> Swim Family</span>
          </h2>
          <p data-animate="up" data-delay="0.2" className="mt-6 text-cyan-100/70 max-w-3xl mx-auto text-lg">
            Join hundreds of satisfied swimmers and parents who have transformed their water confidence at Swim City Academy.
          </p>
        </div>

        {/* Testimonial Card */}
        <div data-animate="scale" data-delay="0.2" className="glass rounded-3xl p-8 md:p-14 max-w-4xl mx-auto border border-cyan-500/20 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <Quote className="w-16 h-16 text-cyan-400/20 mb-6" />

            <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed mb-10 min-h-[100px] font-light">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            {/* Rating */}
            <div className="flex gap-2 mb-8">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-cyan-500/10">
              <div>
                <p className="text-white font-bold text-lg">{testimonials[active].name}</p>
                <p className="text-cyan-300 text-sm mt-1">{testimonials[active].role}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-teal-500/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{testimonials[active].name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-500 ${
                i === active
                  ? 'bg-cyan-400 w-12 h-3 shadow-[0_0_20px_rgba(6,182,212,0.6)]'
                  : 'bg-cyan-400/30 w-3 h-3 hover:bg-cyan-400/60 hover:w-6'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
