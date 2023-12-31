import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "../../Routes/Navlinks";
import "./Header.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav((prevNav) => !prevNav);
  };
  return (
    <>
      <nav>
        <div className="hj">
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
            <li key={link.name}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <ul>
            <li className="signin">
              <NavLink to="/login">Log in</NavLink>
            </li>
            <li className="signup-btn">
              <Link to="/signup">Sign up</Link>
            </li>
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
