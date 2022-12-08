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
          <h4>{props.name}</h4>
          <p>{props.testimony}</p>
          <img src={props.rating} alt="Rating" />
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;