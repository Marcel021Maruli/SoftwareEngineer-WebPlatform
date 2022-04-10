import { capitalizeWord } from "modules/utilities/capitalize-word.util";

describe("Test case for Util to 'capitalizeWord' ", () => {
  const mockWord = "this is mockup";
  const mockupcapitalizeWordWordUtil = capitalizeWord(mockWord);

  it("should return a string", () => {
    expect(typeof mockupcapitalizeWordWordUtil).toBe("string");
  });

  it("should change lowercase letter into capitalizeWord", () => {
    const mockupcapitalizeWordWord = "This Is Mockup";
    expect(mockupcapitalizeWordWordUtil).toBe(mockupcapitalizeWordWord);
  });
});
