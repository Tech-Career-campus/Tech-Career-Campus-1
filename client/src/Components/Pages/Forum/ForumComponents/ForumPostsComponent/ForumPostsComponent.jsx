import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ForumPostComponent from "../ForumPostComponent/ForumPostComponent";
import { useSelector } from "react-redux";
import "./posts.css";

const ForumPostsComponent = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  if(!posts.length && !isLoading) return "No Posts";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post._id}>
          <ForumPostComponent post={post} setCurrentId={setCurrentId} />
        </li>
      ))}
    </ul>
  );
};

export default ForumPostsComponent;
