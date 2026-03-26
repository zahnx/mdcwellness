// src/layouts/AppLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // <-- important
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet /> {/* <-- This is where the child pages will render */}
      </main>
      <Footer />
    </>
  );
}
