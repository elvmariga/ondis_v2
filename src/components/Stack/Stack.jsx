import React from "react";
import PropTypes from "prop-types";
import Icon from "./assets/stack-icon.svg";
import Plus from "./assets/plus.svg";
import "./stack-style/Stack-style.css";
import Button from "../Button/Button";

const Stack = () => (
  <div className="stack">
    <div className="title">
      <h2>Tech Stacks</h2>
    </div>
    <div className="stacks" >
      <img src={Icon} alt="Tech Stack Icon" />
      <img src={Icon} alt="Tech Stack Icon" />
      <img src={Icon} alt="Tech Stack Icon" />
      <img src={Plus} alt="Tech Stack Icon" />
    </div>
    <Button />
  </div>
);

Stack.propTypes = {};

Stack.defaultProps = {};

export default Stack;
