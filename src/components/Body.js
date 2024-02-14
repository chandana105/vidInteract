import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { openMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // Open the menu only when the route is "/"
    if (location.pathname === "/") {
      dispatch(openMenu());
    }
  }, [dispatch, location.pathname]);
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
