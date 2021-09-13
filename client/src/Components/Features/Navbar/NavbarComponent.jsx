import React from "react";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";

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
            <Link to={"/"}>דף בית</Link>
          </li>
          <li>
            <Link to={"/forum"}>פורום</Link>
          </li>
          <li>
            <Link to={"/my-course"}>הקורס שלי</Link>
          </li>
          <li>
            <Link to={"/class-schedule"}>לו"ז כיתות</Link>
          </li>
        </ul>
        
        
        <button className="btn" onClick={() => logout()}>
          התנתק
        </button>
      </div>
    </>
  );
}
