import React from 'react'
import styles from "../style";
import { groundzero, groundzeroHome, homepage } from '../assets';
import { DisplayButton } from "./index";

const HomePage = () => {
    return (
        <div
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
        >x  
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
                    <br /><br />
                    <div className="font-light text-3xl text-justify">
                    May 12-18th 2024
                    </div>
                    <img src={groundzeroHome} className="w-[450px] h-[150px] mt-10"></img>
                    <DisplayButton isExternal={true} link="https://nesgroundzero2023.eventbrite.com" text="Sign Up Now" arrow="right" />
                    <div className=" text-white font-bold text-4xl text-center">
                    loading the future, 
                    <br />
                    from the ground up.
                    <br />
                    <br/>
                    <div class="scroll-down"></div>
            </div>
            </div>
            </div></div>
    )
}

export default HomePage