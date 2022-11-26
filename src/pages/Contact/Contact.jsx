import React from 'react';
// import {Navbar } from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import Mail from './Assests/mail.svg';
import Phone from './Assests/phone.svg';
import Location from './Assests/location.svg';
import icons from './Assests/icons.svg'
import './Contact-style/Contact-style.css'


const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="contact">
        <div className="left">
          <div className="contact-top">
            <h1>Feel free to contact us</h1>
            <p>
              <a href="tel:+254719311036">+254 712 345 667</a>
            </p>
            <p>
              <a href="mailto:ondishub@gmail.com">ondishub@gmail</a>
            </p>
          </div>
          <div className="contact-icon">
            <p>
              <a href="mailto:ondishub@gmail.com">
                <img src={Mail} alt="" />
              </a>
            </p>
            <p>
              <a href="tel:+254719311036">
                <img src={Phone} alt="" />
              </a>
            </p>
            <p>
              <a href="http://">
                <img src={Location} alt="" />
              </a>
            </p>
          </div>
          <div className="social-icon">
            <img src={icons} alt="" />
          </div>
          <div className="call-form">
            <form action="">
              <p>
                <strong>Call me!</strong>
              </p>
              <input
                type="tel"
                name="Phone"
                id="callme"
                placeholder=" +254 714 xxx xxx"
              />
              <input className="callme" type="submit" value="Call me" />
              <p>*Leave Your Contact, Let us Call You</p>
            </form>
          </div>
        </div>

        <div className="mail-form">
          <h2>Leave us a Message!</h2>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email " placeholder="Email" />
            <input type="tel" name="phone" id="phone" placeholder="Phone " />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input className="callme" type="submit" value="Send" />
          </form>
        </div>
        <div className="mail-form-tablet">
          <h2>Leave us a Message!</h2>
          <form action="">
            <div className="row">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="email"
                name="email"
                id="email "
                placeholder="Email"
              />
            </div>
            <div className="row">
              <input type="tel" name="phone" id="phone" placeholder="Phone " />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input className="callme" type="submit" value="Send" />
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact