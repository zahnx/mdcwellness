// src/components/Testimonials.jsx
import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Client #1",
    role: "Loyal customer",
    initials: "C1",
    text: "Nkkarelax po sobra ung prenatal massage, pinipilit ko pong di makatulog para mafeel ko buong session? Pero di napigilan sa sobrang sarap heheh. Sakto lng ung pressure, tamang tama sa mga buntis and knowledgeable sa mga points na di dapat daanan. Worth it po <3 sa uulitin po. Salamat!",
  },
  {
    name: "Client #2",
    role: "Loyal customer",
    initials: "C2",
    text: "Magaling po at magalang yung therapist nyo. Nakapag relax talaga ako. Sa uulitin 🙂",
  },
  {
    name: "Client #3",
    role: "Loyal customer",
    initials: "C3",
    text: "Thank you so much MDC especially po kay Ate Tin for regular pre-natal massage since my 2nd born and now for my 3rd baby. Had a safe delivery po last Monday, walang manas po during pregnancy, at relief kapag may back ache na due to pregnancy. Looking forward po for our lymphatic drainage massage session for fast recovery. Thank you so much po ulit and happy wellness!",
  },
  {
    name: "Client #4",
    role: "Loyal customer",
    initials: "C4",
    text: "Thank you MDC Wellness sa services; pre-natal and lymphatic massage. Hindi ako namanas habang pregnant and now lymphatic massage for recovery. Ang galing po ni Ate Tin, skilled hands, nakakarelax po at narerelease po ang muscle tensions, unlike po sa iba na parang pagod ka din after ng session. Kapag stress na po kami ni hubby, papabook na po agad. More client po MDC Wellness.",
  },
  {
    name: "Client #5",
    role: "Loyal customer",
    initials: "C5",
    text: "Your Therapist knows exactly what she’s doing, my wife and I feel great after the session. We will definitely request for her service again! Keep it up!",
  },
  {
    name: "Client #6",
    role: "Loyal customer",
    initials: "C6",
    text: "Therapist is very professional. I love the service. Will book again!",
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
