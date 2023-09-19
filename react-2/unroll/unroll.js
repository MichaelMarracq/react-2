const squareArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];


function unroll(squareArray) {
    let unrolled = []
    let layers = Math.ceil(squareArray.length / 2);

    for (let i = 0; i < layers; i++) {
        for (let j = i; j < squareArray.length - i; j++) {
            unrolled.push(squareArray[i][j]);
        }
        for (let j = i + 1; j < squareArray.length - i; j++) {
            unrolled.push(squareArray[j][squareArray.length - i - 1]);
        }
        if (i < squareArray.length - i - 1) {
            for (let j = squareArray.length - i - 2; j >= i; j--) {
                unrolled.push(squareArray[squareArray.length - i - 1][j]);
            }
            for (let j = squareArray.length - i - 2; j > i; j--) {
                unrolled.push(squareArray[j][i]);
            }
        }
    } 

    return unrolled;
}

module.exports = unroll;
