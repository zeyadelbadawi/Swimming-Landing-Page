import { useScrollReveal } from '@/hooks/useGSAP';
import { Baby, User, Users, Zap, Target, Trophy } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Kids Swimming',
    desc: 'Fun, safe introduction to water for children ages 3-12. Building confidence through play.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: User,
    title: 'Private Sessions',
    desc: 'One-on-one coaching tailored to your pace and goals. Maximum attention, fastest results.',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Group Classes',
    desc: 'Social learning environment with peers at similar levels. Motivation through community.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Zap,
    title: 'Adults Program',
    desc: 'Never too late to learn. Overcome fear, build fitness, and master swimming at any age.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Target,
    title: 'Beginner Training',
    desc: 'Zero to swimmer. Structured fundamentals program for complete beginners of all ages.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Trophy,
    title: 'Advanced Technique',
    desc: 'Refine your strokes, improve speed, and train for competitive swimming excellence.',
    color: 'from-violet-400 to-purple-500',
  },
];

export default function Programs() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-[#0a1628] section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            data-animate="up"
            className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Our Programs
          </span>
          <h2
            data-animate="up"
            data-delay="0.1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            Find Your Perfect
            <span className="text-gradient-aqua"> Swimming Path</span>
          </h2>
          <p
            data-animate="up"
            data-delay="0.2"
            className="mt-6 text-cyan-100/70 max-w-3xl mx-auto text-lg"
          >
            From your first splash to competitive mastery, we have expertly designed programs for every age and skill level. Each program is led by certified coaches who are passionate about your progress.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              data-animate="scale"
              data-delay={String(i * 0.08)}
              className="group relative glass rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 cursor-pointer overflow-hidden border border-cyan-500/10 hover:border-cyan-400/30"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} bg-opacity-25 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-xl transition-all duration-500`}>
                <Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {title}
              </h3>
              <p className="relative text-cyan-100/70 text-base leading-relaxed mb-6">
                {desc}
              </p>

              {/* Learn More Link */}
              <div className="relative flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                <span>Explore Program</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${color} transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
