import React from 'react';
import '../Navbar/navbar-style/navbar-style.css';
import logo from "./assests/ondis-logo.svg";
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <div className="navbar">
    <div className="navbar-content">
      <div className="logo">
        <img src={logo} alt="OndisHub Logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink
              smooth="true"
              spy="true"
              activeclassname="active"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth="true"
              spy="true"
              activeclassname="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              smooth="true"
              spy="true"
              activeclassname="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

