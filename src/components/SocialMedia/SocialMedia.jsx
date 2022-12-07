import React from "react";
import Fade from "react-reveal/Slide";
import "./style.scss";

export const SocialMedia = () => {
  return (
    <div className="social-container">
      <Fade bottom>
        <div className="links">
          <a
            href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope fa "></i>
          </a>
          <a href="tel:+2541234555">
            <i className="fa-solid fa-phone fa"></i>
          </a>
          <a href="http:// ">
            <i className="fa-brands fa-whatsapp fa"></i>
          </a>
          <a href="http://">
            <i className="fa-brands fa-twitter fa"></i>
          </a>
          <a href="http://">
            <i className="fa-brands fa-facebook fa"></i>
          </a>
          <a href="http://">
            <i className="fa-brands fa-instagram fa"></i>
          </a>
          <a href="http://">
            <i className="fa-brands fa-linkedin-in fa"></i>
          </a>
        </div>
      </Fade>
    </div>
  );
};
