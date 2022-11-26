import React from "react";
import {Home} from "../src/pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const App = () => {

  return (
    <section>
     
    <Navbar/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element= {<Home/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/contact" element ={<Contact/>} />
    </Routes>
    <Footer/>
      
    </section>
  );
};
