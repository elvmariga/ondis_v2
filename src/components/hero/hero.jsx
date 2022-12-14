import React from 'react';
import Typed from 'react-typed';
import  './hero-style/hero-style.css';
import Button from '../Button/Button';
import image from './assests/hero.svg';
import Slide from 'react-reveal/Slide';
import Fade from "react-reveal/Slide";



const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <div>
        <h1>All You Need is an Attractive</h1>
        <Typed
          strings={["Website", "Graphics Design", "Social Media branding"]}
          typeSpeed={80}
          backSpeed={50}
          loop
          style={{ color: "#1055db", fontSize: "3rem", fontWeight: "800" }}
        ></Typed>
      </div>
      <div>
        <p>
          A team of skilled professionals with expertise content creation,
          design, and development, dedicated to our <strong>Client's </strong>
          to improve their online presence and reach new customers.
        </p>
      </div>
      <div className="btns">
        <Button
          style={{ transform: "scale(1.1, 1.1) !important", color: "red" }}
        />
        <a href="http://">
          Whatapp
          <i
            class="fa-brands fa-whatsapp "
            style={{ marginLeft: "0.4rem" }}
          ></i>
        </a>
      </div>
    </div>
    <div className="hero-right">
      <Slide duration={1500} bottom>
        <img src={image} alt="Hero imagine" />
      </Slide>
    </div>
  </div>
);



export default Hero;
