import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

const DisplayButton = (props) => {
  return (
    <>
      <Link to={props.link}>
        <div className="display-button">
          <div className={`${styles.heading5}`}>{props.text}</div>
        </div>
      </Link>
    </>
  );
};

export default DisplayButton;