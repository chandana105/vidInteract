export const LOGO_URL = require("../assets/images/youutbelogo.png");

export const filtersList = [
  "All",
  "Bhakti",
  "Music",
  "Travel",
  "Korean Dramas",
  "News",
  "T-series",
  "Mixes",
  "Yoga",
  "Interviews",
  "Thrillers",
  "K-Pop",
];

export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_FETCH_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_FETCH_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${YOUTUBE_API_KEY}`;
