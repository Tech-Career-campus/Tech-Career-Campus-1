import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import techLogo from "../../../images/tech-logo.jpeg";
import "./Navbar.css";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import EditProfile from "../EditProfile/EditProfileConponent";
const logout = () => {
  localStorage.removeItem("jwtToken");
  window.location.href = "./";
};
//Ticker moving news
const Navbar = () => {
  const [editProfile, setEditProfile] = useState(false)
  const { user } = useSelector((state) => state.user);
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
            <p>
              היי, {user.firstName} {user.lastName}
            </p>
            <img
              src="https://img.lovepik.com/element/40170/3915.png_860.png"
              alt={"Student"}
              style={{ width: "60px", height: "50px" }}
            />
            <button
              onClick={() => {
                setEditProfile(editProfile ? false : true);
              }}
            >
              <i class="fas fa-cog"></i>
            </button>
            {editProfile ? <EditProfile user={user} setEditProfile= {setEditProfile}/> : ""}
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
