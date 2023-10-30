import React from "react";
import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Groups2Icon from "@mui/icons-material/Groups2";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWarapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Chars</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Groups2Icon className="leftBarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <BookmarkIcon className="leftBarIcon" />
            <span className="leftbarListItemText">BookMarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutlineIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <EventIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <SchoolIcon className="leftBarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
