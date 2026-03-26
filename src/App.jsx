import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import AppLayout from "./layout/AppLayout";

export default function App() {
  return (
    <div className="font-body bg-surface text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <ScrollToTop />
      <Routes>
        {/* Routes that use the common layout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 404 page without layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
