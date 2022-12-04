import React from "react";
import "./Graphics-style/Graphics-style.css";
import Image from "./assets/graphics.svg";
import Product from "../Product/Product";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";
import Line from "../Line/Line";
import Fade from "react-reveal/Slide";

const Graphics = () => {
  return (
    <div className="graphics">
      <div className="graphics-content">
        <div className="graphics-left">
          <img src={Image} alt="" />
        </div>
        <div className="graphics-right">
          <div>
            <h2>
              {" "}
              <Line />
              Graphics Design
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ligula donec quis erat ut.
              Nisl egestas.
            </p>
          </div>
          <div className="web-graphicss">
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
            <div className="left"></div>
          </div>
          
            <div className="tech-stack">
              <h2 style={{ color: "rgba(0, 0, 0, 0.7)" }}>Tech Stack</h2>
              <Fade cascade right>
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
