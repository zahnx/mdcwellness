// src/components/ComingSoon.jsx
import React from "react";
import { Clock } from "lucide-react";

export default function ComingSoon({ pageName = "This page is" }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-surface-container-low px-6">
      <div className="flex flex-col items-center bg-surface/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl max-w-md text-center">
        <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
          <Clock size={48} />
        </div>

        <h1 className="font-headline text-4xl md:text-5xl mb-4 text-on-surface">
          {pageName} coming soon
        </h1>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          We’re working hard to bring you this page. Stay tuned for updates and
          check back soon!
        </p>

        <a
          href="/"
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 shadow-sm"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
