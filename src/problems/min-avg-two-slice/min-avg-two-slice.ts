function solution(A: number[]): number {
  let minAvg = Number.MAX_VALUE;
  let minStartPosition = 0;

  for (let i = 0; i < A.length; i++) {
    let currentAvg = (A[i] + A[i + 1]) / (i + 1 - i + 1);
    let currentStart = i;
    if (currentAvg < minAvg) {
      minAvg = currentAvg;
      minStartPosition = currentStart;
    } else if (currentAvg === minAvg && currentStart < minStartPosition) {
      minAvg = currentAvg;
      minStartPosition = currentStart;
    }

    if (i <= A.length - 2) {
      currentAvg = (A[i] + A[i + 1] + A[i + 2]) / (i + 2 - i + 1);
      if (currentAvg < minAvg) {
        minAvg = currentAvg;
        minStartPosition = currentStart;
      } else if (currentAvg === minAvg && currentStart < minStartPosition) {
        minAvg = currentAvg;
        minStartPosition = currentStart;
      }
      F;
    }
  }

  console.log(A);

  return minStartPosition;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8])); // 1
console.log(solution([4, 2])); // 0
console.log(solution([-1, -3, -5, -6]));
console.log(solution([1, 0, 0, 0]));
console.log(solution([5, 5, 5, 0]));
// console.log(solution([4, 2, 25, 1, 5, 8]));
