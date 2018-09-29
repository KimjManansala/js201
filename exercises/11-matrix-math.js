// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]
function matrixAdd(m1, m2) {
  for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[i].length; j++) {
      m1[i][j] += m2[i][j]
    }
  }
  return m1
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]
function matrixMultiply(m1, m2) {
//   var m3 = ''
//   for (var i = 0; i < m1.length + 1; i++) {
//     for (var j = 0; j < m1[i].length; j++) {
//       m3 += ((m1[i][j] * m2[i][j]) + (m1[i][j + 1] * m2[i + 1][j]))
//     }
//   }
//   return m3
}

