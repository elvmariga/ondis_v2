import React from 'react'

const Services = (props) => {
  return (
    <div className="services-card">
      <img style={{width: "32px", height: "32px"}} src={props.icon} alt="" />
      <p>{props.service}</p>
      
    </div>
  );
}

export default Services