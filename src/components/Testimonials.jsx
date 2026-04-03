// src/components/Testimonials.jsx
import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Alex R.",
    role: "Wellness Client",
    initials: "AR",
    text: "The experience was incredibly relaxing from start to finish. The therapist knew exactly the right pressure points, making the entire session feel soothing and well-balanced. Definitely worth it.",
  },
  {
    name: "Jamie L.",
    role: "Wellness Client",
    initials: "JL",
    text: "Professional and courteous service. I felt completely at ease and refreshed after the session. Highly recommended.",
  },
  {
    name: "Taylor M.",
    role: "Wellness Client",
    initials: "TM",
    text: "Consistently excellent service. Every session helps relieve tension and leaves me feeling rejuvenated. Looking forward to my next visit.",
  },
  {
    name: "Jordan S.",
    role: "Wellness Client",
    initials: "JS",
    text: "A truly relaxing experience. The therapist’s technique was exceptional, and I felt a noticeable release in muscle tension right after the session.",
  },
  {
    name: "Casey D.",
    role: "Wellness Client",
    initials: "CD",
    text: "Great service and attention to detail. We felt refreshed and well taken care of. Will definitely book again.",
  },
  {
    name: "Morgan K.",
    role: "Wellness Client",
    initials: "MK",
    text: "Very professional and calming environment. The whole experience exceeded my expectations.",
  },
];

export default function Testimonials() {
  const isCarousel = testimonials.length > 3;
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isCarousel) return;
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2; // duplicate items
    let animation;

    const startScroll = async () => {
      while (true) {
        if (!isPaused) {
          await controls.start({
            x: -scrollWidth,
            transition: { duration: scrollWidth / 50, ease: "linear" },
          });
          controls.set({ x: 0 }); // reset instantly for seamless loop
        } else {
          // pause check
          await new Promise((r) => setTimeout(r, 100));
        }
      }
    };

    startScroll();

    return () => animation && cancelAnimationFrame(animation);
  }, [controls, isCarousel, isPaused]);

  // Duplicate for seamless scroll
  const carouselItems = isCarousel
    ? [...testimonials, ...testimonials]
    : testimonials;

  return (
    <section className="py-24 bg-surface-container-high/30">
      <div className="mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between  mb-16 gap-6">
          <div>
            <span className="font-label text-xs font-extrabold tracking-[0.3em] uppercase text-primary">
              Real Results
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mt-4 text-on-surface">
              What People Are Saying
            </h2>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="text-4xl">4.9</span>
            <div className="flex flex-col">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest opacity-60">
                Avg. Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Grid or Infinite Carousel */}
        {isCarousel ? (
          <div
            ref={containerRef}
            className="overflow-hidden relative w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div animate={controls} className="flex gap-8">
              {carouselItems.map((t, i) => (
                <div
                  key={i}
                  className="max-w-[400px] min-w-[200px] sm:min-w-[220px] md:min-w-[250px] p-6 sm:p-8 md:p-10 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 flex-shrink-0"
                >
                  <div className="flex text-amber-500 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-amber-500 sm:fill-amber-500"
                      />
                    ))}
                  </div>
                  <p className="font-body text-on-surface-variant italic mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-sm sm:text-base">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm">{t.name}</h4>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 md:p-10 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10"
              >
                <div className="flex text-amber-500 mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-500 sm:fill-amber-500"
                    />
                  ))}
                </div>
                <p className="font-body text-on-surface-variant italic mb-4 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-sm sm:text-base">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm">{t.name}</h4>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
