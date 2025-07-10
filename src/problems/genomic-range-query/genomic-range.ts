function genomicRange(S: string, P: number[], Q: number[]): number[] {
  const answers: number[] = [];
  const genomeMap = new Map();
  genomeMap.set('A', 1);
  genomeMap.set('C', 2);
  genomeMap.set('G', 3);
  genomeMap.set('T', 4);

  const prefixSumA = new Array(S.length + 1).fill(0);
  const prefixSumC = new Array(S.length + 1).fill(0);
  const prefixSumG = new Array(S.length + 1).fill(0);
  const prefixSumT = new Array(S.length + 1).fill(0);

  for (let i = 0; i < S.length; i++) {
    prefixSumA[i + 1] = prefixSumA[i] + (S[i] === 'A' ? 1 : 0);
  }
  for (let j = 0; j < S.length; j++) {
    prefixSumC[j + 1] = prefixSumC[j] + (S[j] === 'C' ? 1 : 0);
  }
  for (let k = 0; k < S.length; k++) {
    prefixSumG[k + 1] = prefixSumG[k] + (S[k] === 'G' ? 1 : 0);
  }
  for (let l = 0; l < S.length; l++) {
    prefixSumT[l + 1] = prefixSumT[l] + (S[l] === 'T' ? 1 : 0);
  }

  for (let m = 0; m < P.length; m++) {
    let start = P[m];
    let end = Q[m];
    const countA = prefixSumA[end + 1] - prefixSumA[start];
    const countC = prefixSumC[end + 1] - prefixSumC[start];
    const countG = prefixSumG[end + 1] - prefixSumG[start];
    const countT = prefixSumT[end + 1] - prefixSumT[start];

    console.log(
      `countA, countC, countG, countT: `,
      countA,
      countC,
      countG,
      countT,
    );
    if (countA > 0) {
      answers.push(genomeMap.get('A'));
    } else if (countC > 0) {
      answers.push(genomeMap.get('C'));
    } else if (countG > 0) {
      answers.push(genomeMap.get('G'));
    } else if (countT > 0) {
      answers.push(genomeMap.get('T'));
    }
  }
  return answers;
}

// console.log(genomicRange(`CAGCCTA`, [2, 5, 0], [4, 5, 6]));
// console.log(genomicRange(`GGGGGGG`, [2, 5, 0], [4, 5, 6]));
// console.log(genomicRange(`CAGJCTA`, [2, 5, 0], [4, 5, 6]));
console.log(genomicRange(`CAGCCTA`, [5, 5, 0], [4, 5, 6]));
console.log(genomicRange(`C`, [2, 5, 0], [4, 5, 6]));
console.log(genomicRange(`CAGCCTA`, [], []));
console.log(genomicRange(``, [2, 5, 0], [4, 5, 6]));
