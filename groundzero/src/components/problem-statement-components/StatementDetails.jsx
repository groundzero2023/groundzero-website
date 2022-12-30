import React, { useEffect, useState } from "react";
import { DisplayButton, NavigationBar } from "../index";
import { useParams } from "react-router-dom";
import { problems } from "../../constants/index";
import styles from "../../style";

const StatementDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    var problem = problems.filter(function (problem) {
      return problem.id == id;
    });
    if (problem) {
      setData(problem[0]);
    }
  }, []);

  if (data) {
    return (
      <div className="bg-purple w-full overflow-hidden">
        <NavigationBar />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className="grid place-items-center text-white xs:px-16 lg:px-40">
            <div className="statement-top-segment">
              <div className="statement-icon">
                <img src={data.img}></img>
              </div>
              <div className="statement-text-top">
                <div className={`${styles.heading2}`}>{data.title}</div>
                <div className={`${styles.paragraph}`}>{data.content}</div>
              </div>
            </div>
            <div className="statement-lower-segment">
              <div className={`${styles.heading4}`}>
                {data.subheader1}
              </div>
              <div className={`${styles.paragraph} text-justify`}>
                {data.details1}
              </div>
            </div>
            <DisplayButton link="/#problems" text="Back to Statements" />
          </div>
        </div>
        </div>
      </div>
    );
  }
};

export default StatementDetails;
