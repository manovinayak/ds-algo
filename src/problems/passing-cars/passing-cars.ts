function solution(A: number[]): number {
  let count = 0;
  let eastWardCars = 0;
  let MAX_PASSING_CARS_ALLOWED = 1000000000;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastWardCars++;
    } else {
      if (count > MAX_PASSING_CARS_ALLOWED) {
        return -1;
      }
      count = count + eastWardCars;
    }
  }
  return count;
}

console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([0, 0, 0, 0, 0]));
console.log(solution([1, 1, 1, 1, 1, 1]));
console.log(solution([1, 1, 1, 0, 0, 0]));
