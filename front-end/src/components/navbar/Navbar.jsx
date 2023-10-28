import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <span className="logo">Socail Media</span>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <SearchIcon />
          <input
            type="text"
            className="searchInput"
            placeholder="Search For Friends or Videos"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarlinks">
          <span className="navbarlink">Homepage</span>
          <span className="navbarlink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIcon">
            <PersonIcon />
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navbarIcon">
            <ChatIcon />
            <span className="navbarIconBadge">5</span>
          </div>
          <div className="navbarIcon">
            <NotificationsIcon />
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/4.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  );
}
