import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import auth from "../../../Firebase/Firebase.config";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  if (googleUser || githubUser) {
    toast.success("Successfully signed!");
    navigate("/");
  }

  /* const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Successfully signed in with Google!");
      navigate("/");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleSignInWithGithub = async () => {
    try {
      await signInWithGithub();
      toast.success("Successfully signed in with GitHub!");
      navigate("/");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  if (googleLoading || githubLoading) {
    // Optional: You can show a loading indicator here.
    console.log("Loading...");
  }

  if (googleError || githubError) {
    if (googleError) {
      toast.error(`Error: ${googleError.message}`);
    }

    if (githubError) {
      toast.error(`Error: ${githubError.message}`);
    }
  }
 */
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
