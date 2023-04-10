import React from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../images/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  //   const [showMenu, setShowMenu] = useState(false);

  //   const toggleMenu = () => {
  //     setShowMenu(!showMenu);
  //   };

  return (
    <>
      <nav className="navbar navbar-top">
        <div className="navbar-logo">
          <img src={logoImg} className="image1" alt="Logo" />
        </div>
      </nav>
      <nav className="navbar navbar-bottom">
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Mobile Banking</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Corporate Website</Link>
            </li>
            <li>
              <Link to="/">SBIePay Lite</Link>
            </li>
            <li>
              <Link to="/">SB Collect</Link>
            </li>
            <li>
              <Link to="/">Electoral Bond</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">mCash</Link>
            </li>
            <li>
              <Link to="/">Apply for Sb/Current Account</Link>
            </li>
            <li>
              <Link to="/">NPS</Link>
            </li>
            <li>
              <Link to="/">SBI Unipay</Link>
            </li>
            <li>
              <Link to="/">SBI Loans</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
