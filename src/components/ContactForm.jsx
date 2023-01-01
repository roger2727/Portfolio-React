import React from "react";
import "./ContactForm.css";
import contact from "../images/contact.jpg";
import email from "../images/mail.png";
import phone from "../images/phone.png";
import gps from "../images/gps.png";
const ContactForm = () => {
  return (
    <div className="thebox">
      <img
        className="contact-pic"
        src={contact}
        alt="photo of mitchell roger"
      />
      <div className="group-contact">
        <h1 className="heading">CONTACT INFO</h1>
        <hr />
        <p className="contact-text">
          If you have any further inquiries or would like to discuss a potential
          project, please don't hesitate to contact me. My expertise lies in web
          development, and I'm happy to help with any projects or questions you
          may have. I prefer to be contacted via email, but am also available
          for phone calls during business hours.
        </p>
        <hr />
        <figure className="icon-box">
          <img className="contact-icons" src={email} alt="email icon" />
          <span className="contact">roger.mitch27@gmail.com</span>
        </figure>
        <figure className="icon-box">
          <img className="contact-icons" src={phone} alt="phone icon" />
          <span className="contact">0406801622</span>
        </figure>
        <figure className="icon-box">
          <img className="contact-icons" src={gps} alt="gps icon" />
          <a
            className="contact-links"
            href="https://www.google.com/maps/place/Lake+Macquarie/@-33.0694853,151.2944166,11z/data=!3m1!4b1!4m5!3m4!1s0x6b7323aefe72be6b:0xccb5fc49af980a25!8m2!3d-33.0857007!4d151.5720067"
            target="_blank"
            title="Location"
          >
            Lake Macquarie, NSW
          </a>
        </figure>
      </div>
    </div>
  );
};

export default ContactForm;
