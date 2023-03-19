import React from "react";
// import {Navbar} from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Hero from "../components/hero/hero";

import Partners from "../components/Partners/Partners";
import Expert from "../components/Expert/Expert";
// import Service from "../components/Service/Service";
// import Graphics from '../components/Graphics/Graphics';
// import Socials from '../components/Socials/Socials';
import Customer from "../components/Customer/Customer";
import Card from "../components/ServiceCard/Card";
import creative from "../../src/divider.jpg"
import Glance from "../components/Glance/Glance";
import Process from "../components/Process/Process";



export const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />

      <Partners />
      <Expert />
      {/* <Service/>

      <Graphics/>
      <Socials/> */}
      <Card />
      <Process />
     <Glance />
      <Customer />
      {/* <Footer/> */}
    </>
  );
};
