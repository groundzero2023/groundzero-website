import React from "react";

const Eligibility = () => {
  return (
    <div className="p-20">
      <div
        id="eligibility"
        className="flex flex-col items-center justify-center min-h-screen bg-dark-blue text-white relative font-poppins font-thin"
      >
        <h2 className="text-5xl mb-4 z-10 relative">ELIGIBILITY CRITERIA</h2>
        <div className="before:absolute w-1/2 border-b-2 border-white transform -rotate-[135deg] translate-y-80 sm:translate-y-"></div>
        <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-orange  translate-y-28 translate-x-36 sm:translate-y-35">
          <p className="text-5xl font-poppins font-thin">TEAMS OF</p>
          <p className="text-5xl font-poppins font-thin">3-5</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-purple translate-y-56 -translate-x-36 sm:translate-y-70">
          <p className="text-5xl font-poppins font-thin">TERTIARY</p>
          <p className="text-5xl font-poppins font-thin">STUDENTS</p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
