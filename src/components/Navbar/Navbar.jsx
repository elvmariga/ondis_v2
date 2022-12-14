import React,{useState} from 'react';
import '../Navbar/navbar-style/navbar-style.css';
import logo from "./assests/ondis-logo.svg";
import mobileLogo from './assests/moboileLogo.svg';
import Button from '../Button/Button';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";


export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const [showModal, setShowModal] = React.useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };
  
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img className="large-logo" src={logo} alt="OndisHub Logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <NavLink
                smooth="true"
                spy="true"
                activeclassname="active"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth="true"
                spy="true"
                activeclassname="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth="true"
                spy="true"
                activeclassname="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                smooth="true"
                spy="true"
                activeclassname="active"
                to="/contact"
              >
                <Button />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>


      <div className="mobile-menu" style={{ marginRight: "0.5rem" }}>
        <div className="mobile-nav">
          <div className="logo">
            <img className="mobile-logo" src={mobileLogo} alt="OndisHub Logo" />
          </div>
          <div className="humberger" onClick={() => handleClick()}>
            {showLinks ? <ImCross /> : <GiHamburgerMenu />}
          </div>
        </div>


        <div className="mobile-container">
          {showLinks && (
            <div className="mobilelinks">
              <ul
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <li
                  className="link"
                  onClick={() => handleClick()}
                  style={{
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    // fontFamily: "Poppins",
                  }}
                >
                  <NavLink
                    smooth="true"
                    spy="true"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      // fontFamily: "Poppins",
                      color: "#141138 ",
                    }}
                    activeclassname="active"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <div className="line"></div>
                <li className="link" onClick={() => handleClick()}>
                  <NavLink
                    smooth="true"
                    spy="true"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      // fontFamily: "Poppins"
                      color: "#141138 ",
                    }}
                    activeClassName="active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <div className="line"></div>
                <li className="link" onClick={() => handleClick()}>
                  <NavLink
                    smooth="true"
                    spy="true"
                    style={{
                      textDecoration: "none",
                      fontSize: "1.3rem",
                      // fontFamily: "Poppins",
                      color: "#141138 ",
                    }}
                    activeClassName="active"
                    to="/contact"
                  >
                    {" "}
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );};

