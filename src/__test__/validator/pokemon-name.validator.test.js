import { pokemonNameValidator } from "modules/validator/pokemon-name.validator";

describe("Test Case for Validator to validate Pokemon's name", () => {
  const mockData = [
    {
      nickname: "MOCKNICKNAME",
    },
    {
      nickname: "ANOTHER MOCKNICKNAME",
    },
    {
      nickname: "THIS IS MOCKNICKCNAME",
    },
  ];

  describe("When test case is false", () => {
    const mockFalseValue = [
      {
        testSuite: "should return false when nickname has existed",
        mockNickname: "mockNickname",
      },
      {
        testSuite: "should return false when nickname is empty",
        mockNickname: "",
      },
      {
        testSuite: "should return false when nickname has unique character",
        mockNickname: "abc:%!@",
      },
      {
        testSuite: "should return false when nickname has number",
        mockNickname: "abc123",
      },
      {
        testSuite: "should return false when nickname ended up with spacing",
        mockNickname: "abc ",
      },
    ];
    
    mockFalseValue.map((mockValue) => {
      const { testSuite, mockNickname } = mockValue;
      it(testSuite, () => {
        expect(pokemonNameValidator(mockData, mockNickname)).toBeFalsy();
      });
    });
  });

  it("should return true when nickname has not existed", () => {
    const mockNickname = "not exist nickname";
    expect(pokemonNameValidator(mockData, mockNickname)).toBeTruthy();
  });
});
