import { useEffect, useState, useCallback } from "react";
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

  const getSearchSuggestions = useCallback(async () => {
    const response = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await response.json();
    setSearchSuggestions(json[1]);
    // update cache  (if search suggestions not present in cache, make an api call )
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache, getSearchSuggestions]);

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
