import { Link } from "react-router-dom";
import "./Home.css";
import LatestJobs from "../../Components/Latestjobs/LatestJobs";
import { useContext, useEffect } from "react";
import { FavoriteJobsContext } from "../../App";
import Jobcategories from "../../Components/JobCategories/Jobcategories";

function Home() {
  const { isDark } = useContext(FavoriteJobsContext);
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  }, []);
  return (
    <>
      <div className={`home-wrap ${isDark && "dark-theme"}`}>
        <div className="hero-section">
          <div className="contents">
            <h1>Welcome To</h1>
            <h1>Halal Jibika</h1>
            <h2>
              Persist in your hard work, maintain patience, and prepare yourself
              for future opportunities in your career journey.
            </h2>
            <Link to="/jobs">
              <button>Explore Now</button>
            </Link>
          </div>
          <div className="img">
            <img src="/img/work.png" alt="" />
          </div>
        </div>
        <div className="latest-jobs"></div>
      </div>
      <Jobcategories />
      <LatestJobs />
    </>
  );
}

export default Home;
