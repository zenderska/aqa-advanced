const axios = require("axios");
const { fetchPostsWithHeadersAndParams } = require("./task_2_1_api.js");


jest.mock("axios");

describe("fetchPostsWithHeadersAndParams", () => {
  it("should send correct headers and params", async () => {
    axios.get.mockResolvedValue({ data: [] });

    await fetchPostsWithHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          Authorization: "Bearer test-token",
          "Custom-Header": "CustomValue",
        },
        params: {
          _limit: 5,
          _page: 1,
        },
      }
    );
  });
});