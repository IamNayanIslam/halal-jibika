import { Link, useRouteLoaderData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./LatestJobs.css";
import { useContext, useEffect } from "react";
import { FavoriteJobsContext } from "../../App";

function LatestJobs() {
  const { favoriteJobs, toggleHeart, isDark, isJobFavorite } =
    useContext(FavoriteJobsContext);
  const jobs = useRouteLoaderData("root") || [];

  useEffect(() => {
    console.log(favoriteJobs);
  }, [favoriteJobs]);

  return (
    <>
      <div className={`latest-jobs-wrap ${isDark && "dark-theme"}`}>
        <h2>
          <span>Explore latest jobs</span>
        </h2>
        <div className="latest-jobs">
          {jobs.slice(0, 5).map((job) => (
            <div className="latest-job-card" key={job.id}>
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
          <div className="btn-div">
            <Link to="/jobs">
              <button className="all-jobs-btn">Explore All Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestJobs;
