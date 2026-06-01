import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll('[data-animate]');

    elements.forEach((el) => {
      const direction = el.getAttribute('data-animate') || 'up';
      const delay = parseFloat(el.getAttribute('data-delay') || '0');

      let fromVars: gsap.TweenVars = { opacity: 0, duration: 1, delay };

      switch (direction) {
        case 'up':
          fromVars = { ...fromVars, y: 60 };
          break;
        case 'down':
          fromVars = { ...fromVars, y: -60 };
          break;
        case 'left':
          fromVars = { ...fromVars, x: -60 };
          break;
        case 'right':
          fromVars = { ...fromVars, x: 60 };
          break;
        case 'scale':
          fromVars = { ...fromVars, scale: 0.8 };
          break;
        case 'fade':
          break;
      }

      gsap.from(el, {
        ...fromVars,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      yPercent: -30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return ref;
}

export function useCountUp(end: number, duration: number = 2) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };

    gsap.to(obj, {
      value: end,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.round(obj.value).toString();
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [end, duration]);

  return ref;
}

export { gsap, ScrollTrigger };