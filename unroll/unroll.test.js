const unroll = require("./unroll"); // Assuming the unroll function is in a separate file

describe("unroll", () => {
  it("should return the unrolled array for a square matrix", () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    const result = unroll(square);
    expect(result).toEqual(expected);
  });

  it("should return the unrolled array for a smaller square matrix", () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    const result = unroll(smallerSquare);
    expect(result).toEqual(expected);
  });
});
