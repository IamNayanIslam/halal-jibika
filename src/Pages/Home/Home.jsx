import { Link } from "react-router-dom";
import "./Home.css";
import LatestJobs from "../../Components/Latestjobs/LatestJobs";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home || Halal Jibika";
  }, []);
  return (
    <>
      <div className="home-wrap">
        <div className="hero-section">
          <div className="contents">
            <h1>Halal Jibika</h1>
            <h2>
              “Keep working hard, keep patients and make yourself ready for
              job”.
            </h2>
            <button>
              <Link to="/jobs">Explore Now</Link>
            </button>
          </div>
          <div className="img">
            <img src="/img/work.png" alt="" />
          </div>
        </div>
        <div className="latest-jobs"></div>
      </div>
      <LatestJobs />
    </>
  );
}

export default Home;
