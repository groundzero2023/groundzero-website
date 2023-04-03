import styles from "../style";
import React, { useState } from 'react';
import MentorCard from './MentorCard';
import { mentors } from '../constants';

const MentorGrid = () => {
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
        <div className={`bg-primary xs:px-16 ss:px-8 sm:px-2 md:px-4 lg:px-8`}>
            <div className={`${styles.boxWidth}`}>
                <div className="grid gap-8 ss:grid-cols-2 ss:gap-4 sm:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-1">
                {mentors.map((mentor) => (
                <div className="cursor-pointer relative w-80 h-80 ss:w-60 ss:h-60 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-60 lg:h-60 bg-black grid place-items-center" 
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
                    <div className="w-full h-full opacity-0 hover:opacity-100 z-10 transition ease-in-out text-white">
                        <div className="bg-gradient-to-t w-full from-black absolute text-left bottom-0 left-0 p-4 pt-[10.5rem] object-fit">
                            <h2 className="text-xl font-bold">
                                {mentor.title}
                            </h2>
                            <h2 className="font-semibold inline">
                                {mentor.subtitle.join(", ")}
                            </h2>
                            <h2 className="text-sm font-light">
                                {mentor.info.join(", ")}
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
        </div>
    );
}

export default MentorGrid