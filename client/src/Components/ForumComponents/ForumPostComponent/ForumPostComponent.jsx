import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import './post.css'

const ForumPostComponent = ({ post, setCurrentId }) => {
  const user = {};
    
  return (
        <div className="card">
          <div className="media" image={post.selectedFile} title={post.title} />
          <div className="overlay">
            <h6>{post.name}</h6>
            <p>{post.createdAt}</p>
          </div>
          {user?._id === post?.creator && (
            <div className="overlay2">
              <button 
                className="btn post-btn"
                style={{ color: "white" }}
                size="small"
                onClick={() => setCurrentId(post._id)}
              >
                <MoreHorizIcon fontSize="medium" />
              </button>
            </div>
          )}
          <h5 className="title" >
            {post.title}
          </h5>
          <div>
            <p >
              {post.message}
            </p>
          </div>
          <div className="cardActions">
            {(user?._id === post?.creator) && (
              <button
                size="small"
                className="btn post-btn"
                onClick={() =>
                  console.log(`delete post with post id ${post._id}`)
                }
              >
                <DeleteIcon fontSize="small" />
                Delete
              </button>
            )}
          </div>
        </div>

    
  );
};

export default ForumPostComponent;
