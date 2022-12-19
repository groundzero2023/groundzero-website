import React from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { mentors } from "../constants";
import { useEffect } from "react";

const MentorCard = ({mentor, setOpenCard, setCurrMentor}) => {
  
  const openPrevCard = () => {
    setCurrMentor(mentors[mentors.indexOf(mentor) - 1]);
  }

  const openNextCard = () => {
    setCurrMentor(mentors[mentors.indexOf(mentor) + 1]);
  }

  const closeMentorCard = () => { 
    setOpenCard(false);

    // Disables Background Scrolling whilst the Mentor Card is open
    document.body.style.overflow = 'unset';
  }

  // handle what happens on key press
  const handleKeyPress = (event) => {
    if (event.key == 'ArrowRight' && mentors.indexOf(mentor) != mentors.length - 1) {
      openNextCard();
    }
    else if (event.key == "ArrowLeft" && mentors.indexOf(mentor) != 0) {
      openPrevCard();
    }
    else if (event.key == "Escape") {
      closeMentorCard();
    }
  };

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keyup', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="flex place-items-center items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600/60 backdrop-blur"
    onClick={() => closeMentorCard()}>
      
      <div className={`${mentors.indexOf(mentor) == 0 ? 'hidden' : 'block'} absolute left-14 cursor-pointer mr-8 text-2xl p-2 bg-black bg-opacity-50 rounded-full text-center grid place-items-center`}
      onClick={(e) => {
        e.stopPropagation(); 
        openPrevCard();}}
      >
        <FiChevronLeft/>
      </div>
      
      <div className="grid w-[80%] h-[90%] bg-black" onClick={(e) => { e.stopPropagation(); }}>
        <div className="flex">
            {/* Pic */}
            <div className="w-[45%] bg-white text-black grid place-items-center object-fit">
                IMAGE
            </div>

            {/* Desc */}
            <div className="w-[55%] px-3 py-2">
                {/* Header */}
                <div className="flex h-[10%] w-full border-b border-white items-center">
                    <div className="flex w-1/2 justify-start px-1">
                        LOGO
                    </div>
                    <div className="flex w-1/2 justify-end px-1">
                        <a href={mentor.personalLink} target="_blank" className="hover:scale-110 transition ease-in-out">
                            LINKEDIN
                        </a>
                    </div>
                </div>

                {/* Details */}
                <div className="h-[90%] pt-4">
                    <h2 className="text-4xl">
                        {mentor.title}
                    </h2>
                    <h2 className="text-2xl mt-3">
                        {mentor.subtitle}
                    </h2>
                    <h2 className="text-xl mt-2">
                        {mentor.info}
                    </h2>
                    <h2 className="text-sm mt-1 whitespace-pre-line space-y-2">
                        {mentor.description.map((desc) => (
                            <div>
                                {desc}
                            </div>
                        ))}
                    </h2>
                </div>
            </div>
        </div>
      </div>

      <div className={`${mentors.indexOf(mentor) == mentors.length - 1 ? 'hidden' : 'block'} absolute right-14 cursor-pointer ml-8 text-2xl p-2 bg-black bg-opacity-50 rounded-full text-center grid place-items-center`}
      onClick={(e) => {
        e.stopPropagation();
        openNextCard();}}
      >
        <FiChevronRight/>
      </div>
      
      <div className="p-2 text-3xl absolute top-4 right-5 cursor-pointer" onClick={() => closeMentorCard()}>
        <CgClose/>
      </div>

    </div>
  )
};

export default MentorCard;
