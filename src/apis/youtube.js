import axios from "axios";
const KEY = "AIzaSyDNcj8FckBWKxo0RlGp1sBHBPB400Rokz8"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
