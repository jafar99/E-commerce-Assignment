import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
          <ul className="submenu">
            <li>
              <Link to="/electronics/mobile">Mobile</Link>
            </li>
            <li>
              <Link to="/electronics/earphones">Earphones</Link>
            </li>
            <li>
              <Link to="/electronics/mac">Mac</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/clothing">Clothing</Link>
          <ul className="submenu">
            <li>
              <Link to="/clothing/tshirt">Tshirt</Link>
            </li>
            <li>
              <Link to="/clothing/shirt">Shirts</Link>
            </li>
            <li>
              <Link to="/clothing/jeans">Jeans</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
