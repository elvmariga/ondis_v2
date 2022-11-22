import React from 'react';
import PropTypes from 'prop-types';
import './Product-style/product-style.css';
import Icon from './Assests/product-icon.svg'

const Product = () => (
  <div className="product">
    <div>
      <img src={Icon} alt="Product Icon" />
    </div>
    <div>
      <p>Lorem Ipsum</p>
    </div>
  </div>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
