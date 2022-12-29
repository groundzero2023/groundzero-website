import styles from "./style";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  NavigationBar,
  About,
  SignUp,
  Teaser,
  PastEvents,
  ReasonsToJoin,
  ProblemStatements,
  Workshops,
  Timeline,
  Partners,
  Mentors,
  ContactUs,
  Faq,
  Footer,
} from "./components";

/* Main entry point of the web application. */
const App = () => {
  const location = useLocation();

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
      <div className="bg-purple w-full overflow-hidden">
        <NavigationBar />

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <SignUp />
            <Teaser />
            <PastEvents />
            <ReasonsToJoin />
            <ProblemStatements />
            <Workshops />
            <Timeline />
            <Partners />
            <Mentors />
            <ContactUs />
            <Faq />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
