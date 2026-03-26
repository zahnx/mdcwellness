// src/components/StickyCTA.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-on-primary px-6 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center font-bold tracking-wide uppercase text-sm md:text-base"
      >
        Book Your Session Now
        <ArrowRight className="ml-2" size={18} />
      </a>
    </div>
  );
}
