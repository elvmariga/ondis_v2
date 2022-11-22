import React from "react";
import {Navbar} from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/hero";
export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Footer/>
    </>
  );
};