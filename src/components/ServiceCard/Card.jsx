import React from "react";
import Line from "../Line/Line";
import { Fade } from "react-reveal";
import Services from "./Services";
import TechStack from "./TechStack";
import ServiceCardTitle from "./ServiceCardTitle";
import ServiceDetails from "./ServiceDetails";
import cardData from "./data";
import "./ServiceStyle/Style.css";
import Button from "../Button/Button";

const Card = () => {
  return (
    <div className="service-card">
      {cardData.map(({ id, title, details, servicelist, techStack, image }) => (
        <div className="service-card-content" key={id}>
          <div className="card-left">
            <Line />

            <Fade cascade bottom>
              <ServiceCardTitle title={title} image={image} id={id}/>
            </Fade>
          </div>

          <div className="card-right">
            <Fade cascade bottom>
              <div className="card-right-details">
                <ServiceDetails details={details} />

                <div className="services-offered">
                  {servicelist.map((service) => (
                    <Services {...service} />
                  ))}
                </div>
              </div>
            </Fade>
            <Fade cascade bottom>
              <div className="tech-stack">
                <h4>Tech Stack</h4>
                <div className="stack-icon">
                  {techStack.map((stack) => (
                    <TechStack {...stack} />
                  ))}
                </div>
                <Button text="Get Quote " />
              </div>
            </Fade>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
