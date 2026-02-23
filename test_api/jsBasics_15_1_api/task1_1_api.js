const axios = require("axios");

async function fetchWithError() {
  try {
    await axios.get("https://jsonplaceholder.typicode.com/invalid-endpoint");
  } catch (error) {
    return "Something went wrong!";
  }
}

module.exports = { fetchWithError };