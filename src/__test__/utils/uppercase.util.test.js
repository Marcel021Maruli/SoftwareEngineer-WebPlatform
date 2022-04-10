import { uppercase } from "modules/utilities/uppercase.util";

describe("Test case for Util to 'uppercase' ", () => {
  const mockWord = "this is mockup";
  const mockupUppercaseWordUtil = uppercase(mockWord);

  it("should return a string", () => {
    expect(typeof mockupUppercaseWordUtil).toBe("string");
  });

  it("should change lowercase letter into uppercase", () => {
    const mockupUppercaseWord = "THIS IS MOCKUP";
    expect(mockupUppercaseWordUtil).toBe(mockupUppercaseWord);
  });
});
