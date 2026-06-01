import { useScrollReveal } from '@/hooks/useGSAP';
import { Baby, Gamepad2, GraduationCap, Briefcase } from 'lucide-react';

const ageGroups = [
  {
    icon: Baby,
    age: '3–6 Years',
    title: 'Little Swimmers',
    desc: 'Water familiarization, basic safety, and fun splash activities in a nurturing environment.',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Gamepad2,
    age: '7–12 Years',
    title: 'Junior Champions',
    desc: 'Stroke development, endurance building, and competitive preparation through engaging drills.',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-500/10',
  },
  {
    icon: GraduationCap,
    age: '13–17 Years',
    title: 'Teen Athletes',
    desc: 'Advanced technique refinement, speed training, and competitive swimming pathways.',
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    icon: Briefcase,
    age: '18+ Years',
    title: 'Adult Swimmers',
    desc: 'Learn to swim, improve fitness, or master new strokes — it\'s never too late to start.',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-500/10',
  },
];

export default function AgeGroups() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-[#0a1628] section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Age Groups
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Programs for
            <span className="text-gradient-aqua"> Every Age</span>
          </h2>
          <p data-animate="up" data-delay="0.2" className="mt-4 text-cyan-100/60 max-w-2xl mx-auto text-lg">
            Tailored curriculum designed for each developmental stage
          </p>
        </div>

        {/* Age Group Cards - Horizontal Timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map(({ icon: Icon, age, title, desc, color, bgColor }, i) => (
            <div
              key={title}
              data-animate="up"
              data-delay={String(i * 0.12)}
              className="group relative"
            >
              {/* Connector line (hidden on mobile) */}
              {i < ageGroups.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-cyan-500/30 to-transparent z-0" />
              )}

              <div className="relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 h-full">
                {/* Age Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${bgColor} mb-4`}>
                  <span className={`text-xs font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {age}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-cyan-100/60 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}