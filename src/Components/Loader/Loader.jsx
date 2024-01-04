import { ScaleLoader } from "react-spinners";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      Trying to fetch data....
      <ScaleLoader color="#1DBF72" />
    </div>
  );
}

export default Loader;
