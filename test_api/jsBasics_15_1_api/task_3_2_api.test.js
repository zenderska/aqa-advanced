const axios = require("axios");
const { getUser } = require("./task_3_1_api.js");

jest.mock("axios");

describe("getUser", () => {
  it("should return user data when request succeeds", async () => {
    const mockUser = { id: 1, name: "Leanne Graham" };

    axios.get.mockResolvedValue({ data: mockUser });

    const result = await getUser(1);

    expect(result).toEqual(mockUser);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1"
    );
  });

  it("should throw error when request fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    await expect(getUser(1)).rejects.toThrow("Failed to fetch user");
  });
});