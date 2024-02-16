import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LOGO_URL, YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  // this is how our search cache will llook like
  /**
   *
   * searchCache =  {
   *  "iphone" : ["iphone11" , "iphone pro max"]
   * }
   */

  useEffect(() => {
    // API CALL
    // only if diff btw key storke is greater than 200ms

    // make an API CALL after every key press ===  getSearchSuggestions()
    // but ifthe diff btw 2 API calls is <200ms
    // decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        // then set the result of searchCache[searchQuery] direclty
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        // if its not present in cache , i should make an apio calland update my cache
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - ", searchQuery);
    const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);

    const json = await response.json();

    setSearchSuggestions(json[1]);

    // update cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));

    // console.log(json[1]);
  };

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
        {/* ITS A PERFORMANT SEARCH, making less api calla  */}
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

      <div className="col-span-1">
        <CgProfile size={30} className="self-end" />
      </div>
    </div>
  );
};

export default Header;

// now 2 more concepts
// 1. on clicking back button on written search query :- its still making api call :- need to fix
// 2. also to do caching of search query  (we 'll use redux as a cache)

/**
 * when i search for this :- "iphone"
 * search suggestions 1
 * search suggestions 2
 * search suggestions 3
 * search suggestions 4
 *
 *   so it will store the search resilts of my api call into store and everytime i am tryign for same keyword again
 * supose we have seen in "API REUSLTS :-  SEARCH QUERY" :- it gives api results - ip
 * so if my ip pr jo search siuggestiosn aaye the unko redux mein store krliya hai then
 * agr dobara mai ip krrhi then no api call will made else cached search resutls will be shown to user
 *
 */

// if(cache is there in redux) {
//   // sida suggestions set kro jo hum api call kre baad maarte the yhaa ndirect kro
//   setSearchSuggestions(set the data from cache);
//  } else {
//   getSearchSuggestions()
//  }

// dispatch(cacheResults({ [searchQuery]: json[1] }));
// will send in a nobj and key of an obje is [searchquery] and suggestiosn jo abhi set nhi hue ya aaye hain json[1]

// now 2 more concepts
// 1. on clicking back button on written search query :- its still making api call :- need to fix
// 2. also to do caching of search query  (we 'll use redux as a cache)

// PUTTING IN REDUX (IE CACHING) :- IT SOLVED BACK BUTTON ISSUE ALSO , on some it made coz it might have not cached it

// not to clear the store , coz in one session , how much u can search, if searchign for lakhs of time , then its bad to store it else fine
// for that we can use LRU  cache = leat recent used
// ie we can keep the store capacity to [100] as sson as search sotre reaches 100 keys , start removing fro mtop
