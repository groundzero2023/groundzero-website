import React, { useState } from 'react';
import MentorCard from './MentorCard';
import { mentors } from '../constants';

const Mentors = () => {
  const [currMentor, setCurrMentor] = useState({});
  const [openCard, setOpenCard] = useState(false);

  const openMentorCard = () => { 
    setOpenCard(true);

    // Disables Background Scrolling whilst the Mentor Card is open
    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
  }

  return (
    <div className="grid place-items-center text-white xs:px-16 lg:px-10">
      <div className="heading">
        Mentors
      </div>
      <div className="grid grid-cols-4 gap-1">
        {mentors.map((mentor) => (
          <div className="cursor-pointer relative w-64 h-64 bg-black grid place-items-center" 
          onClick={() => {
            openMentorCard();
            setCurrMentor(mentor);
          }}>
            {/* Speaker Img */}
            <img 
            // src={mentor.imgsrc}
            src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg" 
            className="object-fit">
            </img>

            {/* Desc */}
            <div className="w-full h-full opacity-0 hover:opacity-100 z-10 transition ease-in-out">
              <div className="bg-gradient-to-t w-full from-black absolute text-left bottom-0 left-0 p-4 pt-[10.5rem] object-fit">
                <h2 className="text-xl font-bold">
                  {mentor.title}
                </h2>
                <h2 className="font-semibold">
                  {mentor.subtitle}
                </h2>
                <h2 className="text-sm font-light">
                  {mentor.info}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        openCard && 
        <MentorCard mentor={currMentor} setOpenCard={setOpenCard} setCurrMentor={setCurrMentor}/>
      }
    </div>
  )
};

export default Mentors;
