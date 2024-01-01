import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

import "./Login.css";
import { Link } from "react-router-dom";
import { FavoriteJobsContext } from "../../../App";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.config";

function Login() {
  const { isDark } = useContext(FavoriteJobsContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((showPass) => !showPass);
  };
  useEffect(() => {
    document.title = "Log in || Halal Jibika";
  }, []);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const backhome = () => {
    if (user) {
      navigate("/");
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p style={{ backgroundColor: "red", width: "600px", color: "wheat" }}>
        {error?.message}
      </p>
    );
  }

  const hadnleSingInData = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className={`login-wrap ${isDark && "dark-login-wrap"}`}>
        <div className="login">
          <h1>
            Log in to Halal <span>Jibika</span>
          </h1>
          <form action="" onSubmit={() => hadnleSingInData()}>
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
            <button onClick={() => backhome()}>Log in</button>
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
    </>
  );
}

export default Login;
