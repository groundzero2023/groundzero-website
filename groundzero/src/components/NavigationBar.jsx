import React from "react";
import { Link } from "react-router-dom";
import { groundzero } from "../assets/index";
import "../index.css";

const NavigationBar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={groundzero} className="h-[40px] object-contain" />
      </Link>
      <ul>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#problems">Focus Areas</Link>
        </li>
        <li>
          <Link to="/#timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/#mentors">Mentors</Link>
        </li>
        <li>
          <Link to="/#contacts">Contact</Link>
        </li>
        <li>
          <a href="https://nesgroundzero2023.eventbrite.com" target="_blank">
            <div id="nav-register-button">Register</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
