import React from "react";
import "./FooterStyle.css";

import github from "../images/icons8-github-90.png";
import linkedin from "../images/icons8-linkedin-100.png";
import face from "../images/icons8-facebook-100.png";
import insta from "../images/icons8-instagram-100.png";
const Footer = () => {
  return (
    <div className="footer">
      <p>Created by Mitchell Roger. &copy; 2022</p>
      <figure className="social-box-footer">
        <a href="https://github.com/roger2727?tab=repositories">
          <img className="social-icons-footer" alt="github icon" src={github} />
        </a>

        <a href="https://www.linkedin.com/in/mitchell-roger-31b551248/">
          <img
            className="social-icons-footer"
            alt="linkedin icon"
            src={linkedin}
          />
        </a>
        <a href="https://www.facebook.com/mitchell.roger.3">
          <img className="social-icons-footer" alt="facbook icon" src={face} />
        </a>

        <a href="https://www.instagram.com/m_roger27/">
          <img
            className="social-icons-footer"
            alt="instagram icon"
            src={insta}
          />
        </a>
      </figure>
    </div>
  );
};

export default Footer;
