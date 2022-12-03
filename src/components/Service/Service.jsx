import React from "react";
import PropTypes from "prop-types";
import "./Service-style/Service-style.css";
import Image from "./assets/web-development.svg";
import Product from "../Product/Product";
import Stack from "../Stack/Stack";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";

const Service = () => {
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
              {sites.map(({ icon, text }, i) => {
                return (
                  <p>
                    <img
                      src={icon}
                      style={{ marginRight: "1rem" }}
                      alt="sdsdd"
                    />

                    {text}
                  </p>
                );
              })}
            </div>
            <div className="left">
              <div className="right">
                {sites.map(({ icon, text }, i) => {
                  return (
                    <p>
                      <img
                        src={icon}
                        style={{ marginRight: "1rem" }}
                        alt="sdsdd"
                      />

                      {text}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="tech-stack">
            <h2 style={{ color: "rgba(0, 0, 0, 0.7)" }}>Tech Stack</h2>
            {stackIcons.map((image) => {
              return (
                <img src={image} style={{ marginRight: "1rem" }} alt="sdsdd" />
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
