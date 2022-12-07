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
  const [expanded, setExpanded] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

  function toggleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <div className="web">
      <div className="web-content">
        <div className="web-left">
          <h2>
            {" "}
            <Line />
            Web Development
          </h2>
          <img src={Image} alt="" />
        </div>

        <div className="web-right">
          <div>
            <h2 className="web-title">Web Development</h2>
            <p>
              Our responsive website let's your prospects enjoy a great
              exprerience on any screen size and orientation while interacting
              with your online office.
            </p>
          </div>
          <div className="web-services">
            <div className="right">
              <Zoom bottom cascade>
                {sites.map(({ icon, text, details }, i) => {
                  return (
                    <>
                      <p
                        onClick={toggleExpansion}
                        onMouseEnter={() => {
                          setShowIcons(true);
                        }}
                        onMouseLeave={() => {
                          setShowIcons(false);
                        }}
                      >
                        <img
                          src={icon}
                          // style={{ marginRight: "1rem" }}
                          alt={details}
                        />
                        {text}
                        {showIcons && (
                          <div className="collapse">
                            {" "}
                            {expanded ? <FcCollapse /> : <FcExpand />}
                          </div>
                        )}
                      </p>
                      {expanded && `${details}`}
                    </>
                  );
                })}
              </Zoom>
            </div>
            {/* <div className="left">
              <div className="right">
              <Zoom bottom cascade>
                {sites.map(({ icon, text }, i) => {
                  return (
                    <>
                      <p>
                        <img
                          src={icon}
                          // style={{ marginRight: "1rem" }}
                          alt="service icon"
                        />

                        <span onClick={toggleExpansion}>{text}</span>
                      </p>
                      <div className="collapse">
                        {expanded ? <FcExpand /> : <FcCollapse />}
                      </div>
                    </>
                  );
                })}
                </Zoom>
              </div>
            </div> */}
          </div>

          <div className="tech-stack">
            <h2 style={{ color: "rgba(0, 0, 0, 0.7)" }}>Tech Stack</h2>
            {stackIcons.map((image) => {
              return (
                <Fade right cascade>
                  <img
                    src={image}
                    style={{ marginRight: "1rem" }}
                    alt="sdsdd"
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
