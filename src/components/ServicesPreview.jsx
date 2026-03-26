// src/components/ServicesPreview.jsx
import React from "react";
import { ArrowRight } from "lucide-react"; // Lucide icon

const services = [
  {
    title: "Massage Therapy",
    desc: "Deep tissue and Swedish techniques designed to release tension and improve circulation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVXy2inPXzoqsyy-0cfDPvcWM8f2cvv7Rb6zZLAxFOK-vBZXGjcTxdpjh1SDL4PWqRRR9H2wtLonsZ-h_fjPW6biRilKCKmiI6oc7GcAYoYoWNTv9_vRaPAKZv6lTc_h6gQ6WLMIULnjggAewYML6ga_tEzNnl6krrvl2cDmdIOWozEqzHHGp8no0gqTsa3PNQY1UEPiHEZzHLt494TA3A7piPXRfUjfeYU5d5RyjVA0oC3zq4fHPrwWa2zxb--Dv3_xoYquBZaTk",
    offset: "",
  },
  {
    title: "Skincare Treatments",
    desc: "Advanced organic facials and peels that restore your natural radiance and skin health.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6xD1HVwczvYewJtxo0j4mqGDVN7GwoKzB7RIdtT_y4BBg3pqsG1HiC_qx1X4ugV7SKduwdvvPiOp44seuIUHofkiIElcd4W_IsZf2dWwGRfQlMizGORrypibz0rn8eCHo_CL6TmqpNTLR6-kLrQuKJsp_RBtjya5K3zcO5sVeSIgLUnC4LTBWSMK0eSO-9EGXIxTtk-gpXwmFiGGVQsmc4DahfoYCRqgAWkANIk0FiUxI3s2FroleGynDIvkHP0NRg-2_GkN-OSE",
    offset: "md:mt-12",
  },
  {
    title: "Yoga & Mindfulness",
    desc: "Guided meditation and movement sessions to align your breath and focus your mind.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD71DBm8psMAawks-J5A8UaG40AaIEWhnCb-o6ebstI9IziTPkxvB9ns3Ryr2FEo84cKdyxUuoEhfs5e8_d7nNeJgoPPtshjOwLcw5tEAgEQIzm4rBLjpaaslWFk4K301DjZgJpw84BygR18pHwk7ff95Tvy4aDuZTmnnVLT2EsbdWwYSNg_54i_DbI7r8n4aTExTE6Jpdje6hvYWopAYf-B8Si2lUcJVEg5TLsgojHYGs-mcoD_cd0PNIp3TPNSbdwBjaOtoewvk4",
    offset: "",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-label text-xs font-extrabold tracking-[0.3em] uppercase text-primary">
            Curated Offerings
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 text-on-surface">
            Experience Excellence
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${service.offset}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-headline text-2xl mb-3">{service.title}</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <a
                  className="inline-flex items-center text-primary font-bold tracking-wide uppercase text-xs gap-1 group-hover:gap-2 transition-all"
                  href="#"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
