import React from 'react'
import "../index.css"

const NavigationBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">[image]</a>
      <ul>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Timeline">Timeline</a>
        </li>
        <li>
          <a href="/Problems">Problems</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li id="nav-register-button">
          <a href="/Register">Register</a>
        </li>
      </ul> 
    </nav>
  )
}

export default NavigationBar