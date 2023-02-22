import React from 'react'
import './CustomerCard-style/CustomerCard-style.css';

const CustomerCard = (props) => {
  return (
    <div className="customer-card">
      <div className="card-content">
        <p>{props.testimony}</p>
        <img src={props.rating} alt="Rating" />
        
          <img className="customer-dp" src={props.dp} alt="Customer" />
     
          <h4>{props.name}</h4>
       
      </div>
    </div>
  );
};

export default CustomerCard;