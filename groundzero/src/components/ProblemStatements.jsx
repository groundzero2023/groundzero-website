import React from "react";
import styles from "../style";
import StatementCard from "./problem-statement-components/StatementCard";
import { blob } from "../assets";

const ProblemStatements = () => {
  const [data, setData] = useState({});
  
  return (
    <div className="problem-statements" id="problems">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="text-white relative font-poppins font-thin w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-4 relative z-[1]">
          <h2 className="text-5xl mb-20 z-10 relative">FOCUS AREAS</h2>
          <h2 className="text-xl mb-18 z-10 relative">
            Choose your world to load your future in! Participants can develop
            ideas within the following 4 areas of focus:
          </h2>
        </div>
        <div className="flex flex-col items-center w-full px-12 group">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full">
            {generateCards()}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full text-center mt-4">
            <div className="text-white">
              <p>Problem Statements:</p>
              <p>
                1. How can generative AI be integrated into e-commerce platforms
                to dynamically display the environmental impact of products
                based on materials, production, and shipping?
              </p>
              <p>
                2. How can generative AI be used to create a more inclusive
                online shopping experience for customers with vision impairments
                or other challenges?
              </p>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

const generateCards = () => {
  let content = [];
  for (let i = 0; i < 4; i++) {
    content.push(
      <div>
        <StatementCard id={i} type="problem" />
      </div>
    );
  }
  return content;
};

export default ProblemStatements;
