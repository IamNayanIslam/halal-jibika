import { Link } from "react-router-dom";
import "./Footer.css";
import { useContext } from "react";
import { FavoriteJobsContext } from "../../App";

export default function Footer() {
  const { isDark } = useContext(FavoriteJobsContext);
  return (
    <div className={`footer-wrap ${isDark && "dark-footer-wrap"}`}>
      <footer>
        <div className="footer-top">
          <div className="address">
            <img
              src="https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg"
              alt=""
            />
            <p>
              Address: Street: Warwick Rd, City/Town: Banbury,
              State/Province/Region: Oxfordshire, Zip/Postal Code: OX16 2AN,
              Phone Number: 01295 264003, Country: United Kingdom, Latitude:
              52.064822, Longitude: -1.345158
            </p>
          </div>
          <div className="links">
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/jobs" className="footLink">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/about" className="footLink">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="footLink">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/login" className="footLink">
                  Log In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="footLink">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="cont">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              hic ratione id obcaecati. A sunt neque exercitationem iusto beatae
              eius! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi hic ratione id obcaecati. A sunt neque exercitationem iusto
              beatae eius!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
