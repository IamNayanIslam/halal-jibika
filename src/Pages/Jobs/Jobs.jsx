import { useContext, useEffect, useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { FavoriteJobsContext } from "../../App";
import "./Jobs.css";
import axios from "axios";
import Editpost from "../../Components/Editpost/Editpost";
import { ScaleLoader } from "react-spinners";
import Loader from "../../Components/Loader/Loader";

function Jobs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/jobs");
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [jobs, setJobs] = useState(null);
  // const data = useRouteLoaderData("root");

  // const [jobs, setJobs] = useState(data);
  const {
    isJobFavorite,
    toggleHeart,
    apply,
    isJobApplied,
    isModal,
    editJob,
    setJobEdit,
    toggleModal,
  } = useContext(FavoriteJobsContext);
  // console.log(jobs);
  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);

  const handleJobEdit = (id) => {
    const jobToEdit = jobs?.find((job) => job.id === id);
    setJobEdit(jobToEdit);
    console.log(editJob);
    toggleModal();
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${id}`);

      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error.message);
    }
  };

  // const reverseJobs = jobs.sort((a, b) => b.id - a.id);

  return (
    <>
      <div className="jobs-wrap">
        <h2>Chose your dream job from thousands of jobs!</h2>
        {
          <div className="jobs">
            {jobs &&
              jobs
                ?.sort((a, b) => b.id - a.id)
                ?.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div className="job-img">
                      <img src={job.logo} alt="Company Logo" />
                    </div>
                    <div className="icons-wrap">
                      <div className="icons">
                        <IoCloseSharp
                          className="delete"
                          onClick={() => deletePost(job.id)}
                        />
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
                        <FaRegEdit
                          className="edit"
                          onClick={() => handleJobEdit(job.id)}
                        />
                      </div>
                    </div>
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
            {!jobs && (
              /* <MoonLoader color="#1DBF72" /> */
              <div className="loader">
                Trying to fetch data....
                <ScaleLoader color="#1DBF72" />
              </div>
            )}
          </div>
        }
      </div>
      {isModal && <Loader />}
    </>
  );
}

export default Jobs;
