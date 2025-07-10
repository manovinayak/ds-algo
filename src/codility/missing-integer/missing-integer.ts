function solution1(A: number[]): number {
  let min = 1;
  const uniqueValues = new Set(A);

  if (!A.every((x) => x < 0) && !uniqueValues.has(1)) {
    return min;
  }

  for (const value of uniqueValues) {
    if (value - 1 > 0 && !uniqueValues.has(value - 1)) {
      if (min === 1 || value - 1 < min) {
        min = value - 1;
      }
    } else if (value + 1 > 0 && !uniqueValues.has(value + 1)) {
      if (min === 1 || value + 1 < min) {
        min = value + 1;
      }
    }
  }

  return min;
}

console.log(solution1([1, 2, 3]));
console.log(solution1([-1, -3]));
console.log(solution1([-1, -3, 5]));
console.log(solution1([1, 3, 6, 4, 1, 2]));
console.log(solution1([1, 12, 2, 3]));
console.log(solution1([1, 2, 3, 4, 6, 10, 8]));
