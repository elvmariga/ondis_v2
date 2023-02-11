import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
// import Zoom from "react-reveal/Zoom";
import "./Socials-style/Socials-style.css";
import Image from "./assets/web-development.svg";
// import Product from "../Product/Product";
// import Stack from "../Stack/Stack";
import Zoom from "react-reveal/Zoom";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";
import Fade from "react-reveal/Slide";

const Socials = () => {


    const [expanded, setExpanded] = useState({});
  const [currentExpanded, setCurrentExpanded] = useState(null);
  const [showIcons, setShowIcons] = useState(null);
  const [hidden, setHidden] = useState(-1)

  function toggleExpansion(index) {
    if (currentExpanded !== index) {
      setExpanded({ [index]: true });
      setCurrentExpanded(index);
    } else {
      setExpanded({ [index]: !expanded[index] });
    }
  }
   
  return (
    <div className="socials" id="socialMedia">
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
            <h2 className="social-title">
              {" "}
              <Line />
              Social Media Branding
            </h2>
            <p>
              We specialize in crafting and promoting a brand's identity,
              messages, and content on various social media platforms with the
              purpose of increasing brand recognition, improving customer
              experience, and creating a positive perception of the brand.
            </p>
          </div>
          <div className="social-services">
            <div className="right">
              <Fade bottom>
                {sites.map(({ icon, text, details, id }, i) => {
                  return (
                    <>
                      <div
                        style={{ visibility: hidden === i && "hidden" }}
                        className="item"
                        onMouseEnter={() => {
                          setShowIcons(i);
                          toggleExpansion(i);
                          setHidden(i + 2);
                        }}
                        onMouseLeave={() => {
                          setShowIcons(null);
                          toggleExpansion(-1);
                          setHidden(-1);
                        }}
                        key={id}
                      >
                        <img
                          src={icon}
                          // style={{ marginRight: "1rem" }}
                          alt={details}
                          className="icon"
                        />
                        {text}{" "}
                        {!expanded[i] && (
                          <div className="collapse">
                            <FcExpand />
                          </div>
                        )}
                        {showIcons === i && (
                          <div className="collapse">
                            {expanded[i] && <FcCollapse />}
                          </div>
                        )}
                        <Zoom>
                          {expanded[i] && (
                            <p className="dropdown">{`${details}`}</p>
                          )}
                        </Zoom>
                      </div>
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
