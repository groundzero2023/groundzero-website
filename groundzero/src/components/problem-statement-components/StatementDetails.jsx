import React, { useEffect, useState } from "react";
import { NavigationBar } from "../index";
import { Link, useParams } from "react-router-dom";
import { problems } from "../../constants/index";
import styles from "../../style";

const StatementDetails = () => {
  const [data, setData] = useState({});

  const {id} = useParams();

  useEffect(() => {
    var problem = problems.filter(function (problem) {
      return problem.id == id;
    })
    if (problem) {
      setData(problem[0])
    }
  }, []);

  if (data) {
    return (
      <div className="bg-purple">
        <NavigationBar />
        <div>
          <div className="statement-top-segment">
            <div className="statement-icon">{/* Image Icon Here */}</div>
            <div className="statement-text-top">
              <div className={`${styles.heading2}`}>{data.title}</div>
              <div className={`${styles.paragraph}`}>{data.description}</div>
            </div>
          </div>
          <div className="statement-lower-segment">
            <div className="statement-lower-header">Some Header Text here</div>
            <div className={`${styles.paragraph}`}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </div>
          </div>
          <Link to="/#problems">
            <div className="statement-button">Back To Statements</div>
          </Link>
        </div>
      </div>
    );
  }
};

export default StatementDetails;
