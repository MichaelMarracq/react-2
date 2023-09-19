const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it('unrolls a 2x2 square array correctly', () => {
    const square2x2 = [
      [1, 2],
      [3, 4]
    ];
    expect(unroll(square2x2)).toEqual([1, 2, 4, 3]);
  });

  it('unrolls a 5x5 square array correctly', () => {
    const square5x5 = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    expect(unroll(square5x5)).toEqual([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  });

  it('unrolls a single-element array correctly', () => {
    const singleElement = [[42]];
    expect(unroll(singleElement)).toEqual([42]);
  });

  it('unrolls a 3x3 square array correctly', () => {
    const square3x3 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(unroll(square3x3)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

});
