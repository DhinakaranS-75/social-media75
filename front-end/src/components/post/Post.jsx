import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWarapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUserame">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postData">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
            <img className="postImg" src={post.photo} alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCouter">{post.like} People Liked It</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
