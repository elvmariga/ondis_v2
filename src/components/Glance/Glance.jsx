import React from 'react';
import { NavLink } from "react-router-dom";
import "./GLance-style/style.css";



const Glance = () => {
  return (
    <div className="glance">
        <h2> Have a look at our work</h2>
      <div className="button">
        <NavLink
          smooth="true"
          spy="true"
          
          activeclassname="active"
          to="/portfolio"
          className="glancebtn"
        >
          Our Portfolio <i className="fa-solid fa-angles-right"></i>
        </NavLink>
      </div>
    </div>
  );
}

export default Glance