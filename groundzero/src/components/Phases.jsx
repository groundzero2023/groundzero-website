import React from "react";
import groundZeroImage from "../assets/groundZeroPhases.png";
import phaseZeroImage from "../assets/phaseZero.png";
import beyondZeroImage from "../assets/beyondZero.png";

const Phase = ({ image, description }) => {
    return (
      <div className="flex flex-col items-center px-4 py-20 md:w-1/3">
        <img src={image} alt="Phase" className="mb-2 py-20" />
        <p className="text-gray-300 text-xl">{description}</p>
      </div>
    );
  };

  const Phases = () => {
    const phaseInfo = [
      {
        image: phaseZeroImage,
        description: "Gain insights and hone your skills in exclusive masterclasses led by industry experts, meet potential team members, and set the stage for success!",
      },
      {
        image: groundZeroImage,
        description: "Pitch your ideas for a share of the $10,000 prize pool. Forge valuable relationships and stand a chance to gain personal mentorships from experienced players in the field!",
      },
      {
        image: beyondZeroImage,
        description: "In collaboration with Atlas Incubators, receive support for your winning idea and make it into a reality!",
      },
    ];
  
    return (
        <div className="text-center py-12">
          <h2 className="text-white text-5xl mb-4 z-10 font-poppins font-thin">PHASES</h2>
          <h2 className="text-white text-1xl mb-4 z-10 font-poppins font-thin">This year we are expanding our trajectory beyond the conventional Starthaton, as we introduce the extension to the current Ground Zero; <br></br>Phase Zero and Beyond Zero. </h2>
                <div className="flex flex-wrap justify-center">
            {phaseInfo.map((phase, index) => (
              <Phase key={index} image={phase.image} description={phase.description} />
            ))}
          </div>
        </div>
    );
  };

export default Phases;