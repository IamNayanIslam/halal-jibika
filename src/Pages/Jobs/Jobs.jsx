import { useContext, useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FavoriteJobsContext } from "../../App";
import "./Jobs.css";

function Jobs() {
  const jobs = useRouteLoaderData("root");
  const { isJobFavorite, toggleHeart } = useContext(FavoriteJobsContext);
  console.log(jobs);
  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);
  return (
    <>
      <div className="jobs-wrap">
        <h2>Chose your dream job from thousands of jobs!</h2>
        {
          <div className="jobs">
            {jobs &&
              jobs.map((job) => (
                <div className="job-card" key={job.id}>
                  <div className="job-img">
                    <img src={job.logo} alt="Company Logo" />
                  </div>
                  {isJobFavorite(job.id) ? (
                    <FaHeart
                      onClick={() => toggleHeart(job)}
                      className="fav-icon filled"
                    />
                  ) : (
                    <CiHeart
                      onClick={() => toggleHeart(job)}
                      className="fav-icon"
                    />
                  )}
                  <div className="cont">
                    <h3> {job.title}</h3>
                    <p>Hiring Company: {job.companyName}</p>
                    <p className="role">Role: {job.position}</p>
                    <button>Apply</button>
                  </div>
                </div>
              ))}
          </div>
        }
      </div>
    </>
  );
}

export default Jobs;
