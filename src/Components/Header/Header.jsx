import { Link, NavLink } from "react-router-dom";
import { Navlinks } from "../../Routes/Navlinks";
import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src="/img/hj.jpg" alt="Halal_jibika" className="logo" />
        </Link>
        <ul className="main-menu">
          {Navlinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <ul>
            <li className="signin">
              <Link to="/login">Log in</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
