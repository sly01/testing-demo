const lib = require("../lib");

test("absolute - return positive when number is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});
