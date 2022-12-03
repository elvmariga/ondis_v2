import React from 'react';
// import PropTypes from 'prop-types';
import './Button.css';
import { NavLink } from "react-router-dom";

const Button = ({style}) => (
  <div style={style} className="Button">
    <NavLink
      smooth="true"
      spy="true"
      style={{
        textDecoration: "none",
        fontSize: "1rem",
        // fontFamily: "Poppins"
        color: "#FFFFFF ",
        padding:"0.5rem 1rem",
        borderRadius:"4px"
      }}
       activeclassname="active"
      to="/contact"
    >
      Get Quote<i class="fa-solid fa-angles-right"></i>
    </NavLink>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
