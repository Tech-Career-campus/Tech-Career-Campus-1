import React, { useState,useEffect } from "react";
import "./Staff.css";
import { useDispatch } from "react-redux";
import { deleteStaff, updateStaff } from "../../../Redux/actions/staffAction";
import DeleteIcon from "@material-ui/icons/Delete";
import handleChange from "../../../utils/handleChange";
import { hebrewVariables } from "../../../utils/hebrewVariables";
import Dialog from '@material-ui/core/Dialog';


const StaffCard = ({ staffItem }) => {

  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [staffUpdate, setStaffUpdate] = useState({ ...staffItem });

  const { firstName, lastName, phone, email, jod, responsible, profileImg } =
    staffItem;

  const IMAGE_PATH = profileImg?.slice(profileImg.lastIndexOf('\\') + 1, profileImg.length)|| "";


  console.log(IMAGE_PATH)
  return (
    <div className="big-card">

      <Dialog aria-labelledby="form-dialog-title" open={isEdit}  >
      <article className="card-article">
            <div className="card-box">
            {
              IMAGE_PATH.length === 0?
                <img
                  src="https://img.lovepik.com/element/40170/3915.png_860.png"
                  alt={"staff profile"}
                  style={{ width: "1500", height: "1368" }}

                />
                :
                
                <img
                  src={`/images/${IMAGE_PATH}`}
                  alt={"staff profile"}
                  style={{ width: "1500", height: "1368" }}
                />
            }
            </div>
            <div className="article-content">
              <p className="article-tags">
                <span className="article-tag"> {responsible}</span>
                <span className="article-tag">{jod}</span>
              </p>
              <h1 className="article-title">
                <a href="#">
                  {firstName} {lastName}
                </a>
              </h1>

              <p className="article-metadata">
                <span className="article-rating"></span>
                <span className="article-votes"></span>
              </p>

              <p className="article-desc">
                <h3>{hebrewVariables.contact}</h3>
                <ul>
                <lable>{hebrewVariables.responsibleFor}</lable>
                <br />
            <input
              name="responsible"
              label
              type="text"
              onChange={(e) => handleChange(e, staffUpdate, setStaffUpdate)}
              value={responsible}
            /> <br />
            <lable>{hebrewVariables.job}</lable>
            <br />
            <input
              name="jod"
              label
              type="text"
              onChange={(e) => handleChange(e, staffUpdate, setStaffUpdate)}
              value={jod}
            />
            <div >
              <h3>{hebrewVariables.contact}</h3>
              <ul>
                <li >
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) =>
                      handleChange(e, staffUpdate, setStaffUpdate)
                    }
                  />
                </li>
              </ul>
            </div>
                </ul>
              </p>

              <button
                className="article-button"
                onClick={() => {
                    dispatch(updateStaff(staffUpdate));
                  }}
              >
                {hebrewVariables.update}
              </button>
              <button className="article-button"
                 onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                  >
              
                {hebrewVariables.closeBtn}
              </button>
            </div>
          </article>
      </Dialog>
 
<article className="card-article">
            <div className="card-box">
            {
              IMAGE_PATH.length === 0?
                <img
                  src="https://img.lovepik.com/element/40170/3915.png_860.png"
                  alt={"staff profile"}
                  style={{ width: "1500", height: "1368" }}
                />
                :
                
                <img
                  src={`/images/${IMAGE_PATH}`}
                  alt={"staff profile"}
                  style={{ width: "1500", height: "1368" }}
                />
            }
            </div>
            <div className="article-content">
              <p className="article-tags">
                <span className="article-tag"> {responsible}</span>
                <span className="article-tag">{jod}</span>
              </p>
              <h1 className="article-title">
                <a href="#">
                  {firstName} {lastName}
                </a>
              </h1>

              <p className="article-metadata">
                <span className="article-rating"></span>
                <span className="article-votes"></span>
              </p>

              <p className="article-desc">
                <h3>{hebrewVariables.contact} :</h3>
                <ul>
                  <li>{phone}</li>
                  <li>{email}</li>
                </ul>
              </p>

              <button
                className="article-button"
                onClick={() => {
                    setIsEdit(!isEdit);
                    setStaffUpdate({ ...staffUpdate, _id: staffItem._id });
                  }}
              >
                {hebrewVariables.update}
              </button>
              <button className="article-button">
                {hebrewVariables.delete}
                <DeleteIcon onClick={() => dispatch(deleteStaff(staffItem._id))} />
              </button>
            </div>
          </article>
    </div>
  );
};

export default StaffCard;
