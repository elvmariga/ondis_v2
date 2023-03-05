import React, { useState } from 'react';
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./ServiceStyle/Style.css"

const Services = ({ service, details, icon, id }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      key={id}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="services-card"
    >
      <img style={{ width: "32px", height: "32px" }} src={icon} alt="" />
      <p>
        {service} {expanded ? <FcCollapse /> : <FcExpand />}
      </p>

      {expanded && (
        <p className="service_card_details">
          <p>
            {" "}
            <strong> {service}</strong>
          </p>{" "}
          <br />
          {details}
        </p>
      )}
    </div>
  );
}

export default Services