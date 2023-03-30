import React from 'react';
import styles from '../style';

const Mentors = () => {
  return (
    <div className={`grid ${styles.paddingY} place-items-center text-white px-5 ss:px-10 sm:px-16 lg:px-10`} id="mentors">
      <div className="heading">
        Mentors
      </div>
      <div className={`flex flex-col space-y-8 sm:px-16`}>
        <h1 className="text-xl sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at rutrum arcu, vitae fringilla magna. Proin bibendum massa non turpis pellentesque, sed congue enim volutpat. 
        </h1>
        <div className="grid place-items-center">
          <a className="bg-foregroundViolet items-center justify-center inline-flex px-8 py-3 rounded-full text-lg font-bold hover:scale-110 duration-300 transition ease-in-out" href="/mentors">Meet the Mentors</a>
        </div>
      </div>
    </div>
  )
};

export default Mentors;
