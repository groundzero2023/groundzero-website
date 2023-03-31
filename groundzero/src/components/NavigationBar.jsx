import React, { useState } from "react";
import { Link } from "react-router-dom";
import { groundzero } from "../assets/index";
import "../index.css";
import MediaQuery from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

  const Dropdown = () => {
    return (
      <div className="grid place-items-center">
        <div
          className={isOpenDropdown ? "dropdown_menu_open" : "dropdown_menu"}
        >
          <ul>
            <li>
              <Link to="/#about" onClick={toggleDropdown}>About</Link>
            </li>
            <li>
              <Link to="/#problems" onClick={toggleDropdown}>Focus Areas</Link>
            </li>
            <li>
              <Link to="/#timeline" onClick={toggleDropdown}>Timeline</Link>
            </li>
            <li>
              <Link to="/#mentors" onClick={toggleDropdown}>Mentors</Link>
            </li>
            <li>
              <Link to="/#contacts" onClick={toggleDropdown}>Contact</Link>
            </li>
            <li>
              <a
                href="https://nesgroundzero2023.eventbrite.com"
                target="_blank"
              >
                <div id="nav-register-button" onClick={toggleDropdown}>Register</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MediaQuery minWidth={768}>
        <nav className="nav">
          <Link to="/">
            <img src={groundzero} className="md:mt-[10px] h-[40px] object-contain" />
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
              <a
                href="https://nesgroundzero2023.eventbrite.com"
                target="_blank"
              >
                <div id="nav-register-button">Register</div>
              </a>
            </li>
          </ul>
        </nav>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <nav className="nav">
          <Link to="/">
            <img src={groundzero} className="h-[30px] object-contain" />
          </Link>
          <button>
            {!isOpenDropdown ? (
              <FaBars onClick={toggleDropdown} style={{fontSize:"23", opacity:"60%"}} />
            ) : (
              <FaTimes onClick={toggleDropdown} style={{fontSize:"23", opacity:"60%"}} />
            )}
          </button>
        </nav>

        {isOpenDropdown ? <Dropdown /> : null}
      </MediaQuery>
    </div>
  );
};

export default NavigationBar;
