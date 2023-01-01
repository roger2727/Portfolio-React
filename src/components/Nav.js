import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <div>
      <header class="header-box">
        <nav class="nav-links">
          <Link
            to="/"
            onClick={() => setActiveLink("/")}
            className={activeLink === "/" ? "active" : "links"}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            onClick={() => setActiveLink("/projects")}
            className={activeLink === "/projects" ? "active" : "links"}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setActiveLink("/contact")}
            className={activeLink === "/contact" ? "active" : "links"}
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
