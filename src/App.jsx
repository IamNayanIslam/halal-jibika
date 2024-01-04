import { createContext, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDataFromLocalStorage } from "./Utility/utilities";
// import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase/Firebase.config";

export const FavoriteJobsContext = createContext();

function App() {
  // Dark theme toggle and local storage
  const [user] = useAuthState(auth);
  const current_theme = localStorage.getItem("current_theme");
  const [isDark, setIsDark] = useState(current_theme === "true");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("current_theme", isDark.toString()); // Convert boolean to string before saving
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((dark) => !dark);
  };

  //favorite jobs array of object and related functions

  const [favoriteJobs, setFavoriteJobs] = useState(
    getDataFromLocalStorage("favoriteJobs") || []
  );

  const toggleHeart = (job) => {
    if (!user) {
      toast.error("Please sign in first!");
      navigate("/login");
      return;
    }
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

  //favorite jobs local storage

  useEffect(() => {
    localStorage.setItem("favoriteJobs", JSON.stringify(favoriteJobs));
  }, [favoriteJobs]);

  //Applied Jobs Array of Object and related functions

  const [appliedJobs, setAppliedJobs] = useState(
    getDataFromLocalStorage("appliedJobs") || []
  );

  const apply = (e, job) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in first!");
      navigate("/login");
      return;
    }
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

  //Applied Job Local Storage

  useEffect(() => {
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  //Job updating Modal opening and closing function

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal((prevModal) => !prevModal);
  };

  const [jobEdit, setJobEdit] = useState(null);

  //global contest values

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

  return (
    <div className={isDark && "dark-body"}>
      <div className={`page-width ${isDark && "dark-theme"}`}>
        <FavoriteJobsContext.Provider value={values}>
          <Header />
          <ScrollRestoration />
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
          <ToastContainer />
        </FavoriteJobsContext.Provider>
      </div>
    </div>
  );
}

export default App;
