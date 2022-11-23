import React from "react";
import CustomerCard from "../CustomerCard/CustomerCard";
import "./Customer-style/Customer-style.css";
import Dp from "./assets/dp.svg";
import Star from "./assets/stars.svg";

const Customer = (props) => {
  return (
    <div className="customer">
      <div className="customer-content">
        <div className="title">
          <h2>Customer Feedback</h2>
        </div>
        <div className="cards">
          <CustomerCard
            dp={Dp}
            name="Elvis"
            testimony="Ondishub is the best company. It delivers on time"
            rating={Star}
          />
          <CustomerCard
            dp={Dp}
            name="Elvis"
            testimony="Ondishub is the best company. It delivers on time"
            rating={Star}
          />
          <CustomerCard
            dp={Dp}
            name="Elvis"
            testimony="Ondishub is the best company. It delivers on time"
            rating={Star}
          />
        </div>
        <div className="cards">
          <CustomerCard
            dp={Dp}
            name="Elvis"
            testimony="Ondishub is the best company. It delivers on time"
            rating={Star}
          />
          <CustomerCard
            dp={Dp}
            name="Elvis"
            testimony="Ondishub is the best company. It delivers on time"
            rating={Star}
          />
        </div>
      </div>
    </div>
  );
};

export default Customer;
