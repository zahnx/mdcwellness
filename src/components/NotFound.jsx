// src/components/NotFound.jsx
import React from "react";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-surface-container-low px-6">
      <div className="flex flex-col items-center bg-surface/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl max-w-md text-center">
        <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
          <AlertCircle size={48} />
        </div>

        <h1 className="font-headline text-5xl md:text-6xl mb-4 text-on-surface">
          404
        </h1>
        <p className="font-headline text-2xl md:text-3xl mb-6 text-on-surface">
          Page Not Found
        </p>
        <p className="text-on-surface-variant mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or the URL is incorrect.
          Don’t worry, you can go back home and start fresh!
        </p>

        <Link
          to="/"
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-label text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 shadow-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
