import React from 'react';
import Typed from 'react-typed';
import  './hero-style/hero-style.css';
import Button from '../Button/Button';
import image from './assests/hero.svg';
import Slide from 'react-reveal/Slide';
// import Fade from "react-reveal/Slide";



const Hero = () => (
  <div className="hero-container">
    <div className="herosection">
      <div className="hero">
        <div className="hero-left">
          <div>
            <h1>Unlock the Potential of Your Digital World With Our:</h1>
            <Typed
              strings={["Website", "Graphics Design", "Social Media Management", "Printing and Branding"]}
              typeSpeed={80}
              backSpeed={50}
              loop
              style={{ color: "#2068B0", fontSize: "3rem", fontWeight: "800" }}
            ></Typed>
          </div>
          <div>
            <p>
              Unleash Your Online Potential with Our Dream Team of Content
              Kings, Design Wizards, and Development Gurus - Dedicated to
              Boosting Your Business and Connecting You with a Wider Online
              Audience.
            </p>
          </div>
          <div className="btns">
            <Button
              text="Get Quote "
              // style={{ transform: "scale(1.1, 1.1) !important", color: "red" }}
            />
            <a
              href="https://wa.me/c/254700526125?text=I%20am%20interested%20in%20your%20your%20 services"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              WhatsApp
              <i
                className="fa-brands fa-whatsapp "
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
    </div>
  </div>
);



export default Hero;
