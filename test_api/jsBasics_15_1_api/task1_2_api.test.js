const axios = require("axios");
const { fetchWithError } = require("./task1_1_api.js");

jest.mock("axios");

describe("fetchWithError", () => {
  it("should handle error and return error message", async () => {
    axios.get.mockRejectedValue(new Error("404 Not Found"));

    const result = await fetchWithError();

    expect(result).toBe("Something went wrong!");
  });
});