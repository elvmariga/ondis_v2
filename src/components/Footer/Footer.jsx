import React from "react";
// import PropTypes from "prop-types";
import "../Footer/footer-style/footer-style.css";
import logo from "./assests/ondis-logo.svg";
// import Fade from "react-reveal/Fade";
import Fade from 'react-reveal/Slide';
import { SocialMedia } from "../SocialMedia/SocialMedia";

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <div>
          {" "}
          <img src={logo} alt="logo" />
        </div>

        <div>
          <a href="tel:+254719311036">
            <i class="fa-solid fa-phone"></i> +254 719 311 036
          </a>
        </div>
        <div>
          <a href="mailto:ondishub@gmail.com">
            {" "}
            <i class="fa-regular fa-envelope"></i> ondishub@gmail
          </a>
        </div>
        <div>
          <i class="fa-solid fa-location"></i> Nairobi, Kenya
        </div>



      </div>

      <Fade bottom cascade>
        <div className=".footer-middle">
          <h3>Our Services</h3>

          <p>Web Development</p>
          <p>Graphic Design</p>
          <p>Social Media Branding</p>
          <p>Serch Engine Optimization</p>
        </div>
      </Fade>

      <Fade cascade bottom>
        <div className=".footer-right">
          <h3>Company</h3>

          <p>About us</p>
          <p>Contact us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </Fade>
    </div>
    <div className="copyright">
      <div>
        <p>
          Copyright &copy; {new Date().getFullYear()} <b>OndisHub </b>{" "}
        </p>
      </div>
      <div>
        <p>
          Designed by <a href="http://">Elvis</a>
        </p>
      </div>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
