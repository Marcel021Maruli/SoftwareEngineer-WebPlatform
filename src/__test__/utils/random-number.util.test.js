import { randomNumber } from "modules/utilities/random-number.util";

describe("Test Case for utils to 'randomnumber' ", () => {
  it("should return a boolean", () => {
    const mockRandomNumber = randomNumber();
    expect(typeof mockRandomNumber).toBe("boolean");
  });
});
