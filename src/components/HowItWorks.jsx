import React from "react";
import { Calendar, Flower, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: <Flower size={36} />,
    title: "Choose a Service",
    desc: "Explore our menu of therapeutic treatments and find the perfect match for your needs.",
  },
  {
    icon: <Calendar size={36} />,
    title: "Fill Booking Form",
    desc: "Select your preferred date and time through our seamless digital reservation system.",
  },
  {
    icon: <CheckCircle2 size={36} />,
    title: "Wait for Confirmation",
    desc: "Receive instant confirmation and preparation details via your preferred contact method.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-8 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="font-label text-xs font-extrabold tracking-[0.3em] uppercase text-primary">
            The Process
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 text-on-surface">
            Your Journey to Wellness
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="absolute top-1/4 left-0 w-full h-px bg-outline-variant/30 hidden md:block z-0"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative z-10 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center mb-8 shadow-lg ring-8 ring-surface">
                {step.icon}
              </div>
              <h3 className="font-headline text-2xl mb-4">{`${i + 1}. ${step.title}`}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
