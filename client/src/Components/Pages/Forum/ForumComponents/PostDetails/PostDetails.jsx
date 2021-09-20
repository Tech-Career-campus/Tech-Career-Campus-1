import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import "./postDetails.css";
import { getPost } from "../../../../../Redux/actions/postsActions";
const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
console.log(post);
  if (!post) return null;
  if (isLoading) {
    return (
      <div className="post-details-loadingPaper">
        <CircularProgress size="7em" />
      </div>
    );
  }
  return (
    <div>
      <div className="post-details-card">
        <div className="post-details-section">
          <h3>כותרת: {post.data.title}</h3>
          <h4>פוסט: {post.data.message}</h4>
          <h4>נוצר על ידי: {post.data.firstName}</h4>
          <p>{moment(post.data.createdAt).fromNow()}</p>
          <div style={{ margin: "20px 0" }} />
          <p>
            <strong>Comments - coming soon!</strong>
          </p>
          <div style={{ margin: "20px 0" }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
