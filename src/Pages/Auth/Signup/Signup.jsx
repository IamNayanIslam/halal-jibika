import "./Signup.css";
import { useState, useEffect, useContext } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FavoriteJobsContext } from "../../../App";

function Signup() {
  const { isDark } = useContext(FavoriteJobsContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };

  useEffect(() => {
    document.title = "Sign up || Halal Jibika";
  }, []);
  return (
    <>
      <div className={`signup-wrap ${isDark && "dark-signup-wrap"}`}>
        <div className="signup">
          <h1>
            Sign up to Halal <span>Jibika</span>
          </h1>
          <form action="">
            <div className="username">
              <div className="input">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="input">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="input">
              <input type="text" placeholder="Mobile Number" />
            </div>
            <div className="input password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8 or more character)"
              />
              {showPassword ? (
                <IoEyeOff className="showPass" onClick={handleShowPassword} />
              ) : (
                <IoEye className="showPass" onClick={handleShowPassword} />
              )}
            </div>
            <button>Sign up</button>
          </form>

          <p className="hr">
            <span className="or">or</span>
          </p>
          <p className="continue">Continue With</p>
          <div className="external-auth-btns">
            <button>
              <FcGoogle />
            </button>
            <button>
              <ImGithub />
            </button>
          </div>
          <div className="register">
            <p>
              <span>Already have a Halal Jibika Account?</span>
            </p>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
