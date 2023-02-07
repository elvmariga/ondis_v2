import React, { useRef } from "react";
import Mail from "./Assests/mail.svg";
import Phone from "./Assests/phone.svg";
import Location from "./Assests/location.svg";
import "./Contact-style/Contact-style.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Zoom from "react-reveal/Zoom";
import MailForm from "./MailForm";
// import Slide from "react-reveal/Slide";

const Contact = () => {
  const form = useRef();
  // const formEmail= useRef();

 
  const phoneNumber = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_dwnim4l",
        "template_hyjr4ke",
        form.current,
        "oKzu40EY3P8xKvkWZ"
      )
      .then(
        (result) => {
          // show the user an sent success
          swal("Number Sent Succefull!, we will call you in a few");
        },
        (error) => {
          // show the user an error
          swal("Number not sent, try again");
        }
      );
  };

 
  return (
    <div>
      {/* <Navbar /> */}
      <div className="contact" id="contact">
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
              <a
                href="https://www.facebook.com/profile.php?id=100068420811214"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook fa"></i>
              </a>
              <a
                href="http://twitter.com/ondishub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter fa"></i>
              </a>
              <a
                href="http://instagram.com/ondishub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram fa"></i>
              </a>
              <a
                href="http://linkedin.com/in/ondishub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in fa"></i>
              </a>
              <a
                href="https://wa.me/254700526125?text=I%20am%20interested%20in%20your%20your%20 services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp fa" target="_blank"></i>
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

        <MailForm/>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
