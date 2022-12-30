import React, { useEffect, useState, useRef } from "react";
import styles from "../style";
import { statementReleaseDate } from "../constants";
import { DisplayButton } from "./index";

const msInSecond = 1000;
const secondInMinute = msInSecond * 60;
const minuteInHour = secondInMinute * 60;
const hourInDay = minuteInHour * 24;

const ProblemStatementCountdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(statementReleaseDate).getTime();

    interval = setInterval(() => {
      const curr = new Date().getTime();
      const difference = countdownDate - curr;

      const days = Math.floor(difference / hourInDay);
      const hours = Math.floor((difference % hourInDay) / minuteInHour);
      const minutes = Math.floor((difference % minuteInHour) / secondInMinute);
      const seconds = Math.floor((difference % secondInMinute) / msInSecond);

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        // update states
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="problem-statement-countdown">
      <div
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
      >
        <div className="w-full text-center justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h1 className={styles.heading2}>Problem Statements</h1>
          <div className="font-light text-2xl pb-12 text-center text-white mt-4">
            NOTE: Change date later in constants/index.js. <br /> Current
            countdown date is set as {statementReleaseDate} GMT+8.
          </div>
        </div>
        <div className={`${styles.flexCenter} w-full text-white`}>
          <div className="countdown-timer-box">
            <div
              className={`${styles.heading4} xs:leading-[40px] leading-[60px] mb-4 mt-3 opacity-80`}
            >
              To be Released
            </div>
            <div className="countdown-timer">
              <div className="countdown-timer-days">
                <div className="countdown-timer-number">{days}</div>
                <div className="countdown-timer-subtext">Days</div>
              </div>
              <div className="countdown-timer-days">
                <div className="countdown-timer-number">{hours}</div>
                <div className="countdown-timer-subtext">Hours</div>
              </div>
              <div className="countdown-timer-days">
                <div className="countdown-timer-number">{minutes}</div>
                <div className="countdown-timer-subtext">Minutes</div>
              </div>
              <div className="countdown-timer-days">
                <div className="countdown-timer-number">{seconds}</div>
                <div className="countdown-timer-subtext">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <DisplayButton link="/" text="View Past Statements" />
      </div>
    </div>
  );
};

export default ProblemStatementCountdown;
