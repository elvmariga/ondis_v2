import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import "./Socials-style/Socials-style.css";
import Image from "./assets/web-development.svg";
// import Product from "../Product/Product";
// import Stack from "../Stack/Stack";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";
import Fade from "react-reveal/Slide";

const Socials = () => {


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
    <div className="socials">
      <div className="socials-content">
        <div className="socials-left">
          <h2>
            <Line />
            Social Media Branding
          </h2>
          <Fade bottom>
            <img src={Image} alt="" />
          </Fade>
        </div>

        <div className="socials-right">
          <div>
            <h2 className="title">
              {" "}
              <Line /> Social Media Branding
            </h2>
            <p>
              We develop a social media branding strategy that aligns with your
              overall branding and marketing goals. Keeping in mind an effective way for businesses and
              organizations to connect with their customers, improve their
              online presence, and build a strong and positive reputation.
            </p>
          </div>
          <div className="social-services">
            <div className="right">
              <Fade bottom>
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
                          // style={{ marginRight: "1rem" }}
                          alt={details}
                        />
                        {text}
                        {showIcons === i && (
                          <div className="collapse">
                            {expanded[i] ? <FcCollapse /> : <FcExpand />}
                          </div>
                        )}
                      </p>
                      {expanded[i] && (
                        <p className="dropdown">{`${details}`}</p>
                      )}
                    </>
                  );
                })}
              </Fade>
            </div>
          </div>

          <div className="tech-stack">
            <h2 style={{ color: "rgba(0, 0, 0, 0.7)" }}>Tech Stack</h2>
            <Fade cascade bottom>
              {stackIcons.map((image) => {
                return (
                  <img
                    src={image}
                    style={{ marginRight: "1rem" }}
                    alt="sdsdd"
                  />
                );
              })}
            </Fade>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Socials;
