function solutionFish(A: number[], B: number[]): number {
  // Implement your solution here
  const downStreamLiveFishStack: number[] = [];
  let upstreamSurvivors = 0;

  for (let i = 0; i < A.length; i++) {
    let currentFishSize = A[i];

    if (B[i] === 1) {
      //downstream
      downStreamLiveFishStack.push(A[i]);
    } else {
      //upstream
      while (downStreamLiveFishStack.length > 0) {
        const lastDownStreamFishSize =
          downStreamLiveFishStack[downStreamLiveFishStack.length - 1];
        if (lastDownStreamFishSize > currentFishSize) {
          break;
        } else {
          downStreamLiveFishStack.pop();
        }
      }
      if (downStreamLiveFishStack.length === 0) {
        upstreamSurvivors++;
      }
    }
  }
  return upstreamSurvivors + downStreamLiveFishStack.length;
}

console.log(solutionFish([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) === 2);
console.log(solutionFish([4, 3, 2, 1, 1], [1, 0, 0, 0, 0]) === 1);
console.log(solutionFish([4, 3, 2, 1, 1], [1, 1, 1, 1, 1]) === 5);
console.log(solutionFish([4, 3, 2, 1, 1], [0, 0, 0, 0, 0]) === 5);
console.log(solutionFish([1, 2, 3, 4, 5], [1, 0, 1, 0, 1]) === 3);
