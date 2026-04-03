// src/pages/Contact.jsx
import React from "react";
import { Phone, Mail, MapPin, ArrowRight, Leaf } from "lucide-react";

// Vite env variables
const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || "Velora";
const COMPANY_ADDRESS =
  import.meta.env.VITE_COMPANY_ADDRESS || "123 Wellness St, Your City";
const COMPANY_EMAIL =
  import.meta.env.VITE_COMPANY_EMAIL || "hello@veloraspa.com";
const COMPANY_PHONE = import.meta.env.VITE_COMPANY_PHONE || "+63 900 000 0000";

// Contact items mapped
const contactItems = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    info: COMPANY_PHONE,
    link: `tel:${COMPANY_PHONE.replace(/\s+/g, "")}`,
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    info: COMPANY_EMAIL,
    link: `mailto:${COMPANY_EMAIL}`,
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    info: COMPANY_ADDRESS,
    link: null, // not clickable
  },
];

export default function Contact() {
  return (
    <main className="font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed pt-20">
      {/* Hero Section */}
      <header className="relative w-full h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-primary-container/20 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEX6gwnCSadYoIJyNX-M-WozljG_teceDgVAllMfXouYUgZXelwIj0QJb1Yza1-X8kJtgga25rWeHXqYJRNs97QbhNf43g2834G8knQeS7X7M_aLNFdE9bDVxpDnUxTlTcYY_EsShwn-s6I804ptu5X8Et9_7DMKC_cdKkNhAo_yJbgJWup0NQw0s7I-J_U6V5fYmgH9iFI0s6rUI4Hbog6vroHbazJot91JGHT6oU_Lo_rHD6IiQkiSbdryFvLPVK5bINFf0nPHQ"
          alt="Serene spa interior"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 drop-shadow-sm tracking-tight">
            Connect With Us
          </h1>
          <p className="font-manrope text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Step into a world of tranquility. We are here to help you begin your
            journey toward lasting wellness and peace.
          </p>
        </div>
      </header>

      {/* Content Grid */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-primary font-manrope font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-notoSerif text-4xl md:text-5xl text-on-surface leading-tight mb-8">
                Reach Out to Our Team
              </h2>

              <div className="space-y-10">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-lg font-manrope font-medium whitespace-pre-line text-on-surface hover:text-primary transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-lg font-manrope font-medium whitespace-pre-line text-on-surface">
                          {item.info}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map / Visual Break */}
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm relative group">
              <img
                className="absolute inset-0 w-full h-full object-cover saturate-[0.5] group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPeVNYREpuydkt43lj2Ephvu1lr8uQ3LmueolY25LQK28LjrWPse7K7mcBPao04WZ97n6a-A6nyjGjxFMgPBv5VdPOEE5ZuOpEJCaZqFZ6wgDgk4dqWhAJ6_eVeixv76TSAlD3f6K9yeH6ZGPToJ66w140TUgWStZqiJthVKFMsGLYa5e7G_8ldSSdMBU5M1wDkGXVYavv-I4E1VfJ28fdXHgpL5zV5yWG8N27DHYHS3p8lXP0K67lZl1CSUarlxas5zGQsaYhA5s"
                alt="Map of location"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-surface-container-lowest p-5 rounded-full shadow-xl">
                  <MapPin size={32} className="text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-10 md:p-14 rounded-3xl shadow-sm tonal-shift border border-outline-variant/30">
              <div className="mb-12">
                <h3 className="font-notoSerif text-3xl text-primary mb-4">
                  Send an Inquiry
                </h3>
                <p className="text-on-surface-variant font-manrope leading-relaxed">
                  Our specialists are ready to curate your perfect wellness
                  experience. Expect a response within 24 hours.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary px-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary px-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@address.com"
                      className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary px-1">
                    Subject
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Treatment Booking</option>
                    <option>Corporate Retreats</option>
                    <option>Media & PR</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary px-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you find your sanctuary?"
                    className="w-full bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder:text-outline resize-none"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full md:w-auto min-w-[240px] bg-primary text-on-primary px-12 py-5 rounded-full font-manrope font-bold text-sm tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>SEND INQUIRY</span>
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-surface-container py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <Leaf size={40} className="text-primary mx-auto" />
          <h2 className="font-notoSerif italic text-3xl md:text-4xl text-on-surface leading-snug">
            "True silence is the rest of the mind, and is to the spirit what
            sleep is to the body, nourishment and refreshment."
          </h2>
          <div className="w-12 h-px bg-primary mx-auto"></div>
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
            William Penn
          </p>
        </div>
      </section>
    </main>
  );
}
