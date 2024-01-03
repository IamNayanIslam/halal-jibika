import { createContext, useEffect, useState } from "react";
import { Outlet, useRouteLoaderData } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export const FavoriteJobsContext = createContext();

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [isDark, setIsDark] = useState(current_theme === "true");

  useEffect(() => {
    localStorage.setItem("current_theme", isDark.toString()); // Convert boolean to string before saving
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((dark) => !dark);
  };

  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const toggleHeart = (job) => {
    const isAlreadyFavorite = favoriteJobs.some(
      (favJob) => favJob.id === job.id
    );

    if (isAlreadyFavorite) {
      setFavoriteJobs((prevFavorites) =>
        prevFavorites.filter((favJob) => favJob.id !== job.id)
      );
    } else {
      setFavoriteJobs((prevFavorites) => [...prevFavorites, job]);
    }
  };

  const isJobFavorite = (id) => favoriteJobs.some((favJob) => favJob.id === id);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const apply = (e, job) => {
    e.preventDefault();
    const isAlreadyApplied = appliedJobs.some((appJob) => appJob.id === job.id);

    if (isAlreadyApplied) {
      setAppliedJobs((prevApplied) =>
        prevApplied.filter((appJob) => appJob.id !== job.id)
      );
    } else {
      setAppliedJobs((prevApplied) => [...prevApplied, job]);
    }
  };

  const isJobApplied = (id) => appliedJobs.some((appJob) => appJob.id === id);

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((prevModal) => !prevModal);
  };

  const [jobEdit, setJobEdit] = useState(null);

  const values = {
    favoriteJobs,
    toggleHeart,
    isDark,
    isJobFavorite,
    apply,
    appliedJobs,
    isJobApplied,
    isModal,
    toggleModal,
    jobEdit,
    setJobEdit,
  };

  useEffect(() => {
    console.log(appliedJobs);
  }, [appliedJobs]);

  return (
    <div className={isDark && "dark-body"}>
      <div className={`page-width ${isDark && "dark-theme"}`}>
        <FavoriteJobsContext.Provider value={values}>
          <Header />
          <div
            className={`theme-toggle position ${isDark ? "glow" : "bg-white"}`}
          >
            {isDark ? (
              <img
                src="./img/day.png"
                alt=""
                onClick={toggleTheme}
                className="day"
              />
            ) : (
              <img
                src="./img/night.png"
                alt=""
                onClick={toggleTheme}
                className="night"
              />
            )}
          </div>
          <Outlet />
          <Footer />
        </FavoriteJobsContext.Provider>
      </div>
    </div>
  );
}

export default App;
