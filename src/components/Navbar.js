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
      {/* <nav className="navbar">
        <div className="navbar-container">
          <img src={logoImg} className="image1" alt="Logo" />
          <div className="menu-icon" onClick={toggleMenu}>
            
            {showMenu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/deposit" className="nav-link" onClick={toggleMenu}>
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/withdraw" className="nav-link" onClick={toggleMenu}>
                Withdraw
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={toggleMenu}
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#">Link 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Link 2</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logoImg} className="image1" alt="Logo" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link
                to="home"
                className="nav-link text-uppercase text-dark fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
            <Link
                to="home"
                className="nav-link text-uppercase text-dark fs-22 fw-6 ls-1"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
