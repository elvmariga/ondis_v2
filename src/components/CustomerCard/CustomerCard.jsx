import React from 'react'
import './CustomerCard-style/CustomerCard-style.css';

const CustomerCard = (props) => {
  return (
    <div className="customer-card">
      
      <div className="card-content">
        <div className="left">
          <img src={props.dp} alt="Customer image" />
        </div>
        <div className="right">
          <h3>{props.name}</h3>
          <p>{props.testimony}</p>
          <img src={props.rating} alt="Rating" />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;