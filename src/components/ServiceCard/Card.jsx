import React from 'react';
import Line from '../Line/Line';
import { Fade } from 'react-reveal';
import Services from './Services';
import TechStack from './components/StackIcons/TechStack';
import ServiceCardTitle from './ServiceCardTitle';
import ServiceDetails from './ServiceDetails';
import cardData, {services, stack} from './data';


const Card = (props) => {
  return (
    <div className="service-card">
      <div className="service-card-content">
        {cardData.map((cardDetails) => (
          <ServiceCardTitle key={cardData.id} title={cardData.title} image={cardData.image} />
        ))}
        <div className="right">
          {cardData.map((cardDetails) => (
            <ServiceDetails key={cardData.id} details={cardData.details} />
          ))}
          <div className="services-offered">
            <Services
              key ={services.id}
              icon ={services.icon}
              service={services.service}
            />
          </div>
          <TechStack 
          key={stack.id}
          stackIcon= {stack.stackIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default Card