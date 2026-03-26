// src/components/Testimonials.jsx
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Elena Aris",
    role: "Loyal Member",
    initials: "EA",
    text: "The booking process was so effortless. I felt relaxed before I even walked through the doors. Truly a premium experience.",
  },
  {
    name: "Julian Marcus",
    role: "Monthly Guest",
    initials: "JM",
    text: "The skincare treatment left my face glowing for weeks. The staff is incredibly knowledgeable and attentive to detail.",
  },
  {
    name: "Sarah Chen",
    role: "Yoga Enthusiast",
    initials: "SC",
    text: "A sanctuary in every sense of the word. The mindfulness session helped me find focus during a very stressful month.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-surface-container-high/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-10 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500" />
                ))}
              </div>
              <p className="font-body text-on-surface-variant italic mb-8 leading-relaxed">{`"${t.text}"`}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
