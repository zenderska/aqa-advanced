const axios = require("axios");

async function getUser(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}

module.exports = { getUser };