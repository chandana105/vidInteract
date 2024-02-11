import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();
  const isWatchPage = location.pathname.includes("/watch");
  return (
    <div className="grid grid-flow-col">
      {isWatchPage ? null : <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
