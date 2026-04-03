import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { Menu, X } from "lucide-react";

// Access env variable
const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-8 py-4  mx-auto bg-[#fcf9f5]/80 backdrop-blur-md shadow-sm">
        {/* Logo */}
        <Link to="/" className="font-headline italic text-2xl text-[#39635f]">
          {COMPANY_NAME}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-headline text-lg tracking-tight pb-1 ${
                  isActive
                    ? "text-[#39635f] border-b-2 border-[#39635f]"
                    : "text-stone-600 font-medium hover:text-[#39635f] transition-colors"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Book Now Button */}
        <div className="hidden md:block">
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 shadow-sm">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#39635f]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#fcf9f5]/80 backdrop-blur-md shadow-sm w-full overflow-hidden transition-max-height duration-500 ${
          mobileOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `font-headline text-lg tracking-tight pb-1 ${
                  isActive
                    ? "text-[#39635f] border-b-2 border-[#39635f]"
                    : "text-stone-600 font-medium hover:text-[#39635f] transition-colors"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 shadow-sm mt-2">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
