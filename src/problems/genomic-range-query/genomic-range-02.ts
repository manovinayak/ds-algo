function genomicRange02(S: string, P: number[], Q: number[]): number[] {
  // Implement your solution here
  if (
    S === undefined ||
    S === null ||
    S.length <= 0 ||
    S.length > 100000 ||
    !Array.isArray(P) ||
    !Array.isArray(Q) ||
    P.length <= 0 ||
    Q.length <= 0 ||
    P.length > 50000 ||
    Q.length > 50000
  ) {
    return [];
  }

  const minimalImpactFactors = [];

  const map = new Map();
  map.set('A', 1);
  map.set('C', 2);
  map.set('G', 3);
  map.set('T', 4);

  const querySize = P.length;

  for (let i = 0; i < querySize; i++) {
    if (P[i] <= Q[i]) {
      const sequence: string = S.substring(P[i], Q[i] + 1);
      console.log(`sequence`, sequence);
      const valueSeq = Array.from(sequence, (char) => map.get(char));
      minimalImpactFactors.push(Math.min(...valueSeq));
    }
  }
  return minimalImpactFactors;
}

console.log(genomicRange02(`CAGCCTA`, [2, 5, 0], [4, 5, 6]));
console.log(genomicRange02(`GGGGGGG`, [2, 5, 0], [4, 5, 6]));
/*console.log(genomicRange(`CAGJCTA`, [2, 5, 0], [4, 5, 6]));
console.log(genomicRange(`CAGCCTA`, [5, 5, 0], [4, 5, 6]));
console.log(genomicRange(`C`, [2, 5, 0], [4, 5, 6]));
console.log(genomicRange(`CAGCCTA`, [], []));
console.log(genomicRange(``, [2, 5, 0], [4, 5, 6]));*/
