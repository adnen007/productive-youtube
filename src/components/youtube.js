import axios from "axios";

const KEY = "AIzaSyAZ5HBKTnS-HATVruJt1vSXJdxVaWqn8sc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
    type: "video",
  },
});
