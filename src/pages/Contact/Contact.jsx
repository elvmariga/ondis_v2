import React, { useRef } from "react";
import Mail from "./Assests/mail.svg";
import Phone from "./Assests/phone.svg";
import Location from "./Assests/location.svg";
import "./Contact-style/Contact-style.css";
import emailjs, {init} from "@emailjs/browser";
import swal from "sweetalert";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";

const Contact = () => {
  const form = useRef();
  const forms= useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault(); // prevents the page from reloading when you hit “Send”

  //   emailjs
  //     .sendForm(
  //       "service_ptk1q7r",
  //       "template_t4ephna",
  //       form.current,
  //       "9byfXctYyiSASCu0T"
  //     )
  //     .then(
  //       (result) => {
  //         // show the user an sent success
  //         swal("Email Sent Successfully");
  //       },
  //       (error) => {
  //         // show the user an error
  //         swal("Error in sending, try again");
  //       }
  //     );
  // };

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
          swal("Number Sent Succefull!");
        },
        (error) => {
          // show the user an error
          swal("Error!");
        }
      );
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_ptk1q7r",
        "template_t4ephna",
        form.current,
        "9byfXctYyiSASCu0T"
      )
      .then(
        (result) => {
          // show the user an sent success
          swal("Email Sent Successfully");
        },
        (error) => {
          // show the user an error
          swal("Error in sending, try again");
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
        <Zoom cascade>
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
          </Zoom>
        </div>
       
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
