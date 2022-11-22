import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import logo from './assests/ondis-logo.svg'

const Footer = () => (
  <div className={styles.Footer}>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="links"></div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
