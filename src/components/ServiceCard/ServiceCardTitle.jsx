import React from 'react'
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";

const ServiceCardTitle = (props) => {
  return (
    <div className="left">
      <h2 className="service-title">
        {" "}
        <Link />
        {props.title}
      </h2>
      <Fade bottom>
        <img className='image' src={props.image} alt="Service Card Profile" />
      </Fade>
    </div>
  );
}

export default ServiceCardTitle