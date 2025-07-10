function solution(A: number[]): number {
  if (!Array.isArray(A) || A.length < 3 || A.length > 100000) {
    return 0;
  }

  const isValidRange = A.every((num: number) => num <= 1000 && num >= -1000);
  if (!isValidRange) {
    return 0;
  }

  // Implement your solution here
  const sorted = A.sort((a, b) => a - b);
  console.log(`sorted`, sorted);

  const maxOfLargest =
    sorted[sorted.length - 1] *
    sorted[sorted.length - 2] *
    sorted[sorted.length - 3];

  const max2Small1Large = sorted[0] * sorted[1] * sorted[sorted.length - 1];
  return Math.max(maxOfLargest, max2Small1Large);
}

console.log(solution([10, 10, 10]));
console.log(solution([-6, -5, -4, -3, -2, -1, 0]));
// console.log(solution([1, 0, -1, -2, -3, -3]));
// console.log(solution([-3, 1, 2, -2, 5, 6]));
// console.log(solution([0, 0, 0]));
// console.log(solution([1, 1, 21, 5, -1000]));
// console.log(solution([-1, -1, -21, -5, -1000]));
// console.log(solution([-5, 5, -5, 4]));
// console.log(solution([-25, -10, -5, 5, -5, 4]));
// console.log(solution([-25, -10, -5, -15]));
console.log(solution([-5, 5, -5, 4]));
