import React, {useEffect, useRef} from "react";


import CustomerCard from "../CustomerCard/CustomerCard";
import "./Customer-style/Customer-style.css";
import Dp from "./assets/Ellipse 1.svg";
import Dp2 from "./assets/Ellipse 2.svg";
import Dp3 from "./assets/Ellipse 3.svg";
import Dp4 from "./assets/Ellipse 4.svg";
import Dp5 from "./assets/Ellipse 5.svg";
import Star from "./assets/stars.svg";
import Fade from "react-reveal/Slide";
import Icon from '../Expert/assets/down-icon.svg';
import Testimony from "../Testimony/Testimony";
import Testimonial from "./Testimonial";

 


const Customer = (props) => {

  const containerRef = useRef();

useEffect(() => {
  const container = containerRef.current;

  const scroll = () => {
    if (
      container.scrollLeft >=
      container.scrollWidth - container.offsetWidth
    ) {
      // Move the first card to the end of the container
      container.appendChild(container.firstChild);
      container.scrollLeft = 1;
    } else {
      container.scrollLeft += container.offsetWidth;
    }
  };

  const interval = setInterval(scroll, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="customer">
      <Fade cascade bottom>
        <div className="customer-content">
          {/* <div className="title">
            <h2>What Our Clients Say</h2>
            
              <img src={Icon} alt="Down Icon" />
           
          </div>

          <div className="cards" ref={containerRef}>
            <CustomerCard
              dp={Dp}
              name="Phoebe Toel"
              testimony=" The digital agent effectively meets all of my customer's needs, streamlining my customer service processes and enhancing the overall customer experience. I highly recommend it to anyone looking to improve their business performance."
              rating={Star}
            />
            <CustomerCard
              dp={Dp2}
              name="Elvis"
              testimony=" Digital marketing services provided by OndisHub has been a game-changer for our business. Their strategic approach has helped us significantly increase our online presence and reach our target audience more effectively.  "
              rating={Star}
            />
            <CustomerCard
              dp={Dp3}
              name="Miss Owanda"
              testimony="OndisHub's website development team is outstanding. They took the time to understand our business needs and delivered a website that exceeded our expectations. The site is visually appealing, user-friendly, and has helped us attract and retain more customers. Highly recommended!"
              rating={Star}
            />

            <CustomerCard
              dp={Dp4}
              name="Victor W."
              testimony=" They have helped us create and maintain a strong social media presence that has led to increased engagement and brand awareness. 
              I would highly recommend their services to any business looking to enhance their social media presence"
              rating={Star}
            />
            <CustomerCard
              dp={Dp4}
              name="Victor W."
              testimony=" Easy to communicate with the team, with 24/7 support"
              rating={Star}
            />
            <CustomerCard
              dp={Dp5}
              name="Dr. Achando"
              testimony="Ondishub is the best company. It delivers on time"
              rating={Star}
            />
          </div> */}

          
        
        </div>
        {/* <Testimony /> */}
        <Testimonial />
      </Fade>
    </div>
  );
};

export default Customer;


