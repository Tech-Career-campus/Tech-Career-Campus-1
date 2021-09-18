import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../Redux/actions/postsActions";
import Pagination from "../../Features/ForumPosts/Pagination";
import ForumFormComponent from "./ForumComponents/ForumFormComponent/ForumFormComponent";
import ForumPostsComponent from "./ForumComponents/ForumPostsComponent/ForumPostsComponent";
import "./forum.css";
import { useHistory, useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Forum = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <div className="forum-container">
      <div>
        <ForumPostsComponent setCurrentId={setCurrentId} />
        <div>
          <Pagination page={page} />
        </div>
      </div>
      <div>
        <ForumFormComponent currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  );
};
export default Forum;
