import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ForumFormComponent from "../../ForumComponents/ForumFormComponent/ForumFormComponent";
import ForumPostsComponent from "../../ForumComponents/ForumPostsComponent/ForumPostsComponent";
import "./forum.css";
const Forum = () => {
  const [currentId,setCurrentId] = useState(null)   

  const dispatch = useDispatch()
  
  useEffect(()=>{
    //dispatch() dispatch of getting all the posts from the backend
  },[currentId,dispatch])

  return (
    <div className='forum-container'>
      <div>
      <ForumPostsComponent currentId={currentId}/>
      </div>
      <div>
      <ForumFormComponent  currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};
export default Forum;
