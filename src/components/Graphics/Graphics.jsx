import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import "./Graphics-style/Graphics-style.css";
import Image from "./assets/graphics.svg";
import Product from "../Product/Product";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";
import Fade from "react-reveal/Slide";

const Graphics = () => {
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
              Transform Your Online Image with Our Art-Tech Magic - Unleashing
              Visual Masterpieces that Wow, Communicate, and Reflect Your Unique
              Brand.
            </p>
          </div>
          <div className="web-graphicss">
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
