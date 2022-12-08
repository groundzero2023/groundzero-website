import React from "react";
import { partners } from "../constants";
import styles from "../style";

const Partners = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Partners</h1>
    </div>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {partners.map((partner) => (
        <div
          key={partner.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={partner.logo}
            alt="partner"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Partners;
