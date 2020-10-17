function mergeArrays(arr1, arr2) {
  arr1.push(...arr2);
  return arr1.sort((a, b) => a - b);
}

console.log(mergeArrays([], []));
console.log(mergeArrays([], [7, 8, 9]));
console.log(mergeArrays([10, 11, 12], []));
console.log(mergeArrays([12, 14, 16], [11, 13, 17]));
console.log(mergeArrays([22, 24, 26, 28], [21, 27]));
