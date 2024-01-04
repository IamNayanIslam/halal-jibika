import "./Signup.css";
import { useEffect, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { FavoriteJobsContext } from "../../../App";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { isDark } = useContext(FavoriteJobsContext);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password mismatch",
        text: "Please make sure your passwords match.",
      });
      return;
    }

    e.target.userName.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.confirmPassword.value = "";

    try {
      await createUserWithEmailAndPassword(email, password);

      await updateProfile({ displayName: userName });
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "Sign up successful",
        text: "You have successfully signed up.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Sign up failed",
        text: error.message,
      });
    }
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
          <form action="" onSubmit={handleSignup}>
            <div className="username">
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="userName"
                />
              </div>
            </div>
            <div className="input">
              <input type="email" placeholder="Enter Email.." name="email" />
            </div>
            <div className="input password">
              <input
                type="password"
                placeholder="Password (8 or more character)"
                name="password"
              />
            </div>
            <div className="input password">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <button>Sign up</button>
          </form>

          <p className="hr">
            <span className="or">or</span>
          </p>
          <p className="continue">Continue With</p>
          <SocialLogin />
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
