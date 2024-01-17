import { useContext, useEffect, useState } from "react";
import axios from "axios"; //
import "./Postjob.css";
import { useNavigate } from "react-router-dom";
import "./Postjob.css";
import { FavoriteJobsContext } from "../../App";

const Postjob = () => {
  const { isDark } = useContext(FavoriteJobsContext);
  const [postJob, setPostJob] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleJobPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://my-json-server.typicode.com/IamNayanIslam/halal-jibika/db",
        postJob
      );
      console.log(response.data);
      navigate("/jobs");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  useEffect(() => {
    console.log(postJob);
  });
  return (
    <>
      <div className="job-post-wrap">
        <h2>
          Post a job to hire your next employee from thousands of qualified
          people.
        </h2>
        <form
          action=""
          onSubmit={handleJobPost}
          className={isDark && "dark-bg"}
        >
          <input
            type="text"
            required
            id="title"
            name="title"
            placeholder="Job title"
            onChange={(e) => setPostJob({ ...postJob, title: e.target.value })}
          />
          <input
            type="text"
            required
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            onChange={(e) =>
              setPostJob({ ...postJob, companyName: e.target.value })
            }
          />
          <input
            type="text"
            required
            id="description"
            name="description"
            placeholder="Job Description"
            onChange={(e) =>
              setPostJob({ ...postJob, description: e.target.value })
            }
          />
          <input
            type="text"
            required
            id="position"
            name="position"
            placeholder="Job Position"
            onChange={(e) =>
              setPostJob({ ...postJob, position: e.target.value })
            }
          />
          <input
            type="text"
            required
            id="logo"
            name="logo"
            placeholder="Image URL"
            onChange={(e) => setPostJob({ ...postJob, logo: e.target.value })}
          />
          <button>Add Job Post</button>
        </form>
      </div>
    </>
  );
};

export default Postjob;
