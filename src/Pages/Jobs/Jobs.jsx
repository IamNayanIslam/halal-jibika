import { useEffect } from "react";

function Jobs() {
  useEffect(() => {
    document.title = "Jobs || Halal Jibika";
  }, []);
  return <div>Jobs</div>;
}

export default Jobs;
