import React from 'react';
// import PropTypes from 'prop-types';
import './expert-style/expert-style.css';
import Icon from './assets/down-icon.svg'

const Expert = () => (
  <div className='expert'>
    <div>
      <h2>Experts in:</h2>
    </div>
    <div>
      <img src={Icon} alt="Down Icon" />
    </div>
  </div>
);

Expert.propTypes = {};

Expert.defaultProps = {};

export default Expert;
