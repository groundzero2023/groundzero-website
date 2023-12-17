import React from "react";

const Eligibility = () => {
  return (
    <div id="eligibility" className="flex flex-col items-center justify-center h-screen bg-dark-blue text-white relative font-poppins font-thin">
      {/* Increase the font size to match the design */}
      <h2 className="text-6xl mb-4 z-10 relative">ELIGIBILITY CRITERIA</h2>
      {/* Adjust the line angle and position */}
      <div className="before:absolute w-1/2 border-b-2 border-white transform -rotate-[135deg] translate-y-80"></div>
      {/* Center the text and adjust font size */}
      <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-orange  translate-y-28 translate-x-36 ">
        <p className="text-6xl font-poppins font-thin">TEAMS OF</p>
        <p className="text-6xl font-poppins font-thin">3-5</p>
      </div>
      {/* Center the text and adjust font size for TERTIARY STUDENTS */}
      <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-purple translate-y-56 -translate-x-36">
        <p className="text-6xl font-poppins font-thin">TERTIARY</p>
        <p className="text-6xl font-poppins font-thin">STUDENTS</p>
      </div>
    </div>
  );
};

export default Eligibility;