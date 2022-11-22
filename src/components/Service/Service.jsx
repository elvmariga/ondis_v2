import React from "react";
import PropTypes from "prop-types";
import "./Service-style/Service-style.css";
import Image from "./assets/web-development.svg";
import Product from "../Product/Product";
import Stack from "../Stack/Stack";

const Service = () => (
  <div className="service">
    <div className="service-content">
      <div className="service-left">
        <img src={Image} alt="" />
      </div>

      <div className="service-right">
        <div>
          <h2>Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ligula donec quis erat ut.
            Nisl egestas.
          </p>
        </div>
        <div className="web-services">
          <div className="right">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="left">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="tech-stack">
          <Stack />
        </div>
      </div>
    </div>
  </div>
);

Service.propTypes = {};

Service.defaultProps = {};

export default Service;
