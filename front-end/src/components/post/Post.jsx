import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <div className="post">
      <div className="postWarapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <span className="postUserame">Dhinakaran</span>
            <span className="postData">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey ! It's My First Post How is Is :)
            <img className="postImg" src="/assets/post/1.jpeg" alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" />
            <img className="likeIcon" src="/assets/heart.png" alt="" />
            <span className="postLikeCouter">10 People Liked It</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">2 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
