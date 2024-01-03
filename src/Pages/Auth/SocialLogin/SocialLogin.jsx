import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import auth from "../../../Firebase/Firebase.config";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  if (googleLoading || githubLoading) {
    console.log("Loading...");
  }

  if (googleError || githubError) {
    if (googleError) {
      console.log(`Error: ${googleError.message}`);
    }

    if (githubError) {
      console.log(`Error: ${githubError.message}`);
    }
  }
  if (googleUser || githubUser) navigate("/");

  return (
    <>
      <div className="btns">
        <div className="external-auth-btns">
          <button onClick={() => signInWithGoogle()}>
            <FcGoogle />
          </button>
          <button onClick={() => signInWithGithub()}>
            <ImGithub />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
