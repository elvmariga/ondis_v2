import React from "react";
// import {Navbar} from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/hero";

import Partners from "../components/Partners/Partners";
import Expert from "../components/Expert/Expert";
import Customer from "../components/Customer/Customer";
import Card from "../components/ServiceCard/Card";
import creative from "../../src/divider.jpg"
import Glance from "../components/Glance/Glance";
import Process from "../components/Process/Process";
import Stats from "../components/Stats/Stats"
import Pricing from "../components/Pricing/Pricing";


export const Home = () => {
  return (
    <>
      
      <Hero />

      <Partners />
      <Expert title="Expert in" />
     
      <Card />
      <Process />
     <Glance />
     <Stats />
     <Pricing />
      <Customer />
      
    </>
  );
};
