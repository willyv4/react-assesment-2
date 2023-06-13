const case1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].

const case2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

// Output ["a", "b", "c", "f", "i", "h", "g", "d", "e"]

const unroll = (matrix) => {
  const result = []; // Initialize an empty array to store the unrolled values

  let topRow = 0; // Initialize the top row index
  let bottomRow = matrix.length - 1; // Initialize the bottom row index
  let leftCol = 0; // Initialize the left column index
  let rightCol = matrix[0].length - 1; // Initialize the right column index

  // Loop until all elements have been traversed in a spiral pattern
  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse the top row from left to right
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(matrix[topRow][i]); // Push the value at the current position into the result array
    }
    topRow++; // Move down to the next row

    // Traverse the right column from top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(matrix[i][rightCol]); // Push the value at the current position into the result array
    }
    rightCol--; // Move left to the previous column

    // Check if there are more rows to traverse in the bottom row
    if (topRow <= bottomRow) {
      // Traverse the bottom row from right to left
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(matrix[bottomRow][i]); // Push the value at the current position into the result array
      }
      bottomRow--; // Move up to the previous row
    }

    // Check if there are more columns to traverse in the left column
    if (leftCol <= rightCol) {
      // Traverse the left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftCol]); // Push the value at the current position into the result array
      }
      leftCol++; // Move right to the next column
    }
  }

  console.log(result); // Print the result array (optional)
  return result; // Return the unrolled array
};

unroll(case1);

module.exports = unroll;
