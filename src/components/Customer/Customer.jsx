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

 


const Customer = (props) => {

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (
        container.scrollLeft >=
        container.scrollWidth - container.offsetWidth
      ) {
        container.scrollLeft = 0;
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
          <div className="title">
            <h2>Customer Feedback</h2>
          </div>

          <div className="cards" ref={containerRef}>
            <CustomerCard
              dp={Dp}
              name="Phoebe Toel"
              testimony=" Effectively meet the customer's needs..."
              rating={Star}
            />
            <CustomerCard
              dp={Dp2}
              name="Elvis"
              testimony=" OndisHub professionalism  they demonistrated was great disHub professionalism  they demonistrated was great disHub professionalism  they demonistrated was greatdisHub professionalism  they demonistrated was great  "
              rating={Star}
            />
            <CustomerCard
              dp={Dp3}
              name="Miss Owanda"
              testimony="Ondishub is the best company. It delivers on time"
              rating={Star}
            />

            <CustomerCard
              dp={Dp4}
              name="Victor W."
              testimony=" Easy to communicate with the team, with 24/7 support"
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
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Customer;


