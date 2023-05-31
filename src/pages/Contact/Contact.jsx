import React, { useRef, useState, useEffect } from "react";
import Mail from "./Assests/mail.svg";
import Phone from "./Assests/phone.svg";
import Location from "./Assests/location.svg";
import "./Contact-style/Contact-style.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
// import Zoom from "react-reveal/Zoom";
import MailForm from "./MailForm";
// import Slide from "react-reveal/Slide";

const Contact = () => {
  const form = useRef();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // regular expression to match valid phone numbers
    const phoneRegex = /^\+?\d{1,3}[- ]?\d{3}[- ]?\d{7}$/;

    // get the phone number entered by the user
    const phoneNumber = e.target.Phone.value.trim();

    // check if the phone number matches the regex
    if (!phoneRegex.test(phoneNumber)) {
      swal("Please enter a valid phone number.");
      return;
    }

    setIsLoading(true);

    // send the phone number using emailjs
    emailjs
      .sendForm(
        "service_nhz8rve",
        "template_hyjr4ke",
        form.current,
        "3j5gJxnaqRpoOS_jT"
      )
      .then(() => {
        swal("Number sent successfully! We will call you shortly.");
        setIsLoading(false);
        setPhoneNumber("");
      })
      .catch((error) => {
        swal("Oops! Something went wrong. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="contact" id="contact">
        <div className="left">
          <div className="contact-top">
            <h1>Feel free to contact us</h1>
            <p>
              <a href="tel:+254700526125">+254 700 526 125</a>
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
              <a href="tel:+254700526125">
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
                href="https://www.linkedin.com/company/ondishub/"
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
              <form action="" ref={form} onSubmit={handleSubmit}>
                <input
                  type="tel"
                  name="Phone"
                  id="callme"
                  placeholder="+254714xxxxxx"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <button className="callme" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Call me"}
                </button>
                <p>*Leave Your Contact, Let us Call You</p>
              </form>
            </div>
          </div>
        </div>

        <MailForm />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
