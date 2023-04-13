
import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import './style/style.css';
import { BsBuildingFillUp } from "react-icons/bs";
const Stats = () => {
  return (
    <div className="Stats">
      <div className="left_border">
        <i class="fa-solid fa-list-check fa-2xl"></i>
        <p className="statsNumbers">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <b>
                <span id="value1">
                  {" "}
                  {isVisible && (
                    <CountUp enableScrollSpy={true} start={0} end={30} />
                  )}
                </span>
                +
              </b>
            )}
          </VisibilitySensor>
        </p>
        <p className="statsTitle">Number of Projects</p>
      </div>
      <div className="left_border">
        <i class="fa-solid fa-users fa-2xl"></i>
        <p className="statsNumbers ">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <b>
                <span id="value1">
                  {" "}
                  {isVisible && (
                    <CountUp enableScrollSpy={true} start={20} end={500} />
                  )}
                </span>
                +
              </b>
            )}
          </VisibilitySensor>
        </p>

        <p className="statsTitle">Number of Clients</p>
      </div>
      <div>
        <i class="fa-brands fa-servicestack fa-2xl"></i>
        <p className="statsNumbers">
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <b>
                <span id="value1">
                  {" "}
                  {isVisible && (
                    <CountUp enableScrollSpy={true} start={0} end={15} />
                  )}
                </span>
                +
              </b>
            )}
          </VisibilitySensor>
        </p>
        <p className="statsTitle">Number of Services</p>
      </div>
    </div>
  );
}

export default Stats