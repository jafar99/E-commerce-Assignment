import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <a href="#" className="navbar-icon">
          <FontAwesomeIcon icon={faBell} />
        </a>
        <a href="#" className="navbar-logout">
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Header;
