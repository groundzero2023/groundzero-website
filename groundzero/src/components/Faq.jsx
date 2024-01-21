import React from "react";
import { questions } from "../constants/index";
import { Accordion } from "./Accordion";
import MediaQuery from "react-responsive";


const Faq = () => {
  return (
    <div>
       <MediaQuery minWidth={769}>
    <div 
    id= "faq">
      <div
         >
      <div className="bg-darkBlue w-full overflow-hidden min-h-screen">
      <h1 className="font-poppins text-white text-center text-5xl mt-10 mb-20 font-light">FAQ</h1>
      <div   style={{
              marginInlineStart: 150,
              marginInlineEnd:150,
              justifyContent: 'center'
            }}>
        {questions.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
        </div>
      </div>
    </div>
    </div>
    </MediaQuery>


    <MediaQuery maxWidth={768}>
    <div>
      <div
         >
      <div className="bg-darkBlue w-full min-h-screen">
      <h1 className="font-poppins text-white text-center text-5xl mt-10 mb-20 font-light">FAQ</h1>

        {questions.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
        </div>
      </div>
</div>
    </MediaQuery>
    </div>
  );
};

export default Faq;