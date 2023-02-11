import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import "./Graphics-style/Graphics-style.css";
import Image from "./assets/graphics.svg";
// import Product from "../Product/Product";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";
import Fade from "react-reveal/Slide";

const Graphics = () => {
    const [expanded, setExpanded] = useState({});
    const [currentExpanded, setCurrentExpanded] = useState(null);
    const [showIcons, setShowIcons] = useState(null);
    const [hidden, setHidden] = useState(-1);

    function toggleExpansion(index) {
      if (currentExpanded !== index) {
        setExpanded({ [index]: true });
        setCurrentExpanded(index);
      } else {
        setExpanded({ [index]: !expanded[index] });
      }
    }
  return (
    <div className="graphics" id="graphics">
      <div className="graphics-content">
        <Fade bottom>
          <div className="graphics-left">
            <img src={Image} alt="" />
          </div>
        </Fade>
        <div className="graphics-right">
          <div>
            <h2>
              {" "}
              <Line />
              Graphics Design
            </h2>
            <p>
              Transform your online image with our art-tech magic - unleashing
              visual masterpieces that wow, communicate, and reflect your unique
              brand.
            </p>
          </div>
          <div className="web-graphicss">
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
            <div className="left"></div>
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

export default Graphics;
