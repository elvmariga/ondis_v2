import React, { useState } from 'react';
import { FcExpand, FcCollapse } from "react-icons/fc";

const Services = ({ service, category, icon, id }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      key={id}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="services-card"
    >
      <img style={{ width: "32px", height: "32px" }} src={icon} alt="" />
      <p>{service} {expanded ? <FcCollapse /> : <FcExpand />}</p>

      {expanded && <p
        style={{ position: "absolute", zIndex: "5", backgroundColor:"white", }}
      >
        {category}
      </p>}

    </div>
  );
}

export default Services