import { useScrollReveal, useCountUp } from '@/hooks/useGSAP';
import { ShieldCheck, Smile, UserCheck, UsersRound, Sparkles, Brain, HeartHandshake } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Certified Coaches', desc: 'Internationally certified swimming instructors' },
  { icon: Smile, title: 'Safe Environment', desc: 'Clean, monitored facilities with lifeguards' },
  { icon: UsersRound, title: 'All Age Groups', desc: 'Programs from age 3 to adults' },
  { icon: UserCheck, title: 'Private & Group', desc: 'Flexible class options to suit your needs' },
  { icon: HeartHandshake, title: 'Friendly Atmosphere', desc: 'Supportive, encouraging learning culture' },
  { icon: Brain, title: 'Skill Development', desc: 'Structured progression from basics to advanced' },
  { icon: Sparkles, title: 'Confidence Building', desc: 'Watch fear transform into joy and mastery' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Happy Swimmers' },
  { value: 15, suffix: '+', label: 'Expert Coaches' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
];

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const countRef = useCountUp(value);
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white">
        <span ref={countRef}>0</span>
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <p className="mt-1 text-cyan-100/60 text-sm">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-ocean-gradient section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            The Swim City
            <span className="text-gradient-aqua"> Difference</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div data-animate="up" data-delay="0.2" className="glass rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-animate="up"
              data-delay={String(i * 0.08)}
              className="group glass rounded-xl p-5 hover:bg-white/10 transition-all duration-400"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-sm">{title}</h3>
              <p className="mt-1 text-cyan-100/50 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}