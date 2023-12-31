import "./Signup.css";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };
  return (
    <>
      <div className="login-wrap">
        <div className="login">
          <h1>
            Sign up to Halal <span>Jibika</span>
          </h1>
          <form action="">
            <div className="input username">
              <FaRegUser />
              <input type="text" placeholder="Email or Username" />
            </div>
            <div className="input password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
