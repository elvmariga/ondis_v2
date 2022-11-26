import React from "react";
import Footer from "../../components/Footer/Footer";
import "./About-style/About-style.css";
import Whatwedo from "./Assets/about.svg";
import Aboutus from "./Assets/hero.svg";
// import {Navbar} from "../../components/Navbar/Navbar"

const About = () => {
  return (
    <div className="aboutpage">
      {/* <Navbar/> */}
      <div className="top">
        <img src={Aboutus} alt="About Us Landing " />
      </div>
      <div class="aboutUs">
        <div class="cont">
          <div class="aboutDetails">
            <h1>What we do</h1>
            <div className="container">
              <div className="title">
                <div class="tinted-left">
                  <img src={Whatwedo} alt="What we do" />
                </div>
              </div>
              <div className="details">
                {/* <h1>What we do</h1> */}
                <p>
                  <strong>ONDIS Hub</strong> is a web Application development
                  and creative design agency based in Kenya with a team all over
                  the globe. Our web applications, graphics and user designs are
                  tailored to create business credibility and increase sales
                  conversion online
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cont tinted">
          <div class="aboutDetails t-tails">
            <h1>Our Values</h1>
            <div className="container">
              <div className="title">
                <div class="tinted-left">
                  <img src={Whatwedo} alt="What we do" />
                </div>
              </div>
              <div className="details">
                <h1>Our Values</h1>
                <p>
                  To provide Top Class Online Services Support through offering
                  web application, graphics and other digital services to help
                  business make more sales and increase online presence also
                  product credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="cont">
          <div class="aboutDetails">
            <h1>What we do</h1>
            <div className="container">
              <div className="title">
                <div class="tinted-left">
                  <img src={Whatwedo} alt="What we do" />
                </div>
              </div>
              <div className="details">
                {/* <h1>What we do</h1> */}
                <p>
                  <strong>ONDIS Hub</strong> is a web Application development
                  and creative design agency based in Kenya with a team all over
                  the globe. Our web applications, graphics and user designs are
                  tailored to create business credibility and increase sales
                  conversion online
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="cont tinted">
          <div class="aboutDetails t-tails">
            <h1>Our Values</h1>
            <div className="container">
              <div className="title">
                <div class="tinted-left">
                  <img src={Whatwedo} alt="What we do" />
                </div>
              </div>
              <div className="details">
                <h1>Our Values</h1>
                <p>
                  To provide Top Class Online Services Support through offering
                  web application, graphics and other digital services to help
                  business make more sales and increase online presence also
                  product credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
