import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "../../Routes/Navlinks";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { FavoriteJobsContext } from "../../App";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const { isDark, favoriteJobs, appliedJobs } = useContext(FavoriteJobsContext);
  const toggleMobileNav = () => {
    setMobileNav((prevNav) => !prevNav);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.warning("Signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
        toast.error("Error signing out");
      });
  };

  const [user] = useAuthState(auth);
  console.log(user);

  function initials(fullName) {
    const names = fullName.split(" ");
    const initialsArray = names.map((name) => name.charAt(0).toUpperCase());
    return initialsArray.join("");
  }

  return (
    <>
      <nav className={isDark && "dark-theme"}>
        <div className={`hj ${isDark && "dark-hj"}`}>
          <Link to="/">
            <img src="/img/hj.jpg" alt="Halal_jibika" className="logo" />
          </Link>
          <h2>
            <Link to="/">
              Halal <span>Jibika</span>
            </Link>
          </h2>
        </div>
        <ul className={`main-menu mobile-ul ${mobileNav && "slide-in"}`}>
          {Navlinks.map((link) => (
            <li key={link.name} onClick={toggleMobileNav}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}

          {user && (
            <>
              <li onClick={toggleMobileNav}>
                <NavLink to="/favorite">
                  Favorite
                  {favoriteJobs?.length > 0 ? (
                    <sup className="favNum">{favoriteJobs?.length}</sup>
                  ) : (
                    ""
                  )}
                </NavLink>
              </li>
              <li onClick={toggleMobileNav}>
                <NavLink to="/applied">
                  Applied
                  {appliedJobs?.length > 0 ? (
                    <sup>{appliedJobs?.length}</sup>
                  ) : null}
                </NavLink>
              </li>
              <li onClick={toggleMobileNav}>
                <NavLink to="/jobpost">Post a Job</NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="buttons">
          <ul>
            {user ? (
              <li className="signin" onClick={logOut}>
                Log out
              </li>
            ) : (
              <li className="signin">
                <NavLink to="/login">Log in</NavLink>
              </li>
            )}
            {user ? (
              <li className="user-dp">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <>
                    <span>{initials(user.displayName)}</span>
                    <span className="tooltiptext">{user.displayName}</span>
                  </>
                )}
              </li>
            ) : (
              <li className="signup-btn">
                <Link to="/signup">Sign up</Link>
              </li>
            )}
          </ul>
          <div className="open-close">
            {mobileNav ? (
              <IoCloseSharp onClick={toggleMobileNav} />
            ) : (
              <FaBars onClick={toggleMobileNav} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
