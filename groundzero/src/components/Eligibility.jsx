import React from "react";
import MediaQuery from "react-responsive";

const Eligibility = () => {
  
  return (
    <div>
      <MediaQuery minWidth={768}>
    <div className="p-20">
      <div
        id="eligibility"
        className="flex flex-col items-center justify-center  bg-dark-blue text-white relative font-poppins font-thin"
      >
        <h2 className="text-5xl mb-10 z-10 relative">ELIGIBILITY CRITERIA</h2>
        <div className="before:absolute w-1/2 border-b-2 border-white transform -rotate-[135deg] translate-y-80 sm:translate-y-"></div>
        <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-orange  translate-y-28 translate-x-36 sm:translate-y-35">
          <p className="text-5xl font-poppins font-thin">TEAMS OF</p>
          <p className="text-5xl font-poppins font-thin">3-5</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 mb-40 z-10 relative text-purple translate-y-56 -translate-x-36 sm:translate-y-70">
          <p className="text-5xl font-poppins font-thin">TERTIARY</p>
          <p className="text-5xl font-poppins font-thin">STUDENTS</p>
      
    
        </div>
      </div>
    </div>
  </MediaQuery>
    
  <MediaQuery maxWidth={768}>
  <div className="p-20">
      <div
        id="eligibility"
        className="flex flex-col items-center justify-center bg-dark-blue text-white relative font-poppins font-thin"
      >
        <h2 className="text-4xl mb-20 z-10 relative">ELIGIBILITY CRITERIA</h2>
        <div className="before:absolute w-3/4 border-b-2 border-white transform -rotate-[135deg] translate-y-20 sm:translate-y-35"></div>
        <div className="flex flex-col items-center justify-center mt-2 z-10 relative text-orange  translate-y-45 translate-x-32 sm:translate-y-35">
          <p className="text-2xl font-poppins font-thin">TEAMS OF</p>
          <p className="text-2xl font-poppins font-thin">3-5</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 z-10 relative text-purple translate-y-50 -translate-x-32 sm:translate-y-70">
          <p className="text-2xl font-poppins font-thin">TERTIARY</p>
          <p className="text-2xl font-poppins font-thin">STUDENTS</p>
          <br>
          </br>
          <br>
          </br>
          <br></br>
        </div>
      </div>
    </div>
  </MediaQuery>

</div>
  );
};

export default Eligibility;
