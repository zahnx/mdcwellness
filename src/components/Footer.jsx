// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Company Info (env or fallback)
const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || "The Sanctuary";
const COMPANY_YEAR = new Date().getFullYear();

// Footer links
const exploreLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
];

const connectLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Conditions", path: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-stone-900 w-full rounded-t-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-12 py-16">
        {/* Logo / About */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-headline text-xl text-[#39635f] dark:text-[#527c78] mb-6">
            {COMPANY_NAME}
          </div>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            Your destination for holistic restoration and professional wellness
            in the heart of the city.
          </p>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-sm uppercase tracking-widest text-stone-900 font-bold mb-2">
            Explore
          </span>
          {exploreLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-body text-sm tracking-widest text-stone-500 hover:text-[#39635f]  decoration-[#39635f] underline-offset-4 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Connect Links */}
        <div className="flex flex-col gap-4">
          <span className="font-body text-sm uppercase tracking-widest text-stone-900 font-bold mb-2">
            Connect
          </span>
          {connectLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-body text-sm tracking-widest text-stone-500 hover:text-[#39635f]  decoration-[#39635f] underline-offset-4 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="col-span-2 md:col-span-1">
          <span className="font-manrope text-sm uppercase tracking-widest text-stone-900 font-bold mb-4 block">
            Newsletter
          </span>
          <div className="flex border-b border-stone-300 pb-2">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border-none text-sm w-full focus:ring-0 placeholder:text-stone-400"
            />
            <button className="text-[#39635f] flex items-center justify-center">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-stone-200/50 text-center">
        <span className="font-manrope text-xs uppercase tracking-[0.2em] text-stone-400">
          © {COMPANY_YEAR} {COMPANY_NAME}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
