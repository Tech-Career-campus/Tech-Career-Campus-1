import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getPost } from "../../../../../Redux/actions/postsActions";
import CommentSection from '../ForumCommentsComponent/ForumCommentComponents'
import "./postDetails.css";

const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);
  if (!post) return null;
  if (isLoading) {
    return (
      <div className="post-details-loadingPaper">
        <CircularProgress size="7em" />
      </div>
    );
  }
  return (
    <div className='post-details-media'>
      <div className="post-details-card">
        <div className="post-details-section">
          <h3><strong>כותרת:</strong> {post.data.title}</h3>
          <h4><strong>פוסט:</strong> {post.data.message}</h4>
          <h4><strong>נוצר על ידי:</strong> {post.data.firstName}</h4>
          <p>{moment(post.data.createdAt).fromNow()}</p>
          <hr style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <div style={{ margin: "20px 0" }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
