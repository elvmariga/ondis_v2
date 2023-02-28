import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import { NavLink } from "react-router-dom";

const Button = ({ style, text }) => (
  <div style={style} className="Button">
    <NavLink
      smooth="true"
      spy="true"
      style={{
        textDecoration: "none",
        fontSize: "1rem",
        // fontFamily: "Poppins"
        color: "#FFFFFF ",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
      }}
      activeclassname="active"
      to="/contact"
    >
      {text}
      <i className="fa-solid fa-angles-right"></i>
    </NavLink>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
};

export default Button;
