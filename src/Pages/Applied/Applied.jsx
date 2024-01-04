import { useContext, useEffect, useState } from "react";
import { FavoriteJobsContext } from "../../App";
import "./Applied.css";
import { CgClose } from "react-icons/cg";

const Applied = () => {
  const { appliedJobs } = useContext(FavoriteJobsContext);
  const [appJobs, setAppJobs] = useState(appliedJobs);

  return (
    <>
      <div className="applied-wrap">
        <h2>
          {appJobs && appJobs.length > 0
            ? "Jobs you have applied for"
            : "You haven't applied yet!"}
        </h2>

        <div className="appliedJobs">
          {appJobs &&
            appJobs.map((job) => (
              <div className="appliedJob" key={job.id}>
                <img src={job.logo} alt="" />
                <div className="details">
                  <h2>{job.companyName}</h2>
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <p>{job.position}</p>
                </div>
              </div>
            ))}
        </div>

        {appJobs.length < 1 && (
          <div className="empty-applied">
            <img src="https://i.postimg.cc/BQQSMHQv/giphy.gif" alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default Applied;
