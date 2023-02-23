import React from 'react';
// import serviceIcon from "../../assests/bookmark.svg";

const TechStack = (props) => {
  return (
    <div className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="stack-icons">
        <img src={props.stackIcon} alt="" />
        
      </div>
    </div>
  );
}

export default TechStack