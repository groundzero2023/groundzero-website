import React, { useState } from 'react';
import MentorCard from './MentorCard';
import { mentors } from '../constants';

const Mentors = () => {
  const [currMentor, setCurrMentor] = useState({});
  const [openCard, setOpenCard] = useState(false);

  return (
    <div className="grid place-items-center text-white xs:px-16 lg:px-10">
      <div className="heading">
        Mentors
      </div>
      <div className="grid grid-cols-4">
        {mentors.map((mentor) => (
          <div className={`cursor-pointer w-64 h-64 bg-black border border-gray-300 grid place-items-center ${openCard ? 'overflow-y-auto' : 'overflow-y-hidden'}`} 
          onClick={() => {
            setOpenCard(true);
            setCurrMentor(mentor);
          }}
          >
            {mentor.title}
          </div>
        ))}
      </div>
      {
        openCard && <MentorCard mentor={currMentor} setOpenCard={setOpenCard} setCurrMentor={setCurrMentor}/>
      }
    </div>
  )
};

export default Mentors;
