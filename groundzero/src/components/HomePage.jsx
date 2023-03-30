import React from 'react'
import styles from "../style";
import { groundzero, homepage } from '../assets';
import { DisplayButton } from "./index";

const HomePage = () => {
    return (
        <div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >
            <div style={{
                backgroundImage: `url(${homepage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
            }} >
                <div className="grid place-items-center text-white">
                    <br /><br />
                    <img src={groundzero} className="w-[300px] h-[150px] mt-10"></img>
                    <div className="font-bold text-4xl pb-12 text-center mt-10">
                        Ground Zero 2023
                        <br /><br />
                        The Largest Student-led Startathon in Singapore
                    </div>
                    <div className="font-light text-3xl text-justify">
                        8 - 13 May 2023
                    </div>
                        <DisplayButton isExternal={true} link="https://nesgroundzero2023.eventbrite.com" text="Sign Up Now" arrow="right" />
                </div>
            </div>
        </div>
    )
}

export default HomePage