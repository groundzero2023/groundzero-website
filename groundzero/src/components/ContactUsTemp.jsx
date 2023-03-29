import React from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import styles from "../style";

const ContactUsTemp = () => {
  return (
    <section id="contacts">
      <div className="grid place-items-center">
        <div className="text-white xs:px-16 lg:px-10 w-[80%]">
          <div className="heading">Contact Us</div>
          <div>
            <a href="https://www.linkedin.com/company/nesgroundzero/">
              <div className="contact-button">
                <AiFillLinkedin className="contact-button-icon" />
                <div className="font-Poppins font-semibold xs:text-[24px] text-[16px] mt-1.5 text-white w-full">
                  linkedin.com/company/nesgroundzero
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/nesgroundzero">
              <div className="contact-button">
                <AiFillInstagram className="contact-button-icon" />
                <div className="font-Poppins font-semibold xs:text-[24px] text-[16px] mt-1.5 text-white w-full">
                  @nesgroundzero
                </div>
              </div>
            </a>
            <a href="mailto: nesgroundzero@gmail.com">
              <div className="contact-button">
                <MdEmail className="contact-button-icon" />
                <div className="font-Poppins font-semibold xs:text-[24px] text-[16px] mt-1.5 text-white w-full">
                  nesgroundzero@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsTemp;
