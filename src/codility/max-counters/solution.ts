const solution = (N: number, A: number[]): number[] => {
  if (
    N < 1 ||
    N > 100000 ||
    !Array.isArray(A) ||
    A.length < 1 ||
    A.length > 100000
  ) {
    return [];
  }

  const result: number[] = new Array(N);
  result.fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      increase(result, A[i] - 1);
    } else if (A[i] === N + 1) {
      maxCounter(result);
    }
  }

  return result;
};

const increase = (N: number[], index: number): number[] => {
  N[index]++;
  return N;
};

const maxCounter = (N: number[]): number[] => {
  const maxValue = Math.max(...N);
  N.fill(maxValue);
  return N;
};

// console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
// console.log('---------------------------');
// console.log(solution(5, []));
// console.log('---------------------------');
// console.log(solution(10, [3, 4, 4, 6, 1, 4, 4]));
console.log(solution(10, [11, 11, 11, 11, 11, 11, 11]));
