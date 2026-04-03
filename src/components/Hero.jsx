import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 md:px-16 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-6 z-10 space-y-8">
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-on-surface">
            Relax, <span className="italic text-primary">Rejuvenate</span>, Book
            Your Appointment Easily
          </h1>
          <p className="text-lg max-w-lg leading-relaxed text-on-surface-variant">
            Experience tranquility with our curated wellness journeys. Speed,
            convenience, and professional care designed to restore your inner
            balance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-bold tracking-widest uppercase text-xs hover:scale-105 transition-transform flex items-center gap-2">
              Book Now <ArrowRight size={16} />
            </button>

            <Link
              to="/services"
              className="bg-secondary-container/40 text-secondary px-10 py-4 rounded-full font-label font-bold tracking-widest uppercase text-xs hover:bg-secondary-container/60 transition-colors flex items-center gap-2"
            >
              View Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-6 relative h-[500px] md:h-[700px]">
          <div className="absolute inset-0 rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl rotate-2 scale-105 bg-surface-container-high">
            <img
              alt="Luxury spa treatment room"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5gLI40F2lK4Y0gVqssVBa08NqfrTIbXrh5-kLWx5Me2omZR6_qWltI-2ryI-Pu0TFfCYZZz-B-yU7T9jnf1Xq3MavMBpiHFNqnkg0lJnxN2038dlPPZGCfXypp72VvzNb0VhSN4cZNkyj3TXKKttbdw-ofqZaWju5TlXVtu1xWovLwkcN78fAD9HJNjoXPL3oofCCiPkzzfdEiyU8WK2WXT9ggP462gHcwTyFEWzQJOlkVtWtwK6-YSj5y6s4n1S2JZcB1Js8XmM"
            />
          </div>

          <div className="absolute -bottom-8 -left-8 bg-surface-container p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
            <p className="font-headline italic text-primary text-xl">
              "A moment of pure peace in a busy world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
