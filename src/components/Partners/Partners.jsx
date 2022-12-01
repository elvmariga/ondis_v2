import React from "react";
import "./partners-style/partners-style.css";
import userIcon from "./assets/user-plus.svg";
import {partnerIcon} from "./assets/partnerIcons.js";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-content">
        <div className="partners-top">
          <h2>Partners</h2>
        </div>
        <div className="partners-bottom">
          {/* <div className="join">
            <img src={userIcon} alt="use plus icon" />
            <p>Join us</p>
          </div> */}

          {/* <div className="the-partners">
            {partnerIcon.map((image) => {
              return <img src={image} alt="partner" />;
            })}
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Partners;
