import { useRouteLoaderData } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./LatestJobs.css";
import { useState } from "react";

function LatestJobs() {
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const jobs = useRouteLoaderData("root") || [];

  const toggleHeart = (id) => {
    // Check if the job is already in the favorites
    const isAlreadyFavorite = favoriteJobs.includes(id);

    if (isAlreadyFavorite) {
      setFavoriteJobs((prevFavorites) =>
        prevFavorites.filter((jobId) => jobId !== id)
      );
    } else {
      setFavoriteJobs((prevFavorites) => [...prevFavorites, id]);
    }
  };

  const isJobFavorite = (id) => favoriteJobs.includes(id);

  return (
    <>
      <div className="latest-jobs-wrap">
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
                  onClick={() => toggleHeart(job.id)}
                  className="fav-icon filled"
                />
              ) : (
                <CiHeart
                  onClick={() => toggleHeart(job.id)}
                  className="fav-icon"
                />
              )}
              <div className="cont">
                <h3> {job.title}</h3>
                <p>Hiring Company: {job.companyName}</p>
                <p>Role: {job.position}</p>
                <button>Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestJobs;
