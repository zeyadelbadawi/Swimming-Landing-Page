import { useScrollReveal } from '@/hooks/useGSAP';
import { Shield, Heart, TrendingUp, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-[#0a1628] to-[#0d1f2d] section-padding overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            data-animate="up"
            className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            About Our Academy
          </span>
          <h2
            data-animate="up"
            data-delay="0.1"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Excellence Built on
            <span className="text-gradient-aqua block"> Expertise & Passion</span>
          </h2>
        </div>

        {/* Coach Section - Featured */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Coach Image - Premium styling */}
          <div
            data-animate="left"
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl">
              <img
                src="/coach-hesham.jpg"
                alt="Coach Hesham Eldebecy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-2xl font-bold text-white">Coach Hesham Eldebecy</p>
                <p className="text-cyan-300 text-sm mt-1">Head Coach & Academy Director</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3
              data-animate="right"
              className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Leading Your Swimming Journey with Expertise
            </h3>
            
            <p
              data-animate="right"
              data-delay="0.1"
              className="text-lg text-cyan-100/80 leading-relaxed mb-4"
            >
              With years of professional coaching experience and a passion for developing swimming talent, Coach Hesham Eldebecy founded Swim City Academy to create a world-class training environment right here in New Cairo.
            </p>

            <p
              data-animate="right"
              data-delay="0.2"
              className="text-lg text-cyan-100/70 leading-relaxed mb-8"
            >
              At Swim City Academy, we believe every person deserves to feel safe and confident in the water. Our professional coaches create a nurturing environment where kids and adults alike can discover the joy of swimming while building life-saving skills that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { stat: '500+', label: 'Active Swimmers' },
                { stat: '15+', label: 'Certified Coaches' },
                { stat: '10+', label: 'Years Experience' },
              ].map(({ stat, label }, i) => (
                <div
                  key={label}
                  data-animate="up"
                  data-delay={String(0.3 + i * 0.1)}
                  className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-500"
                >
                  <p className="text-2xl font-bold text-cyan-400">{stat}</p>
                  <p className="text-cyan-100/60 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3
            data-animate="up"
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Choose Swim City Academy
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                desc: 'Certified facilities with trained lifeguards and stringent safety protocols.',
              },
              {
                icon: Award,
                title: 'Expert Coaching',
                desc: 'All coaches are certified and passionate about developing water confidence.',
              },
              {
                icon: Heart,
                title: 'Personalized Care',
                desc: 'Small class sizes ensuring each swimmer gets individual attention and feedback.',
              },
              {
                icon: TrendingUp,
                title: 'Structured Progress',
                desc: 'Clear progression paths from beginner to advanced competitive levels.',
              },
              {
                icon: Users,
                title: 'Supportive Community',
                desc: 'Join a family of swimmers where every milestone is celebrated together.',
              },
              {
                icon: Zap,
                title: 'Modern Facilities',
                desc: 'Professional Olympic-standard pool with state-of-the-art equipment.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                data-animate="scale"
                data-delay={String(i * 0.08)}
                className="group relative glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {title}
                  </h4>
                  <p className="text-cyan-100/60 text-sm leading-relaxed">{desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-teal-400 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div
          data-animate="scale"
          className="relative glass rounded-3xl p-8 md:p-12 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="relative text-center">
            <p className="text-xl md:text-2xl text-cyan-100/90 leading-relaxed font-light">
              <span className="text-cyan-300 font-semibold">Our Mission:</span> To empower every individual with the confidence, skills, and passion to thrive in water while building a community of swimmers who inspire and support each other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
