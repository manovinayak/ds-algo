function solution(A: number[]): number {
  if (!Array.isArray(A) || A.length < 3) {
    return 0;
  }

  A.sort((a, b) => a - b);

  for (let i = A.length - 1; i > 1; i--) {
    if (A[i - 1] + A[i - 2] > A[i]) {
      return 1;
    }
  }

  return 0;
}

console.log(solution([0, 0, 0, 0]));
console.log(solution([10, 2, 5, 1, 8, 20]));
console.log(solution([10, 50, 5, 1]));
console.log(solution([10, 50, 5]));
console.log(solution([10, 50]));
