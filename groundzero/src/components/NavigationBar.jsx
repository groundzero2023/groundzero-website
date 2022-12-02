import React from 'react'
import { Link } from 'react-scroll'
import "../index.css"

const NavigationBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">[image]</a>
      <ul>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-100} duration={500}>
            Timeline
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="problems" spy={true} smooth={true} offset={-100} duration={500}>
            Problems
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>
            Contact
          </Link>
        </li>
        <li id="nav-register-button">
          <Link activeClass="active" to="signup" spy={true} smooth={true} offset={-100} duration={500}>
            Register
          </Link>
        </li>
      </ul> 
    </nav>
  )
}

export default NavigationBar