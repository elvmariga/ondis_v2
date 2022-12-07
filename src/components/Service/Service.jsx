import React, { useState } from "react";
// import PropTypes from "prop-types";
import {  FcExpand,FcCollapse } from 'react-icons/fc';
import "./Service-style/Service-style.css";
import Image from "./assets/web-development.svg";
// import Product from "../Product/Product";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import Stack from "../Stack/Stack";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";

const Service = () => {
  const [expanded, setExpanded] = useState({});
  const [currentExpanded, setCurrentExpanded] = useState(null);
  const [showIcons, setShowIcons] = useState(null);

  function toggleExpansion(index) {
    if (currentExpanded !== index) {
      setExpanded({ [index]: true });
      setCurrentExpanded(index);
    } else {
      setExpanded({ [index]: !expanded[index] });
    }
  }

  return (
    // ...
    <div className="web-services">
      <div className="right">
        <Zoom bottom cascade>
          {sites.map(({ icon, text, details, id }, i) => {
            return (
              <>
                <p
                  onClick={() => toggleExpansion(i)}
                  onMouseEnter={() => {
                    setShowIcons(i);
                  }}
                  onMouseLeave={() => {
                    setShowIcons(null);
                  }}
                  key={id}
                >
                  <img
                    src={icon}
                    style={{ marginRight: "1rem" }}
                    alt={details}
                  />
                  {text}
                  {showIcons === i && (
                    <div className="collapse">
                      {expanded[i] ? <FcCollapse /> : <FcExpand />}
                    </div>
                  )}
                </p>
                {expanded[i] && <p>{`${details}`}</p> }
              </>
            );
          })}
        </Zoom>
      </div>
    </div>
    // ...
  );
};
 
export default Service;
