import React, { useState } from "react";
import "./form.css";
const ForumFormComponent = ({currentId,setCurrentId}) => { 
    const [postData, setPostData] = useState({
        name:"",
        email:"",
        message:""
      });

      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(postData);
      }
  return (
      <div id="form-div">
        <form onSubmit={handleSubmit} className="form" id="form1">
          <p className="name">
            <input
              name="name"
              type="text"
              className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
              placeholder="שם..."
              id="name"
              onChange={(e)=> setPostData({...postData, name:e.target.value})}
            />
          </p>

          <p className="email">
            <input
              name="email"
              type="text"
              className="validate[required,custom[email]] feedback-input"
              id="email"
              placeholder="אימייל..."
              onChange={(e)=> setPostData({...postData, email:e.target.value})}
            />
          </p>

          <p className="text">
            <textarea
              name="message"
              className="validate[required,length[6,300]] feedback-input"
              id="comment"
              placeholder="תוכן הפוסט..."
              onChange={(e)=> setPostData({...postData, message:e.target.value})}
            ></textarea>
          </p>

          <div className="submit">
            <button type="submit" value="SEND" id="button-blue" >{currentId ? "ערוך":"שלח"}</button>
            <div className="ease"></div>
          </div>
        </form>
      </div>
  );
};

export default ForumFormComponent;
