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
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";

function Jobs() {
  const [loading, setLoading] = useState(true);

  const { user } = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://my-json-server.typicode.com/IamNayanIslam/halal-jibika/db"
        );
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
    if (!user) {
      toast.error("Please sign in first!");
      navigate("/login");
      return;
    }
    const jobToEdit = jobs?.find((job) => job.id === id);
    setJobEdit(jobToEdit);
    console.log(editJob);
    toggleModal();
  };

  const deletePost = async (id) => {
    if (!user) {
      toast.error("Please sign in first!");
      navigate("/login");
      return;
    }
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(
          `https://my-json-server.typicode.com/IamNayanIslam/halal-jibika/db/${id}`
        );
        Swal.fire({
          title: "Deleted!",
          text: "Your Job has been deleted.",
          icon: "success",
        });

        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      }
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
            {!jobs && <Loader />}
          </div>
        }
        {isModal && (
          <div className="update-job">
            <Editpost className="modal" />
          </div>
        )}
      </div>
    </>
  );
}

export default Jobs;
