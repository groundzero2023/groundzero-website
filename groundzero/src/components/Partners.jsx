import React from "react";
import { partners } from "../constants";
import styles from "../style";
import DisplayIcon from "./DisplayIcon";

const Partners = () => (
  <section
    id="partners"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]" style= {{fontWeight: 'lighter'}}>
    <h2 className="text-5xl mb-4 z-10 relative text-white"> SPONSORS </h2>
    </div>
    <div className={`${styles.flexCenter} flex-wrap w-full`}></div>
    {partners.map((partner) => (
      <>
        <h2 className={`${styles.heading4} text-center`}>{partner.title}</h2>
        <div className="flex flex-wrap justify-center sm:justify-center w-full contactus-container relative z-[1]" >
          {partner.content.map((partner) => (
            <DisplayIcon key={partner.id} {...partner} />
          ))}
        </div>
      </>
    ))}
  </section>
);

export default Partners;
