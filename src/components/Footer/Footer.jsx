import React from "react";
// import PropTypes from "prop-types";
import "../Footer/footer-style/footer-style.css";
import logo from "./assests/ondis-logo.svg";
// import Fade from "react-reveal/Fade";
import { Navigate, Route, Routes } from "react-router-dom";
import Fade from 'react-reveal/Slide';
import { SocialMedia } from "../SocialMedia/SocialMedia";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div className="footerlogo">
          {" "}
          <img src={logo} alt="logo" />
        </div>

        <div>
          <a href="tel:+254719311036">
            <i class="fa-solid fa-phone"></i> +254 719 311 036
          </a>
        </div>
        <div>
          <a
            href="href=mailto:ondishub@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope fa "></i> ondishub@gmail.com
          </a>
        </div>
        <div>
          <i class="fa-solid fa-location"></i> Nairobi, Kenya
        </div>
      </div>

      <Fade bottom cascade>
        <div className=".footer-middle">
          <h3>Our Services</h3>
          <a className="footLinks" href="#web">
            Web Development
          </a>
          <a className="footLinks" href="#graphics">
            Graphic Design
          </a>
          <a className="footLinks" href="#socialMedia">
            Social Media Branding
          </a>

          <p>Serch Engine Optimization</p>
        </div>
      </Fade>

      <Fade cascade bottom>
        <div className=".footer-right">
          <h3>Company</h3>
         
          <a className="footLinks" href="#about">
            About
          </a>
          <a className="footLinks" href="#contact">
            Contact
          </a>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <div className="links">
            <a
              href="http://twitter.com/ondishub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter fa"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100068420811214"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook fa"></i>
            </a>
            <a
              href="http://instagram.com/ondishub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram fa"></i>
            </a>
            <a
              href="http://linkedin.com/in/ondishub"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in fa"></i>
            </a>
            <a
              href="http://tiktok.com/ondishub"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </Fade>
    </div>
    <div className="copyright">
      <div>
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <b style={{ color: "#EC5962" }}>OndisHub </b>{" "}
        </p>
      </div>
      <div>
        <p>
          Designed by{" "}
          <a href="http://ondishub.co.ke" style={{ color: "#EC5962" }}>
            OndisHub
          </a>
        </p>
      </div>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
