import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="grid grid-flow-col px-8 shadow-lg bg-white items-center ">
      <div className="flex col-span-1 items-center gap-3   ">
        <div>
          <RxHamburgerMenu size={24} />
        </div>
        <div>
          <img src={LOGO_URL} alt="logo" className="w-28" />
        </div>
      </div>

      <div className="col-span-10  items-center justify-center flex">
        <div className="w-[80%] flex items-center justify-center">
          <input
            type="text"
            alt=""
            placeholder="Search"
            className="border-2 w-[60%] p-2 px-4 rounded-l-3xl border-slate-200 "
          />
          <button className="rounded-r-3xl border-y-2 border-r-2  p-2 w-[8%] px-5 bg-slate-200">
            <IoIosSearch size={24} />
          </button>
        </div>
      </div>

      <div className="col-span-1">
        <CgProfile size={30} className="self-end" />
      </div>
    </div>
  );
};

export default Header;
