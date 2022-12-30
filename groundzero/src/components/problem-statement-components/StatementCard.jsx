import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { problems } from "../../constants/index";

const StatementCard = (props) => {
  const [data, setData] = useState({});
  const id = props.id + 1;

  useEffect(() => {
    var problem = problems.filter(function (problem) {
      return problem.id == id;
    });
    if (problem) {
      setData(problem[0]);
    }
  }, []);

  if (data) {
    const linkUrl = "/problems/" + id;

    return (
      <>
        <Link to={linkUrl}>
          <div className="statement-card">
            <div className="statement-card-image">
              <img src={data.img}></img>
            </div>
            <div className="statement-card-header">{data.title}</div>
            <div className="statement-card-description">{data.description}</div>
          </div>
        </Link>
      </>
    );
  }
};

export default StatementCard;
