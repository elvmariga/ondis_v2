import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/Hero";
import Partners from "../components/Partners/Partners";
import Expert from "../components/Expert/Expert";
import Service from "../components/Service/Service";
export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Partners/>
      <Expert/>
      <Service/>
      <Footer/>
    </>
  );
};