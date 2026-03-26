// src/components/StickyCTA.jsx
import React from "react";
import { Calendar } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed top-36 right-4 transform -translate-x-1/2 z-50 w-[90%] md:w-auto">
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-on-primary px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center font-bold tracking-wide  text-sm"
      >
        <Calendar className="mr-4" size={18} />
        Book Now
      </a>
    </div>
  );
}
