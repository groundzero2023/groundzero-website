import React from 'react';
import styles from '../style';

const Mentors = () => {
  return (
    <div className={`grid ${styles.paddingY} place-items-center text-white xs:px-16 ss:px-12 sm:px-16 lg:px-10`} id="mentors">
      <div className="heading">
        Mentors
      </div>
      <a href="/mentors">
        <div id="nav-register-button">Meet the Mentors</div>
      </a>
    </div>
  )
};

export default Mentors;
