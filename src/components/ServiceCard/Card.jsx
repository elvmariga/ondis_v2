import React from "react";
import Line from "../Line/Line";
import { Fade } from "react-reveal";
import Services from "./Services";
import TechStack from "./TechStack";
import ServiceCardTitle from "./ServiceCardTitle";
import ServiceDetails from "./ServiceDetails";
import cardData from "./data";
import "./ServiceStyle/Style.css"
import Button from "../Button/Button";

const Card = () => {
  
  return (
    <div className="service-card">
      {cardData.map((card) => (
        <div className="service-card-content" key={card.id}>
          <div className="card-left">
            <Line />

            <Fade cascade bottom>
              <ServiceCardTitle title={card.title} image={card.image} />
            </Fade>
          </div>
          <div className="card-right">
            <div className="card-right-details">
              <ServiceDetails details={card.details} />
              <div className="services-offered">
                {card.servicelist.map((service) => (
                  <Services
                    key={service.id}
                    icon={service.icon}
                    service={service.service}
                  />
                ))}
              </div>
            </div>
            <div className="tech-stack">
              <h4>Tech Stack</h4>
              <div className="stack-icon">
                {card.techStack.map((stack) => (
                  <TechStack key={stack.id} stackIcon={stack.stackIcon} />
                ))}
               
              </div>
               <Button text="Get Quote " />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
