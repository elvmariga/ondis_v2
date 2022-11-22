import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = () => (
  <div className={styles.Button}>
    Get Quote<i class="fa-solid fa-angles-right"></i>
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
