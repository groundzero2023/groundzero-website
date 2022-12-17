import React from "react";
import { mentors } from "../constants";

const MentorCard = ({mentor, setOpenCard, setCurrMentor}) => {
  return (
    <div className="flex place-items-center items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600/60 backdrop-blur">
      
      <div className={`${mentors.indexOf(mentor) == 0 ? 'hidden' : 'block'} absolute left-12 cursor-pointer mr-8 text-2xl px-4 py-2 bg-black rounded-full text-center grid place-items-center`}
      onClick={() => setCurrMentor(mentors[mentors.indexOf(mentor) - 1])}>
        &lt;
      </div>
      
      <div className="static grid w-[80%] h-[90%] bg-black">
        <div className="flex">
            {/* Pic */}
            <div className="w-[45%] bg-white text-black grid place-items-center object-fit">
                IMAGE
            </div>

            {/* Desc */}
            <div className="w-[55%] px-3 py-2">
                {/* Header */}
                <div className="flex h-[10%] w-full border-b border-white">
                    <div className="flex w-1/2 justify-start">
                        LOGO
                    </div>
                    <div className="flex w-1/2 justify-end">
                        <a href={mentor.personalLink} target="_blank">
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

      <div className={`${mentors.indexOf(mentor) == mentors.length - 1 ? 'hidden' : 'block'} absolute right-12 cursor-pointer ml-8 text-2xl px-4 py-2 bg-black rounded-full text-center grid place-items-center`}
      onClick={() => setCurrMentor(mentors[mentors.indexOf(mentor) + 1])}>
        &gt;
      </div>
      
      <div className="py-2 px-4 bg-black rounded-full absolute top-4 right-5 cursor-pointer" onClick={() => setOpenCard(false)}>
        X
      </div>
    </div>
  )
};

export default MentorCard;
