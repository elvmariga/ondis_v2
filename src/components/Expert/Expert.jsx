import React from 'react';
// import PropTypes from 'prop-types';
import './expert-style/expert-style.css';
import Icon from './assets/down-icon.svg'

const Expert = (props) => (
  <div className='expert'>
    <div>
      <h2 className='title'>{props.title}</h2>
    </div>
    <div>
      <img src={Icon} alt="Down Icon" />
    </div>
  </div>
);



export default Expert;
