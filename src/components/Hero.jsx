import React from "react";
import "./HeroStyle.css";
import Skills from "./Skills";
import photo from "../images/me.png";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <main className="hero">
        <section className="text-box">
          <img className="photo" src={photo} alt="" />

          <article className="about-article">
            <h1 className="main-heading">ABOUT ME</h1>
            <hr />

            <p className="text">
              Hello, I am Mitchell Roger, a highly motivated and experienced
              junior web developer with a strong background in front-end and
              back-end development. I am skilled in a variety of programming
              languages, including HTML, CSS, JavaScript, and Python, and have
              recently graduated from the Coder Academy web development boot
              camp, where I gained valuable skills and knowledge in web
              development. I am dedicated to creating user-friendly websites
              that are both functional and aesthetically pleasing. My strong
              attention to detail and problem-solving skills enable me to
              consistently deliver high-quality work under tight deadlines. If
              you would like to learn more about my professional background,
              please visit my LinkedIn profile. Feel free to reach out to me
              through the contact information provided on my portfolio page.
              Thank you for considering my credentials.To download my resume
              <Link
                className="resume"
                to="/myResume.pdf"
                target="_blank"
                download
              >
                .click here
              </Link>
            </p>
            <h2 className="skills-heading">TECH SKILLS</h2>
            <hr />
            <Skills />
          </article>
        </section>
      </main>
    </div>
  );
};

export default Hero;
