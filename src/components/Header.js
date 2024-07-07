import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";

import useSearch from "../hooks/useSearch";

const Header = () => {
  const {
    handleToggleMenu,
    searchQuery,
    setSearchQuery,
    setShowSuggestions,
    showSuggestions,
    searchSuggestions,
  } = useSearch();
  return (
    <div className="grid grid-flow-col px-8 py-1 shadow-lg bg-white items-center ">
      <div className="flex col-span-1 items-center gap-3   ">
        <div onClick={handleToggleMenu} className="cursor-pointer">
          <RxHamburgerMenu size={24} />
        </div>
        <a href={`/`}>
          <div>
            <img src={LOGO_URL} alt="logo" className="w-28" />
          </div>
        </a>
      </div>

      <div className="col-span-10  items-center justify-between flex flex-col gap-10">
        <div className="w-[80%] flex items-center justify-center">
          <input
            type="text"
            alt=""
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border-2 w-[60%] p-2 px-4 rounded-l-3xl border-slate-200 "
          />
          <button className="rounded-r-3xl border-y-2 border-r-2  p-2 w-[8%] px-5 bg-slate-200">
            <IoIosSearch size={24} />
          </button>
        </div>
        {/* ITS A PERFORMANT SEARCH, making less api calls  */}
        {showSuggestions && searchQuery && (
          <ul className="absolute top-14   w-[39.5%] py-2  rounded-lg px-4 shadow-xl bg-white">
            {searchSuggestions.map((suggestion) => (
              <li
                className="border-b  py-1 flex items-center gap-2 hover:bg-gray-100 "
                key={suggestion}
              >
                <IoIosSearch size={20} />
                <p className="text-base font-semibold ">{suggestion}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
