import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { groundzero } from "../assets";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src={groundzero}
            alt="NES Ground Zero 2023"
            width="80"
            height="80"
          />
          <div className="footer-text">NES Ground Zero 2023</div>
        </div>
        <div className="footer-buttons">
          <a href="https://linkedin.com/company/nesgroundzero">
            <AiFillLinkedin className="footer-button" />
          </a>
          <a href="https://instagram.com/nesgroundzero">
            <AiFillInstagram className="footer-button" />
          </a>
          <a href="mailto: nesgroundzero@gmail.com">
            <MdEmail className="footer-button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
