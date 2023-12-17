import styles from "./style";
import React, { useEffect } from "react";
import { FaArrowRight } from 'react-icons/fa';

import { NavigationBar } from "./components";

/* Timeline page. */
const Timeline = () => {
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
        <NavigationBar />
        <div className="pt-20 pb-10 px-4">
          <h1 className="font-poppins text-white text-center text-3xl mt-10 font-light">
            TIMELINE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Timeline;
