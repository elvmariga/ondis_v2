import React, { useRef } from "react";
import Mail from "./Assests/mail.svg";
import Phone from "./Assests/phone.svg";
import Location from "./Assests/location.svg";
import "./Contact-style/Contact-style.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Zoom from "react-reveal/Zoom";
// import Slide from "react-reveal/Slide";

const MailForm = () => {
  const form = useRef();
  // const formEmail= useRef();

 

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_nhz8rve",
        "template_jml97na",
        form.current,
        "3j5gJxnaqRpoOS_jT"
      )
      .then(
        (result) => {
          // show the user an sent success
          swal("Email Sent Successfully");
        },
        (error) => {
          // show the user an error
          swal("Email not sent, try again");
        }
      );
  };
  return (

      
        <div className="mail-form">
          {/* <Zoom cascade> */}
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
          {/* </Zoom> */}
        </div>
     
  );
};

export default MailForm;
