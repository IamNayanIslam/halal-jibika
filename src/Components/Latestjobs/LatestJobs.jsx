import { Link, useRouteLoaderData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./LatestJobs.css";
import { useContext, useEffect, useState } from "react";
import { FavoriteJobsContext } from "../../App";
import axios from "axios";

function LatestJobs() {
  const {
    favoriteJobs,
    toggleHeart,
    isDark,
    isJobFavorite,
    apply,
    isJobApplied,
  } = useContext(FavoriteJobsContext);
  // const jobs = useRouteLoaderData("root") || [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/jobs");
        setJobs(data);
      } catch (error) {
        console.log(`Error: ${error.message}, Error code: ${error.code}`);
      }
    };
    fetchData();
  }, []);

  const [jobs, setJobs] = useState(null);

  return (
    <>
      <div className={`latest-jobs-wrap ${isDark && "dark-theme"}`}>
        <h2>
          <span>Explore latest jobs</span>
        </h2>
        <div className="latest-jobs">
          {jobs &&
            jobs?.slice(0, 5)?.map((job) => (
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
                  <button
                    disabled={isJobApplied(job.id)}
                    onClick={(e) => apply(e, job)}
                  >
                    Apply
                  </button>
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
