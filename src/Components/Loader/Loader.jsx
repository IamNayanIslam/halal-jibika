import { ScaleLoader } from "react-spinners";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <h2>Loading Please Wait...</h2>
      <ScaleLoader color="#1DBF72" />
    </div>
  );
}

export default Loader;
