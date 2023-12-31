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
              <Link to="/about" onClick={toggleDropdown}>About</Link>
            </li>
            <li>
              <Link to="/#problems" onClick={toggleDropdown}>Timeline</Link>
            </li>
            <li>
              <Link to="/#problems" onClick={toggleDropdown}>Prizes</Link>
            </li>
            <li>
              <Link to="/#eligibility" onClick={toggleDropdown}>Eligibility</Link>
            </li>
            <li>
              <Link to="/schedule" onClick={toggleDropdown}>Event Schedule</Link>
            </li>
            <li>
              <Link to="/benefits" onClick={toggleDropdown}>Benefits</Link>
            </li>
            <li>
              <Link to="/faq" onClick={toggleDropdown}>FAQ</Link>
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
        <nav className="nav" style={{ backgroundColor: "#00132A" , marginLeft: "-70px"  }}>
          <Link to="/">
            <img src={groundzero} className="md:mt-[10px] h-[40px] object-contain" />
          </Link>
          <ul>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/#prizes">Prizes</Link>
            </li>
            <li>
              <Link to="/#eligibility">Eligibility</Link>
            </li>
            <li>
              <Link to="/eventschedule">Event Schedule</Link>
            </li>
            <li>
              <Link to="/benefits">Benefits</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
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
        <nav className="nav" style={{ backgroundColor: "#00132A" , marginLeft: "-70px" }}>
          <Link to="/">
            <img src={groundzero} className="h-[30px] w-[40px] object-contain" />
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
