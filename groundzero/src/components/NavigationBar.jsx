import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const NavigationBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        [image]
      </a>
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/#problems">Problems</Link>
        </li>
        <li>
          <Link to="/#contacts">Contact</Link>
        </li>
        <li>
          <Link to="/#signup">
            <div id="nav-register-button">Register</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
