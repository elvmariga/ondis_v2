import React from 'react';
import styles from './Navbar.module.css';
import logo from "./assests/ondis-logo.svg";
import Button from '../Button/Button';

export const Navbar = () => (
  <div className={styles.Navbar}>
    <div className="logo">
      <img src={logo} alt="OndisHub Logo" />
    </div>
    <div className="links">
      <ul>
        <li><a href="http://">Home</a></li>
        <li><a href="http://">About</a></li>
        <li><a href="http://">Contact</a></li>
        <li><Button/></li>
      </ul>
    </div>
  </div>
);

