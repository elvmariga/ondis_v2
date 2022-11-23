import React from "react";
import "./Graphics-style/Graphics-style.css";
import Image from "./assets/graphics.svg";
import Product from "../Product/Product";
import { stackIcons } from "./assets/stacks";
import Button from "../Button/Button";
import { sites } from "./assets/stacks";

const Graphics = () => {
  return (
    <div className="graphics">
      <div className="graphics-content">
        <div className="graphics-left">
          <div>
            <h2>Graphics Design</h2>
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
            <div className="left">
            
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
        <div className="graphics-right">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};



export default Graphics;
