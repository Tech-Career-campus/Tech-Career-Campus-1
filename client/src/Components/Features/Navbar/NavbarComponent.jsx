import React from "react";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";
import { hebrewVariables } from "../../../utils/hebrewVariables";

  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "./";
  };
//Ticker moving news
export default function Navbar() {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-logo">
          <img src={techLogo} alt="" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to={"/"}>{hebrewVariables.homePage}</Link>
          </li>
          <li>
            <Link to={"/forum"}>{hebrewVariables.forum}</Link>
          </li>
          <li>
            <Link to={"/my-course"}>{hebrewVariables.myCourse}</Link>
          </li>
          <li>
            <Link to={"/class-schedule"}>{hebrewVariables.classSchedual}</Link>
          </li>
        </ul>
        
        
        <button className="btn" onClick={() => logout()}>
          {hebrewVariables.logout}
        </button>
      </div>
    </>
  );
}
