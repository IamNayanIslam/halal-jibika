import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <>
      <div className="error">
        <img src="/img/404.gif" alt="" />
        <div>
          <h1>
            SOMETHING WENT WRONG <br /> PAGE NOT FOUND
          </h1>
          <button>
            <Link to="/">Return Home</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
