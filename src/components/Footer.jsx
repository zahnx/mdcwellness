// src/components/Footer.jsx
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface-container-high py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div>
          <h3 className="font-headline text-2xl mb-4 text-on-surface">
            Beauty & Wellness Hub
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Elevating your wellness experience with curated services for body,
            mind, and skin. Your sanctuary awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-on-surface mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-on-surface mb-4">Contact</h4>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={18} className="text-primary" />
            <span className="text-on-surface-variant leading-relaxed">
              123 Wellness St, Imus, Philippines
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={18} className="text-primary" />
            <span className="text-on-surface-variant leading-relaxed">
              hello@beautywellnesshub.ph
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Phone size={18} className="text-primary" />
            <span className="text-on-surface-variant leading-relaxed">
              +63 912 345 6789
            </span>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-on-surface-variant text-xs">
        &copy; {new Date().getFullYear()} Beauty & Wellness Hub. All rights
        reserved.
      </div>
    </footer>
  );
}
