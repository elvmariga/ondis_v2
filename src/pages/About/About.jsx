import React, {useEffect} from "react";
import "./About-style/About-style.css";
import Whatwedo from "./Assets/whatwedo.png";
import Line from "../../components/Line/Line";
import Aboutus from "./Assets/hero2.jpg";
import webDev from "./Assets/web-development.svg";
import values from "./Assets/values.svg";
import graphic from "./Assets/graphics.svg";
import social from "./Assets/social-tree.svg";
import creative from "./Assets/creative.svg";
import choose from "./Assets/choose.jpg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Slide";
import customer from "./Assets/customer.svg";
import team from "./Assets/team.svg";
import support from "./Assets/support.svg";
import best from "./Assets/best.svg";
import price from "./Assets/price.svg";
import credibility from "./Assets/credibility.svg";
import Expert from "../../components/Expert/Expert";



const About = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="aboutpage" id="about">
      {/* <Navbar/> */}
      <div className="top">
        <img src={Aboutus} alt="About Us Landing " />
        <div className="aboutDetails">
          <p>
            {" "}
            ONDIS Hub is your go-to global digital agency for digital solutions
            that will help your business thrive. We are experts in crafting
            tailor-made web applications, graphics design, and social media
            management that blend creativity and technology to bring your vision
            to life. Our services have been designed to help increase your
            business credibility, expand your reach and skyrocket sales
            conversions online.
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
                <p>
                  <strong>ONDIS Hub</strong> crafts digital solutions for
                  thriving businesses. As a global web development and design
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
                  We believe in delivering personalized solutions that meet the
                  unique needs of our clients, leveraging the expertise and
                  innovation of our talented creative team, and always
                  maintaining the highest standards of product credibility.
                  These values are the foundation of our success and the key to
                  delivering exceptional results for our clients.
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

      </div>
     
    </div>
  );
};

export default About;
