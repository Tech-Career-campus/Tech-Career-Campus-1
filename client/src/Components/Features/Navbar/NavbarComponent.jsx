import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";
import { hebrewVariables } from "../../../utils/hebrewVariables";

const logout = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = "./";
};

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
<<<<<<< HEAD
=======
  console.log(user);
>>>>>>> 225fd99758db7e25d721b4459fd7d47d8e5bea53
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
        <div className="log-user">
          <div className="user">
        <p >
          היי, {user.firstName} {user.lastName}
        </p>
        </div>
        <button className="btn" onClick={() => logout()}>
          {hebrewVariables.logout}
        </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
