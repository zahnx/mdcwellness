// src/pages/Services.jsx
import React from "react";
import { CreditCard, Clock } from "lucide-react"; // Payment and schedule icons

const services = [
  {
    id: 1,
    title: "Deep Tissue Massage",
    description:
      "An intensive treatment focused on the deeper layers of muscle tissue. Ideal for releasing chronic tension and restoring natural alignment.",
    price: "$145",
    duration: "90 mins",
    popular: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLnDH_iC2Msm_3y6htRBjY_eIwH2vSzvh43JOBeczOZzxH1oIyD09T7YqH-uXsJAis5L5qO4raUud80VtSx0SxBFe1W0ZPT6UKOKogYbEal4lkGZIix885-0evxGWuUtauhtiysSzaZOH_s7WSA_0TgG97mcT3WJ-lwsx7ZijImBcYAJTyC9Cl0uK94g8EIowpyt8ekIfqTH2UfroCH4zl-2bv3d4lP-4Pt04IqLSQ5jP-aeSw_cw89r8sdKQ2I5RPc5Yx5Ikr6go",
    type: "featured",
  },
  {
    id: 2,
    title: "Revitalizing Facial",
    description:
      "Advanced botanical extracts and micro-circulation techniques to restore your natural radiance.",
    price: "$95",
    duration: "60 mins",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRqh9omnyzXRvrU2opV0wcxRVSLdy2DoYUNU44Pemr-coYRy8nzBUFrBSGd7EwDd65DifrU2AN6AbVJlVnTs1hk_SbyHXm6Uv_prOBRcnCHOBNh1qFckTE_2tlTWMkM_4qQl9qdvwCl6nbCKcRQQO2k1NSoWaOT6kVnt6aTz77xNdMLEhSsudvUxYToCFGSYFp661jVO7GvqCLkBu738n5irXgqTqtfP9g-P9qjB5dhDAXdfwhKp9RvbcLd5H5PMdgOoLo0fuNycE",
    type: "card",
  },
  {
    id: 3,
    title: "Aromatherapy Session",
    description:
      "A sensory journey using therapeutic-grade oils to balance the mind and nervous system.",
    price: "$110",
    duration: "75 mins",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUY72bCiemlgfFTJ3SSzKqp9EYCiNsDJ2wXyMGXVHlZchz0KUNDMEE-gVb8-KfEHKuEibRLBAD2VPtkYDfyqYzOBXiMVlLyFD_eg4-7aRntVYrFkaowgKfxAh1Val5eNm5Kh8bQA_JUlkKqDNb9_ev6M97Ib3rOh-aOojXT7P4eTa_GpvdzAF_mNTW-kCJIUfphTI2AH0G4_Gm1L3dQeGtLtpJq4wPe2zcEHIYDdquvcxODGw2GibUvoJhY0tL68UzKr3WM_0RYuE",
    type: "card",
  },
  {
    id: 4,
    title: "Hot Stone Sanctuary",
    description:
      "Smooth, heated river stones are placed on key energy points to melt away tension and improve circulation throughout the entire body.",
    price: "$160",
    duration: "90 mins",
    badge: "Premium",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE7heHCBnK9kPqvbUULo1a2UY7-y3kKAC8wlodCnkAA_OumrZNgZn6DjbCjAWjZSR88pNoYt55BqlF_MUoyxvqiN2swclUkP5EUXQ9-JPNqx7mQhBW0AXqcwX7f8_bQd2eKqJ2XPyOgaO3U0jLD8ubSJri4DtDUb6cQt4YjZgDxhMtFXWiBkhZiR9pnyfMvWEef3fXB7ZuuMKudSeNzHfyt3C49xYCz1ldLhvSo5QyXx6aCKnYdFcdTvyLFeo5dP7f8D_gsbsrCdc",
    type: "horizontal",
  },
];

