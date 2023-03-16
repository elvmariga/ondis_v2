import React from 'react';
import Fade from "react-reveal/Fade";

const ServiceCardTitle = (props) => {
  return (
    <div className="left">
      <h2 className="service-title">
        {" "}
        
        {props.title}
      </h2>
      <Fade bottom>
        <img className='image' src={props.image} alt="Service Card Profile" />
      </Fade>
    </div>
  );
}

export default ServiceCardTitle