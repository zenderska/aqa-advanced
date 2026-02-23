const axios = require("axios");

async function fetchPostsWithHeadersAndParams() {
  return axios.get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Authorization: "Bearer test-token",
      "Custom-Header": "CustomValue",
    },
    params: {
      _limit: 5,
      _page: 1,
    },
  });
}

module.exports = { fetchPostsWithHeadersAndParams };