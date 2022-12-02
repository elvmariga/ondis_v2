import React, { useRef } from "react";
// import {Navbar } from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import Mail from "./Assests/mail.svg";
import Phone from "./Assests/phone.svg";
import Location from "./Assests/location.svg";
import icons from "./Assests/icons.svg";
import "./Contact-style/Contact-style.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_ptk1q7r",
        "template_t4ephna ",
        form.current,
        "9byfXctYyiSASCu0T"
      )
      .then(
        (result) => {
          // show the user an sent success
          alert("Email Sent Successfully");
        },
        (error) => {
          // show the user an error
          alert("Error in sending, try again");
        }
      );
  };

  const phoneNumber = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_ptk1q7r",
        "template_hynzgve",
        form.current,
        "9byfXctYyiSASCu0T"
      )
      .then(
        (result) => {
          // show the user an sent success
          alert("Email Sent Successfully");
        },
        (error) => {
          // show the user an error
          alert("Error in sending, try again");
        }
      );
  };
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
          <div>
            <p className="follow">Follow us</p>
            <div className="social-icon">
              <a href="">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin-in fa-xl"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-whatsapp fa-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <p className="follow">Call me!</p>
            <div className="call-form">
              <form action="" ref={form} onSubmit={phoneNumber}>
                <input
                  type="tel"
                  name="Phone"
                  id="callme"
                  placeholder=" +254714xxxxxx"
                />
                <input className="callme" type="submit" value="Call me" />
                <p>*Leave Your Contact, Let us Call You</p>
              </form>
            </div>
          </div>
        </div>

        <div className="mail-form">
          <h2>Leave us a Message!</h2>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="row">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required="required"
              />
              <input
                type="email"
                name="email"
                id="email "
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="row">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone "
                required="required"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required="required"
              />
            </div>

            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required="required"
            ></textarea>

            <input className="callme" type="submit" value="Send" />
          </form>
        </div>
        {/* <div className="mail-form-tablet">
          <h2>Leave us a Message!</h2>
          <form action="" ref={form} onSubmit={sendEmail}>
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
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <input className="callme" type="submit" value="Send" />
          </form>
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
