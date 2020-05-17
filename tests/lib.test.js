const lib = require("../lib");

describe("absolute", () => {
  test("return positive when number is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  test("return positive when number is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  test("return 0 when number is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
