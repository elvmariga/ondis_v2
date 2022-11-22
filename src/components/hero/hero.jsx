import React from 'react';
import PropTypes from 'prop-types';
import  './hero-style/hero-style.css';
import Button from '../Button/Button';
import image from './assests/hero.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero-left">
      <div>
        <h1>OndisHub</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nisi consequat orci dignissim
          semper est. Pulvinar ut ut amet eget tincidunt metus. Lacinia et magna
          aliquam cursus.
        </p>
      </div>
      <div className="btns">
        <Button />
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
