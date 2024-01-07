import React from "react";
import styles from "../style";
import StatementCard from "./problem-statement-components/StatementCard";
import {blob} from '../assets';

const ProblemStatements = () => {
  return (
    <div className="problem-statements" id="problems" style= {{backgroundImage: `url(${blob})`, backgroundPosition: 'calc(100% - 400px) 100px', backgroundSize: '20%', backgroundRepeat:'no-repeat'}}>
      <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className="text-white relative font-poppins font-thin w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-4 relative z-[1]">
          <h2 className="text-5xl mb-20 z-10 relative">FOCUS AREAS</h2>
        </div>
        <div className="flex flex-col items-center w-full px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto w-full">
            {generateCards()}
          </div>
          <br>
          </br>
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
