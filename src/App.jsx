import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export const FavoriteJobsContext = createContext();

function App() {
  // const current_theme = localStorage.getItem("current_theme");

  const [isDark, setIsDark] = useState(false);

  /*  useEffect(() => {
    localStorage.setItem("current_theme", isDark);
  }, [isDark]); */

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

  const values = { favoriteJobs, toggleHeart, isDark, isJobFavorite };

  return (
    <div className={isDark && "dark-body"}>
      <div className={`page-width ${isDark && "dark-theme"}`}>
        <FavoriteJobsContext.Provider value={values}>
          <Header />
          <div className={`theme-toggle position ${isDark && "glow"}`}>
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
