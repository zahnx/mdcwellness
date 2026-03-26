// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import StickyCTA from "../components/StickyCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main className="">
        <Hero />
        <ServicesPreview />
        <HowItWorks />
        <Testimonials />
      </main>
      <StickyCTA />
    </div>
  );
}
