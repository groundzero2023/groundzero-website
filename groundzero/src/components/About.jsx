import React from 'react'
import "../index.css"
import styles from "../style";
import { groundzero } from '../assets';
import { aboutUs } from '../constants';

const About = () => {
  return (
    <div
      className={`${styles.paddingY} flex-col relative`}
      id="about"
    >
    <div className="grid place-items-center text-white xs:px-16 lg:px-40">
      <div className="heading">
        About Us
        <br />
        {aboutUs.map((aboutUs) => (
                <div className="font-light text-2xl pb-12 text-justify">
                  <p>
                    {aboutUs.content}
                  </p>
                  </div>
        ))}
      </div>
      <img src={groundzero} className="w-[300px] h-[150px]"></img>
      </div>
      </div>
  )
}

export default About