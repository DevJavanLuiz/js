const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const concatArray = a1.concat(a2, [7, 8, 9]);
//   OU
const concatArray2 =[...a1, 'Javan', ...a2, ...[7, 8]]


console.log(concatArray, concatArray2);