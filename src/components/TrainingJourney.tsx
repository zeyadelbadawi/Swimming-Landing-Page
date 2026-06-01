import { useScrollReveal } from '@/hooks/useGSAP';
import { MessageCircle, ListChecks, Play, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Contact Us',
    desc: 'Reach out via WhatsApp or our contact form. We\'ll answer all your questions.',
  },
  {
    icon: ListChecks,
    step: '02',
    title: 'Choose Your Program',
    desc: 'Select the perfect program based on age, skill level, and schedule preferences.',
  },
  {
    icon: Play,
    step: '03',
    title: 'Start Training',
    desc: 'Begin your swimming journey with our certified coaches in a safe, fun environment.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Improve & Excel',
    desc: 'Watch your skills grow as you progress through our structured training levels.',
  },
];

export default function TrainingJourney() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-deep-ocean section-padding overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            How It Works
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your Training
            <span className="text-gradient-aqua"> Journey</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/40 via-teal-500/40 to-cyan-500/40" />

          <div className="space-y-12 md:space-y-0">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <div
                key={step}
                data-animate={i % 2 === 0 ? 'left' : 'right'}
                data-delay={String(i * 0.15)}
                className={`relative md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:mb-16`}
              >
                {/* Content Card */}
                <div className={`md:w-[calc(50%-40px)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-cyan-400/60 text-sm font-mono">Step {step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-cyan-100/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a1628] border-2 border-cyan-500/50 items-center justify-center z-10">
                  <span className="text-cyan-400 text-xs font-bold">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}