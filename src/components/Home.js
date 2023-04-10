import React from "react";
import Navbar from "./Navbar";
import SbiGif from "../images/sbi.gif";
import "../styles/Home.css";
import { FaUserAlt, FaUserPlus, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Footer />
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
      </div>

      
    </>
  );
};

export default Home;
