import React from "react";
import Navbar from "./Navbar";
import SbiGif from "../images/sbi.gif";
import "../styles/Home.css";
import { FaUserAlt, FaUserPlus, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="gif">
          <img src={SbiGif} alt="Logo" />
        </div>
        <div className="box-container">
          <div className="box box-login">
            <div className="icon">
              <FaUserAlt size={34} />
            </div>
            <Link to="/login" className="button">
              LOGIN <FaArrowRight size={18} />
            </Link>
            <p>
              SBI's internet banking portal provides personal banking services
              that gives you complete control over all your banking demands
              online.
            </p>
          </div>
          <div className="box box-register">
            <div className="icon">
              <FaUserPlus size={38} />
            </div>
            <Link to="/register" className="button">
              REGISTER <FaArrowRight size={18} />
            </Link>
            <p>
              SBI's internet banking portal provides personal banking services
              that gives you complete control over all your banking demands
              online.
            </p>
          </div>
        </div>
        <div className="moving-text-container">
          <div className="moving-text">
            <p>
            Mandatory Profile password change after 365 days introduced for
            added security. | Customers who have installed “SBI Secure OTP App”
            on their mobile and completed registration process will now receive
            Login OTP for OnlineSBI.com on the app instead of SMS OTP | Call us toll free on 1800 1234 and 1800
            2100 and get a wide range of services through SBI Contact Centre |
            
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
