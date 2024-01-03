import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
// import { PiSmileySadBold } from "react-icons/pi";
import { useContext } from "react";
import { FavoriteJobsContext } from "../../App";
import { Link } from "react-router-dom";
import "./Favorite.css";

function Favorite() {
  const {
    favoriteJobs,
    toggleHeart,
    isDark,
    isJobFavorite,
    apply,
    isJobApplied,
  } = useContext(FavoriteJobsContext);
  return (
    <>
      <div className={`favorite-jobs-wrap ${isDark && "dark-theme"}`}>
        <h2>
          <span>
            Your Favotire Jobs <FaHeart />
          </span>
        </h2>
        <div className="favorite-jobs">
          {favoriteJobs.length > 0 ? (
            favoriteJobs.map((job) => (
              <div className="favorite-job-card" key={job.id}>
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
            ))
          ) : (
            <div className="empty-list">
              <img src="./img/sadpanda.gif" alt="" />
              <p>Sorry you don't have any favorite jobs!</p>
            </div>
          )}
        </div>
        <div className="btn-div">
          <Link to="/jobs">
            <button className="all-jobs-btn">Explore All Jobs</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Favorite;
