import { IoCloseSharp } from "react-icons/io5";
import "./Editpost.css";
import { useContext, useEffect, useState } from "react";
import { FavoriteJobsContext } from "../../App";
import axios from "axios";

function Editpost() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:9000/jobs");
        setJobs(data);
      } catch (error) {
        console.log(`Error: ${error.message}, Error code: ${error.code}`);
      }
    };
    fetchData();
  }, []);
  const [jobs, setJobs] = useState(null);

  const { toggleModal, jobEdit, isDark } = useContext(FavoriteJobsContext);
  const [editData, setEditData] = useState({
    id: jobEdit?.id || "",
    title: jobEdit?.title || "",
    companyName: jobEdit?.companyName || "",
    description: jobEdit?.description || "",
    position: jobEdit?.position || "",
    logo: jobEdit?.logo || "",
  });

  useEffect(() => {
    console.log(editData);
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:9000/jobs/${editData?.id}`, editData);
    } catch (error) {
      console.error("Error:", error);
    }
    toggleModal();
  };

  return (
    <>
      <div className="job-post-wrap">
        <form
          action=""
          onSubmit={(e) => handleUpdate(e)}
          className={isDark && "dark-bg"}
        >
          <IoCloseSharp onClick={toggleModal} className="close-modal" />

          <h2>Update Job Post</h2>
          <input
            type="text"
            required
            id="title"
            name="title"
            placeholder="Job title"
            value={editData.title}
            onChange={(e) => {
              setEditData({ ...editData, title: e.target.value });
            }}
          />
          <input
            type="text"
            required
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={editData.companyName}
            onChange={(e) => {
              setEditData({ ...editData, companyName: e.target.value });
            }}
          />
          <input
            type="text"
            required
            id="description"
            name="description"
            placeholder="Job Description"
            value={editData.description}
            onChange={(e) => {
              setEditData({ ...editData, description: e.target.value });
            }}
          />
          <input
            type="text"
            required
            id="position"
            name="position"
            placeholder="Job Position"
            value={editData.position}
            onChange={(e) => {
              setEditData({ ...editData, position: e.target.value });
            }}
          />
          <input
            type="text"
            required
            id="logo"
            name="logo"
            placeholder="Image URL"
            value={editData.logo}
            onChange={(e) => {
              setEditData({ ...editData, logo: e.target.value });
            }}
          />
          <button>Update Job Post</button>
        </form>
      </div>
    </>
  );
}

export default Editpost;
