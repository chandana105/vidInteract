import { useEffect, useState } from "react";
import { YOUTUBE_FETCH_URL } from "../utils/constants";

const useGetVideoList = () => {
  const [videos, setVideos] = useState(null);

  const getVideoList = async () => {
    const response = await fetch(YOUTUBE_FETCH_URL);

    const json = await response.json();

    setVideos(json?.items);
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return { videos };
};

export default useGetVideoList;
