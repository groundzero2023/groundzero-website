import React from "react";
import { groundzero } from "../assets";

const MentorCard = ({mentor, setOpenCard, setCurrMentor}) => {
  return (
    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-600/60 backdrop-blur">
      <div className="grid w-[80%] h-[90%] bg-black">
        <div className="flex">
            {/* Pic */}
            <div className="w-[45%] bg-white text-black">
                
            </div>

            {/* Desc */}
            <div className="w-[55%] px-3 py-2">
                {/* Header */}
                <div className="flex h-[10%] w-full">
                    <div className="flex w-1/2 justify-start">
                        LOGO
                    </div>
                    <a href={mentor.personalLink} target="_blank" className="flex w-1/2 justify-end">
                        LINKEDIN
                    </a>
                </div>

                {/* Details */}
                <div className="h-[90%]">
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
      <div className="py-2 px-4 bg-black rounded-full absolute top-4 right-5 cursor-pointer" onClick={() => setOpenCard(false)}>
        X
      </div>
    </div>
  )
};

export default MentorCard;
