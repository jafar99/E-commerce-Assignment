import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const handleSubMenuSelect = (submenu) => {
    setSelectedSubMenu(submenu);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        {selectedSubMenu && (
          <div className="selected-submenu">{selectedSubMenu}</div>
        )}
        <li>
          <Link to="/electronics">Electronics</Link>
          <ul className="submenu">
            <li>
              <Link
                to="/electronics/mobile"
                onClick={() => handleSubMenuSelect("Mobile")}
              >
                Mobile
              </Link>
            </li>
            <li>
              <Link
                to="/electronics/earphones"
                onClick={() => handleSubMenuSelect("Earphones")}
              >
                Earphones
              </Link>
            </li>
            <li>
              <Link
                to="/electronics/mac"
                onClick={() => handleSubMenuSelect("Mac")}
              >
                Mac
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/clothing">Clothing</Link>
          <ul className="submenu">
            <li>
              <Link
                to="/clothing/tshirt"
                onClick={() => handleSubMenuSelect("Tshirt")}
              >
                Tshirt
              </Link>
            </li>
            <li>
              <Link
                to="/clothing/shirt"
                onClick={() => handleSubMenuSelect("Shirts")}
              >
                Shirts
              </Link>
            </li>
            <li>
              <Link
                to="/clothing/jeans"
                onClick={() => handleSubMenuSelect("Jeans")}
              >
                Jeans
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
