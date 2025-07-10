function countDiv(A: number, B: number, K: number): number {
  // Implement your solution here
  let finalCount = 0;
  if (A < 0 || A > 2000000000 || K < 1 || K > 2000000000 || A > B) {
    return finalCount;
  }

  const start = Math.floor((A - 1) / K);
  const end = Math.floor(B / K);

  return end - start;
}

console.log(countDiv(7, 19, 2));
console.log(countDiv(54, 160, 6));
console.log(countDiv(4, 24, 4));
