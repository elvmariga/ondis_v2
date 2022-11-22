import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/Hero";
import Partners from "../components/Partners/Partners";
export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Partners/>
      <Footer/>
    </>
  );
};