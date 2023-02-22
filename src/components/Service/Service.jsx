import React, { useState } from "react";
// import PropTypes from "prop-types";
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Service-style/Service-style.css";
import Image from "./assets/web-development.svg";
// import Product from "../Product/Product";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// import Stack from "../Stack/Stack";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";

const Service = () => {
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
    <div className="web" id="web">
      <div className="web-content">
        <div className="web-left">
          <h2>
            {" "}
            <Line />
            Web Development
          </h2>
          <Fade bottom>
            <img src={Image} alt="" />
          </Fade>
        </div>

        <div className="web-right">
          <div>
            <h2 className="web-title">Web Development</h2>
            <p>
              We create user-centric websites that prioritize user experience
              and are easy to navigate. Our expertise helps you elevate your
              online presence and reach your goals.
            </p>
          </div>
          <div className="web-services">
            <div className="right">
              <Fade bottom>
                {sites.map(({ icon, text, details, id }, i) => {
                  return (
                    <>
                      <div
                        style={{ visibility: hidden === i && 'hidden' }}
                        className="item"
                        onMouseEnter={() => {
                          setShowIcons(i);
                          toggleExpansion(i);
                          setHidden(i + 2)
                        }}
                        onMouseLeave={() => {
                          setShowIcons(null);
                          toggleExpansion(-1);
                          setHidden(-1)
                        }}
                        key={i}
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
                            <p className="dropdown">{details}</p>
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
            <h2 >Tech Stack</h2>
            {stackIcons.map((image) => {
              return (
                <Fade bottom cascade>
                  <img
                    src={image}
                    style={{ marginRight: "1rem" }}
                    alt="sdsdd"
                    className="stack-image"
                  />
                </Fade>
              );
            })}
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {};

Service.defaultProps = {};

export default Service;
