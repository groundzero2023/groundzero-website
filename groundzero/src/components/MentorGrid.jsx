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
        <div className={`bg-primary xs:px-16 ss:px-12 sm:px-16 lg:px-12`}>
            <div className={`${styles.boxWidth}`}>
                <div className="grid gap-8 ss:grid-cols-2 ss:gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-1">
                {mentors.map((mentor) => (
                <div className="cursor-pointer relative w-56 h-56 sm:w-68 sm:h-68 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-black grid place-items-center" 
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
        </div>
    );
}

export default MentorGrid