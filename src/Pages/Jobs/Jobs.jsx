import { useEffect } from "react";
import { useRouteLoaderData } from "react-router-dom";

function Jobs() {
  const jobs = useRouteLoaderData("root");
  console.log(jobs);
  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);
  return <div>Jobs</div>;
}

export default Jobs;
