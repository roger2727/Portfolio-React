import React from "react";
import csss from "../images/css-3.png";
import flasko from "../images/flask.png";
import html from "../images/html.png";
import js from "../images/js.png";
import py from "../images/python.png";
import boot from "../images/boot.png";
import git from "../images/git.png";
import re from "../images/react.png";
import "./Skills.css";

const Skills = () => {
  const techLogos = [html, csss, flasko, js, py, boot, re, git];
  const titles = [
    "HTML",
    "CSS",
    "Flask",
    "JavaScript",
    "Python",
    "Bootstrap",
    "React",
    "Git",
  ];

  return (
    <div className="logo-animation">
      {techLogos.map((logo, index) => (
        <div className="group" key={index}>
          <img
            className="tech-logo fadeIn"
            src={logo}
            alt="tech logo"
            title={titles[index]}
            style={{ animationDelay: `${index * 500}ms` }}
            onMouseOver={(e) =>
              (e.currentTarget.nextSibling.style.display = "block")
            }
            onMouseOut={(e) =>
              (e.currentTarget.nextSibling.style.display = "none")
            }
          />
          <div className="tech-title" style={{ display: "none" }}>
            {titles[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
