import React, { useState, useRef } from "react";
import "./Contact-style/Contact-style.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Zoom from "react-reveal/Zoom";

const MailForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_nhz8rve",
        "template_jml97na",
        form.current,
        "3j5gJxnaqRpoOS_jT"
      )
      .then(
        (result) => {
          setIsLoading(false);
          swal("Email Sent Successfully");
           form.current.reset();
          
        },
        (error) => {
          setIsLoading(false);
          swal("Email not sent, try again");
        }
      );
  };

  const handleBlur = () => {
    const inputs = form.current.querySelectorAll("input, textarea");
    let emptyInputs = false;

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        emptyInputs = true;
      }
    });

    if (emptyInputs) {
      // swal("Please fill out all fields");
    }
  };

  return (
    <div className="mail-form">
      <h2>Leave us a Message!</h2>
      <form action="" ref={form} onSubmit={sendEmail}>
        <Zoom cascade>
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
              id="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="row">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone"
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
          <button
            className="callme"
            type="submit"
            disabled={isLoading}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </Zoom>
      </form>
    </div>
  );
};

export default MailForm;