export default function Services() {
  return (
    <main className="font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed pt-20">
      {/* Hero Section */}
      <header className="relative w-full h-[614px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-primary-container/20 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEqKKpuorLMVAK0hQgMGgFxprk3R0zaVM9Wfr50aqtDn7zG9M_jno0T47qwfmgQZfvT0Q7QVR-dl_S4jxtGnToQ_-DkEM5AhpN-DQjCiORSCEkhaoWgIJolhuyqMiXjKHjYMHjrclMUu3QgdaNOTQag71TZkJbkeMZ6gpZ2jHhhioFls_gkpjMsPuD0LZfGd1ObmVHGVjl4gOhqxVVnVFD6R3qr9-OXR8jCJDkCg5N4L87_IACTTOkgr_yanoex_F2IO-T3EzPLCA"
          alt="Spa Hero"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl text-white mb-6 drop-shadow-sm tracking-tight">
            Our Services
          </h1>
          <p className="font-manrope text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Curated treatments designed for your ultimate well-being. A
            sanctuary where time slows down and restoration begins.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-manrope font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                Signature Experiences
              </span>
              <h2 className="font-notoSerif text-4xl md:text-5xl text-on-surface leading-tight">
                Elevate Your Ritual
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm font-manrope text-base leading-relaxed">
              Every treatment is customized to your unique physiological needs,
              using botanical essences and mindful techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {services.map((service) => {
              if (service.type === "featured") {
                return (
                  <div
                    key={service.id}
                    className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm tonal-shift hover:shadow-md transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/2 overflow-hidden h-64 md:h-full">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={service.img}
                          alt={service.title}
                        />
                      </div>
                      <div className="md:w-1/2 p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <h3 className="font-notoSerif text-3xl text-primary">
                              {service.title}
                            </h3>
                            {service.popular && (
                              <span className="font-manrope text-sm font-bold text-primary px-3 py-1 bg-primary-fixed/30 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-on-surface-variant font-manrope mb-8 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-4 text-primary/70 font-manrope font-semibold text-sm mb-10">
                            <div className="flex items-center gap-2">
                              <CreditCard size={16} />
                              {service.price}
                            </div>
                            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} />
                              {service.duration}
                            </div>
                          </div>
                        </div>
                        <button className="w-full bg-primary text-on-primary py-4 rounded-full font-manrope font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else if (service.type === "card") {
                return (
                  <div
                    key={service.id}
                    className="md:col-span-4 group bg-surface-container-lowest rounded-2xl p-8 shadow-sm flex flex-col justify-between tonal-shift hover:translate-y-[-4px] transition-all"
                  >
                    <div>
                      <div className="h-48 mb-8 rounded-xl overflow-hidden">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={service.img}
                          alt={service.title}
                        />
                      </div>
                      <h3 className="font-notoSerif text-2xl text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-on-surface-variant font-manrope text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="font-manrope text-primary/80 font-bold mb-8">
                        {service.price} | {service.duration}
                      </div>
                    </div>
                    <button className="w-full border border-primary/20 text-primary py-3 rounded-full font-manrope font-bold hover:bg-primary-fixed/20 transition-all">
                      Book Now
                    </button>
                  </div>
                );
              } else if (service.type === "horizontal") {
                return (
                  <div
                    key={service.id}
                    className="md:col-span-8 group bg-surface-container-lowest rounded-2xl p-10 shadow-sm flex flex-col md:flex-row gap-10 items-center tonal-shift"
                  >
                    <div className="flex-1">
                      <h3 className="font-notoSerif text-2xl text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-on-surface-variant font-manrope leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-6 mb-8">
                        <div className="text-primary font-manrope font-bold">
                          {service.price} | {service.duration}
                        </div>
                        {service.badge && (
                          <div className="px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold uppercase tracking-widest">
                            {service.badge}
                          </div>
                        )}
                      </div>
                      <button className="bg-primary text-on-primary px-10 py-3 rounded-full font-manrope font-bold hover:opacity-90 transition-all">
                        Book Now
                      </button>
                    </div>
                    <div className="w-full md:w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        src={service.img}
                        alt={service.title}
                      />
                    </div>
                  </div>
                );
              } else return null;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
