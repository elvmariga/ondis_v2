import React from 'react'

const Services = (props) => {
  return (
    <div className="service-card">
      <img src={props.icon} alt="" />
      <p>{props.service}</p>
    </div>
  );
}

export default Services