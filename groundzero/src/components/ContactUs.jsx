import React from "react";
import { contacts } from "../constants";
import styles from "../style";
import ContactUsCard from "./ContactUsCard";

const ContactUs = () => (
  <section
    id="contacts"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Contact Us</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet. Qui nihil nesciunt et minus minus id
          veniam corporis et explicabo aperiam sed quia dolore aut quod soluta.
        </p>
      </div>
    </div>
  </section>
);

export default ContactUs;
