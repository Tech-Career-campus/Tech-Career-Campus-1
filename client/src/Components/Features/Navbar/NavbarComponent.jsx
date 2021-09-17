import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";

<<<<<<< HEAD
  const logout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "./";
  };

export default function Navbar() {
=======
const logout = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = "./";
};
//Ticker moving news
const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
>>>>>>> a392d7be080a9d8626a91e4d9ffe0e43fd315ab0
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
        <p>
          היי, {user.firstName} {user.lastName}
        </p>
        <button className="btn" onClick={() => logout()}>
          התנתק
        </button>
      </div>
    </>
  );
};

export default Navbar;
