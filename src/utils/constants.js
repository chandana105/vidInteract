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

export const YOUTUBE_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    id: 1,
    comment: "base comment",
    username: "@nyj325",
    replies: [
      //2
      {
        id: 1,
        comment: "base comment reply 1",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "base comment reply 1's reply 1",
            username: "@nyj325",
            replies: [
              {
                id: 1,
                comment: "base comment reply 1's reply 1's reply",
                username: "@nyj325",
                replies: [],
              },
            ],
          },
          {
            id: 2,
            comment: "base comment reply 1's reply 2",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
      {
        id: 1,
        comment: "base comment reply 2",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "base comment reply 2's reply 1",
            username: "@nyj325",
            replies: [],
          },
          {
            id: 2,
            comment: "base comment reply 2's reply 2",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
      {
        id: 1,
        comment: "base comment reply 3",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "base comment reply 3rd 's reply 1",
            username: "@nyj325",
            replies: [],
          },
          {
            id: 2,
            comment: "base comment reply 3's reply 2",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    comment: "lorem ddd wwsss",
    username: "@nyj325",
    replies: [
      //2
      {
        id: 1,
        comment: "lorem ddd wwsss",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [
              {
                id: 1,
                comment: "lorem ddd wwsss",
                username: "@nyj325",
                replies: [],
              },
            ],
          },
          {
            id: 2,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
      {
        id: 1,
        comment: "lorem ddd wwsss",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [],
          },
          {
            id: 2,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
      {
        id: 1,
        comment: "lorem ddd wwsss",
        username: "@nyj325",
        replies: [
          //3
          {
            id: 1,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [],
          },
          {
            id: 2,
            comment: "lorem ddd wwsss",
            username: "@nyj325",
            replies: [],
          },
        ],
      },
    ],
  },
];

export const liveComments = [
  {
    id: 1,
    name: "Chandana Mahajan",
    comment: "hey, today is bright day. I want a job at earliest as possible.",
  },
];
