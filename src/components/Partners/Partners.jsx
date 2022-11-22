import React from "react";
import PropTypes from "prop-types";
import "./partners-style/partners-style.css";
import userIcon from "./assets/user-plus.svg";
import Partner from '../Partner/Partner'

const Partners = () => (
  <div className="partners">
    <div className="partners-top">
      <h2>Partners</h2>
    </div>
    <div className="partners-bottom">
      <div className="join">
        <img src={userIcon} alt="use plus icon" />
        <p>Join us</p>
      </div>
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
    </div>
  </div>
);

Partners.propTypes = {};

Partners.defaultProps = {};

export default Partners;
