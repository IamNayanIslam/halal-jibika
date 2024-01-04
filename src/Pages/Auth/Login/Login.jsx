import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";

import "./Login.css";
import { FavoriteJobsContext } from "../../../App";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.config";
import Home from "../../Home/Home";
import Loader from "../../../Components/Loader/Loader";
import Swal from "sweetalert2";

function Login() {
  const { isDark } = useContext(FavoriteJobsContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };
  useEffect(() => {
    document.title = "Log in || Halal Jibika";
  }, []);

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const hadnleSingInData = async (e) => {
    e.preventDefault();
    const emailOrUsername = e.target.emailOrUsername.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, emailOrUsername, password);
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Signed In",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error("Error signing in:", error.message);
      Swal.fire({
        icon: "error",
        title: "Sign In Failed",
        text: error.message,
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p style={{ backgroundColor: "red", width: "600px", color: "wheat" }}>
        {error?.message}
      </p>
    );
  }

  return (
    <>
      {!user ? (
        <div className={`login-wrap ${isDark && "dark-login-wrap"}`}>
          <div className="login">
            <h1>
              Log in to Halal <span>Jibika</span>
            </h1>
            <form onSubmit={hadnleSingInData}>
              <div className="input username">
                <FaRegUser />
                <input
                  type="text"
                  name="emailOrUsername"
                  placeholder="Email or Username"
                />
              </div>
              <div className="input password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                {showPassword ? (
                  <IoEyeOff className="showPass" onClick={handleShowPassword} />
                ) : (
                  <IoEye className="showPass" onClick={handleShowPassword} />
                )}
              </div>
              <button type="submit">Log in</button>
            </form>

            <p className="hr">
              <span className="or">or</span>
            </p>
            <p className="continue">Continue With</p>
            <SocialLogin />
            <div className="register">
              <p>
                <span>Don't have a Halal Jibika Account?</span>
              </p>
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default Login;
