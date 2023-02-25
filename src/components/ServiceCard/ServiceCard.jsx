import React from 'react';
import Line from "../Line/Line";
import Fade from "react-reveal/Fade";
import serviceIcon from "./assests/bookmark.svg";
import webDesign from "./assests/web-design.svg"
import TechStack from './components/StackIcons/TechStack';
import data from './data';
import Card from './Card';

const ServiceCard = () => {
  // return (
  //   // <div className="service-card">
  //   //   <div className="service-card-content">
  //   //     <div className="left">
  //   //       <h2 className="service-title">
  //   //         {" "}
  //   //         <Line />
  //   //         Web Development
  //   //       </h2>
  //   //       <Fade bottom>
  //   //         <img src={webDesign} alt="" />
  //   //       </Fade>
  //   //     </div>
  //   //     <div className="right">
  //   //       <div className="service-details">
  //   //         <p>
  //   //           We create user-centric websites that prioritize user experience
  //   //           and are easy to navigate. Our expertise helps you elevate your
  //   //           online presence and reach your goals.
  //   //         </p>
  //   //       </div>
  //   //       <div className="services-offered">
  //   //         <div className="service-list">
  //   //           <div className="service-card">
  //   //             <img src={serviceIcon} alt="" />
  //   //             <p>Blog Website</p>
  //   //           </div>
  //   //           <div className="service-card">
  //   //             <img src={serviceIcon} alt="" />
  //   //             <p>Blog Website</p>
  //   //           </div>
  //   //           <div className="service-card">
  //   //             <img src={serviceIcon} alt="" />
  //   //             <p>Blog Website</p>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //       <TechStack />
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );

<div>
  {data.map((createCard)=> {
    return(
      <Card 
      key={data.id}
      />
    )})}
</div>
}

export default ServiceCard