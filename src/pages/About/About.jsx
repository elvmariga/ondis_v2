import React from "react";
import "./About-style/About-style.css";
import Whatwedo from "./Assets/whatwedo.png";
import Line from "../../components/Line/Line";
import Aboutus from "./Assets/hero2.jpg";
import webDev from "./Assets/web-development.svg";
import values from "./Assets/values.svg";
import graphic from "./Assets/graphics.svg";
import social from "./Assets/social-tree.svg";
import creative from "./Assets/creative.svg";
import choose from './Assets/choose.jpg'
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Slide";
import customer from './Assets/customer.svg';
import team from "./Assets/team.svg";
import support from "./Assets/support.svg";
import best from "./Assets/best.svg";
import price from "./Assets/price.svg";
import down from './Assets/down.svg';

import credibility from "./Assets/credibility.svg";
import Expert from "../../components/Expert/Expert";
// import {Navbar} from "../../components/Navbar/Navbar"

const About = () => {
  return (
    <div className="aboutpage" id="about">
      {/* <Navbar/> */}
      <div className="top">
        <img src={Aboutus} alt="About Us Landing " />
        <div className="aboutDetails">
          <p>
            {" "}
            We offer digital services typically with expertise in areas of
            digital technology and help businesses and organizations improve
            their online presence, reach new customers, and streamline their
            operations. Digital services can provide many benefits, including
            increased efficiency, cost savings, and improved customer
            experiences.
          </p>
          <Fade bottom cascade>
            <p>
              <Expert />
            </p>
          </Fade>
        </div>
      </div>
      <div class="aboutUs">
        <div class="cont">
          <div class="aboutDetails">
            <h1>
              <Line />
              What we do
            </h1>

            <div className="container">
              <div className="title">
                <Fade bottom cascade>
                  <div class="tinted-left">
                    <img src={Whatwedo} alt="What we do" />
                  </div>
                </Fade>
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
                <Fade bottom cascade>
                  <div className="icons">
                    <Fade bottom cascade>
                      <div className="icon-details">
                        <div>
                          <img src={webDev} className="icon" alt="" />
                        </div>
                        <div className="icon-content">
                          <p>Web Development</p>
                        </div>
                      </div>
                    </Fade>

                    <div className="icon-details">
                      <div>
                        <img src={graphic} className="icon" alt="" />
                      </div>
                      <div className="icon-content">
                        <p>Graphic Designing</p>
                      </div>
                    </div>
                    <div className="icon-details">
                      <div>
                        <img src={social} className="icon" alt="" />
                      </div>

                      <div className="icon-content">
                        <p>Social Media Branding</p>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div class="cont tinted">
          <div class="aboutDetails t-tails">
            <h1>
              {" "}
              <Line />
              Our Values
            </h1>
            <div className="container">
              <div className="title">
                <Slide bottom cascade>
                  <div class="tinted-left">
                    <img src={values} alt="What we do" />
                  </div>
                </Slide>
              </div>
             
                <div className="details">
                  <h1>Our Values</h1>
                  <p>
                    To provide Top Class Online Services Support through
                    offering web application, graphics and other digital
                    services to help business make more sales and increase
                    online presence also product credibility.
                  </p>
                   <Fade bottom cascade>
                  <div className="icons">
                    <div className="icon-details">
                      <div>
                        <img src={customer} className="icon" alt="" />
                      </div>
                      <div className="icon-content">
                        <p>Custom Tailored</p>
                      </div>
                    </div>

                    <div className="icon-details">
                      <div>
                        <img src={team} className="icon" alt="" />
                      </div>
                      <div className="icon-content">
                        <p>Creative Team</p>
                      </div>
                    </div>
                    <div className="icon-details">
                      <div>
                        <img src={credibility} className="icon" alt="" />
                      </div>

                      <div className="icon-content">
                        <p>Product Credibility</p>
                      </div>
                    </div>
                  </div>
                  </Fade>
                </div>
            
            </div>
          </div>
        </div>
        <div className="creative">
          <img src={creative} alt="" />
        </div>
        <div class="cont">
          <div class="aboutDetails">
            <h1>
              {" "}
              <Line />
              Why Choose Us
            </h1>
            <div className="container">
              <div className="title">
                <Fade bottom cascade>
                  <div class="tinted-left">
                    <img src={choose} alt="What we do" />
                  </div>
                </Fade>
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
 <Fade bottom cascade>
                <div className="icons">
                  <div className="icon-details">
                    <div>
                      <img src={support} className="icon" alt="" />
                    </div>
                    <div className="icon-content">
                      <p>24/7 Customer Support</p>
                    </div>
                  </div>

                  <div className="icon-details">
                    <div>
                      <img src={best} className="icon" alt="" />
                    </div>
                    <div className="icon-content">
                      <p>Creative Tailored Design</p>
                    </div>
                  </div>
                  <div className="icon-details">
                    <div>
                      <img src={price} className="icon" alt="" />
                    </div>

                    <div className="icon-content">
                      <p>Best Price Guarantee</p>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="cont tinted">
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
        </div> */}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
