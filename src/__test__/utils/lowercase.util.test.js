import { lowercase } from "modules/utilities/lowercase.util";

describe("Test case for Util to 'lowercase' ", () => {
  const mockWord = "THIS IS MOCKUP";
  const mockuplowercaseWordUtil = lowercase(mockWord);

  it("should return a string", () => {
    expect(typeof mockuplowercaseWordUtil).toBe("string");
  });

  it("should change lowercase letter into lowercase", () => {
    const mockuplowercaseWord = "this is mockup";
    expect(mockuplowercaseWordUtil).toBe(mockuplowercaseWord);
  });
});
