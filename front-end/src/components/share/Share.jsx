import React from "react";
import "./share.css";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWarapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/4.jpeg" alt="" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in Your mind "
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo (or) Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
