import { useContext } from "react";
import { jobsContext } from "../../App";

function LatestJobs() {
  const jobs = useContext(jobsContext);
  console.log(jobs);
  return (
    <>
      {jobs.map((job) => (
        <p key={job.id}>{job.position}</p>
      ))}
    </>
  );
}

export default LatestJobs;
