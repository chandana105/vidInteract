import React from "react";
import { TiHome } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 shadow-lg ">
      <ul className="p-6">
        <Link to="/">
          <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-2 mb-2 ">
            <TiHome size={24} />
            <h3 className="text-md">Home</h3>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
