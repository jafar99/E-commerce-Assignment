import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
