import React from "react";
import PropTypes from "prop-types";
import "./Service-style/Service-style.css";
import Image from "./assets/web-development.svg";
import Product from "../Product/Product";
import Stack from "../Stack/Stack";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";

const Service = () => {
  return (
    <div className="web">
      <div className="web-content">
        <div className="web-left">
          <h2>Web Development</h2>
          <img src={Image} alt="" />
        </div>

        <div className="web-right">
          <div>
            <h2>Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ligula donec quis erat ut.
              Nisl egestas.
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
          <Button />
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {};

Service.defaultProps = {};

export default Service;
