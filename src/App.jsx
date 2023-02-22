import React from "react";
import { Home } from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { SocialMedia } from "./components/SocialMedia/SocialMedia";
import ServiceCard from "./components/ServiceCard/ServiceCard";
export const App = () => {
  return (
    <section>
      <ScrollUp />
      {/* <SocialMedia /> */}
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/service" element={<ServiceCard/> }/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </section>
  );
};
