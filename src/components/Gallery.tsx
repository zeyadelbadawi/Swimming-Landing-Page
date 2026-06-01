import { useScrollReveal } from '@/hooks/useGSAP';

const IMAGES = [
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmelq5aaag4q/kids-swimming-lesson-coach.png',
    alt: 'Kids swimming lesson',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmelrxqaag3a/adult-swimmer-freestyle-action.png',
    alt: 'Adult freestyle swimming',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmenifqaag3q/swimming-gear-flatlay-poolside.png',
    alt: 'Swimming gear',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmemkniaag4a/modern-pool-facility-exterior.png',
    alt: 'Modern pool facility',
    span: 'col-span-2 row-span-1',
  },
  {
    src: 'https://mgx-backend-cdn.metadl.com/generate/images/967904/2026-05-27/pmenmnqaag2q/pool-lanes-overhead-training.png',
    alt: 'Pool lanes training',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="relative bg-[#0a1628] section-padding overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span data-animate="up" className="inline-block text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h2 data-animate="up" data-delay="0.1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Experience the
            <span className="text-gradient-aqua"> Academy</span>
          </h2>
          <p data-animate="up" data-delay="0.2" className="mt-4 text-cyan-100/60 max-w-2xl mx-auto text-lg">
            A glimpse into our world-class facilities and training sessions
          </p>
        </div>

        {/* Masonry Grid */}
        <div data-animate="scale" data-delay="0.3" className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {IMAGES.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`${span} relative group rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white text-sm font-medium">{alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}