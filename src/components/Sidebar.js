import React from "react";
import { TiHome } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="col-span-1 shadow-lg ">
      <ul className="p-6">
        <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2 ">
          <TiHome size={24} />
          <h3 className="text-md">Home</h3>
        </li>
        <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2 ">
          <TiHome size={24} />
          <h3 className="text-md">Shorts</h3>
        </li>
        <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2">
          <TiHome size={24} />
          <h3 className="text-md">Subscriptions</h3>
        </li>

        <h1>You :-</h1>

        <ul className="  ">
          <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2 ">
            <TiHome size={24} />
            <h3 className="text-md">Your Channel</h3>
          </li>
          <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2 ">
            <TiHome size={24} />
            <h3 className="text-md">History</h3>
          </li>
          <li className="bg-slate-300 p-2 pr-5 rounded-lg flex items-center gap-5 mb-2">
            <TiHome size={24} />
            <h3 className="text-md">Your Videos</h3>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Sidebar;
