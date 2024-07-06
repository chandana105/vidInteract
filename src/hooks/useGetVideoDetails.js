import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";

const useGetVideoDetails = (videoId) => {
  const [videoDetail, setVideoDetail] = useState();
  const getVideoDetail = async (videoId) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
      );
      const json = await response.json();
      setVideoDetail(json.items[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideoDetail(videoId);
  }, [videoId]);

  return { videoDetail };
};

export default useGetVideoDetails;
