import { useEffect, useState } from "react";
import { cacheResults } from "../store/searchSlice";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { toggleMenu } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // API CALL

    // API CALL after every key press if diff btw two key strokes is <200ms ===  getSearchSuggestions()
    // but if the diff btw 2 Akey strokes  is >200ms decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        // if search suggestions not present in cache, make an api call
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);

    const json = await response.json();

    setSearchSuggestions(json[1]);

    // update cache  (if search suggestions not present i ncache, make an api call )
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return {
    handleToggleMenu,
    searchQuery,
    setSearchQuery,
    setShowSuggestions,
    showSuggestions,
    searchSuggestions,
  };
};

export default useSearch;
