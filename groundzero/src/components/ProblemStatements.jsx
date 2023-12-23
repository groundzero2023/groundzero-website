import React from "react";
import styles from "../style";
import StatementCard from "./problem-statement-components/StatementCard";

const ProblemStatements = () => {
  return (
    <div className="problem-statements" id="problems">
      <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Focus Areas</h1>
        </div>
        <div className="flex flex-col items-center w-full px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mx-auto w-full">
            {generateCards()}
          </div>
        </div>
      </div>
    </div>
  );
};

const generateCards = () => {
  let content = [];
  for(let i = 0; i < 4; i++) {
    content.push(
      <div>
        <StatementCard id={i} type="problem"/>
      </div>
    );
  }
  return content;
}

export default ProblemStatements;
