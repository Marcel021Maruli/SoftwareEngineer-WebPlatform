import { ALPHABET_AND_SPACE_MORE_THAN_THREE_LETTER } from "modules/constants/regex.constant";

describe("Test case for Regex constant", () => {
  describe("when test case is false", () => {
    const mockFalseTestCases = [
      {
        testSuite: "should return false when value less than 3 letters",
        mockValue: "ab",
      },
      {
        testSuite: "should return false when value has a number",
        mockValue: "abc123",
      },
      {
        testSuite: "should return false when value has uniqe character",
        mockValue: "ab@)!(",
      },
      {
        testSuite: "should return false when value the last character is space",
        mockValue: "abcd efg ",
      },
    ];

    mockFalseTestCases.map((testCase) => {
      const { testSuite, mockValue } = testCase;
      it(testSuite, () => {
        expect(
          ALPHABET_AND_SPACE_MORE_THAN_THREE_LETTER.test(mockValue),
        ).toBeFalsy();
      });
    });
  });

  describe("when test case true", () => {
    const mockTrueTestCases = [
      {
        testSuite: "should return true when value more than 3 letters",
        mockValue: "abc",
      },
      {
        testSuite:
          "should return true when value has more than 3 letters and has space",
        mockValue: "abc defg",
      },
    ];

    mockTrueTestCases.map((testCase) => {
      const { testSuite, mockValue } = testCase;
      it(testSuite, () => {
        expect(
          ALPHABET_AND_SPACE_MORE_THAN_THREE_LETTER.test(mockValue),
        ).toBeTruthy();
      });
    });
  });
});
