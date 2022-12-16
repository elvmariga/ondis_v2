import React from "react";
import Fade from "react-reveal/Slide";
import "./style.scss";

export const SocialMedia = () => {
  return (
    <div className="social-container">
      <Fade bottom>
        <div className="links">
          <a
            href="href=mailto:ondishub@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope fa "></i>
          </a>
          <a href="tel:+2541234555" target="_blank">
            <i className="fa-solid fa-phone fa"></i>
          </a>
          <a
            href="https://wa.me/254719311036?text=I%20am%20interested%20in%20your%20your%20 services"
            target="_blank"
          >
            <i className="fa-brands fa-whatsapp fa" target="_blank"></i>
          </a>
          <a href="http://twitter.com/ondishub" target="_blank">
            <i className="fa-brands fa-twitter fa"></i>
          </a>
          <a href="http://facebook.com/ondishub" target="_blank">
            <i className="fa-brands fa-facebook fa"></i>
          </a>
          <a href="http://instagram.com/ondishub" target="_blank">
            <i className="fa-brands fa-instagram fa"></i>
          </a>
          <a href="http://linkedin.com/in/ondishub" target="_blank">
            <i className="fa-brands fa-linkedin-in fa"></i>
          </a>
          <a href="http://tiktok.com/ondishub" target="_blank">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </Fade>
    </div>
  );
};
