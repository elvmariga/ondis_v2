import React from 'react';
import PropTypes from 'prop-types';
import  './hero-style/hero-style.css';
import Button from '../Button/Button';
import image from './assests/hero.svg';
import Fade from "react-reveal/Fade";



const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <div>
        <Fade Top>
          <h1>
            All You Need is an Attractive
            <span
              id="greeting"
              style={{ color: "#bd0204", fontWeight: "400" }}
            ></span>
          </h1>
        </Fade>
      </div>
      <div>
        <p>
          Our skilled content creators, designers and developers are dedicated
          to ensure you maxmize on the growing differentiated online users.
        </p>
      </div>
      <div className="btns">
        <Button
          style={{ transform: "scale(1.1, 1.1) !important", color: "red" }}
        />
        <a href="http://">
          Whatapp
          <i class="fa-brands fa-whatsapp fa-xl"></i>
        </a>
      </div>
    </div>
    <div className="hero-right"></div>
    <img src={image} alt="Hero Image" />
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
