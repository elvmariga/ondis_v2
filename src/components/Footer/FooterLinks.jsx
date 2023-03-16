import React from 'react';
import { Link } from "react-router-dom";
// import cardData from "../ServiceCard/data";

const FooterLinks = (props) => {
     const handleClick = (id) => {
       const element = document.querySelector(id);
       element.scrollIntoView({ behavior: "smooth" });
     };

  return (
    <div>
      <p className="footLinks"  >
        {props.title}
      </p>
    </div>
  );
}

export default FooterLinks