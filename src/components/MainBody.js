import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const MainBody = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainBody;
