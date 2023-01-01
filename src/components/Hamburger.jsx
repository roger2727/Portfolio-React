import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";

const Hamburger = () => {
  const [menuVisible, setMenuVisible] = useState(false); // define a state variable to track the visibility of the menu

  const toggleMenu = () => {
    // define a function to toggle the menu visibility
    setMenuVisible(!menuVisible); // set the menu visibility to the opposite of its current value
  };

  return (
    <>
      <button className="hamburger-button " onClick={toggleMenu}>
        {menuVisible ? (
          // render a "X" icon using Unicode characters if menuVisible is true
          <span className="close">&#215;</span>
        ) : (
          // render a hamburger icon using Unicode characters if menuVisible is false
          <span>&#9776;</span>
        )}
      </button>
      {/* render the nav menu if it is visible */}
      {menuVisible && (
        <nav className="ham-links">
          <Link className="ham-links" to="/">
            About Me
          </Link>

          <Link className="ham-links" to="/projects">
            Projects
          </Link>

          <Link className="ham-links" to="/contact">
            Contact
          </Link>
        </nav>
      )}
    </>
  );
};

export default Hamburger;
