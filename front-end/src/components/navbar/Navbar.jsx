import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbarLogo">Socail Media</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search For Friends or Videos"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
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
