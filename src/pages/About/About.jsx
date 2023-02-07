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
            Unleashing digital potential for businesses with our expert tech
            touch. Transforming online presence, reaching new horizons,
            streamlining operations, and delivering unparalleled efficiency,
            cost-savings, and customer experiences. Embrace the power of online
            presence for your business success!
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
                  <strong>ONDIS Hub</strong> Crafting digital solutions for a
                  thriving business. As a global web development and design
                  agency, based in Kenya, we blend creativity with technology to
                  bring your vision to life. Our tailor-made web applications,
                  graphics, and user designs are engineered to boost your
                  business credibility and skyrocket sales conversions online.
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
                  Empowering businesses to reach new heights. Our mission is to
                  deliver top-notch online services support, through exceptional
                  web applications, graphics, and digital solutions. Helping
                  businesses boost sales, amplify online presence, and establish
                  product credibility - all with one goal in mind, your success.
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
                  Choosing us means choosing expertise, innovation, and results.
                  With a dedicated team of skilled professionals, a passion for
                  technology, and a track record of delivering exceptional
                  outcomes, we are the perfect partner to help you achieve your
                  digital goals. Let's join forces to bring your vision to life
                  and drive your business to new heights.
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
