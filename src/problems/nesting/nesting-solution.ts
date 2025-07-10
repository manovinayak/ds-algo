function solution1(S: string): number {
  let forwardBracketStack: string[] = [];
  // Implement your solution here
  if (S.length === 0) {
    return 1;
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      forwardBracketStack.push(S[i]);
    } else if (S[i] === ')') {
      if (forwardBracketStack.length === 0) {
        return 0;
      } else {
        forwardBracketStack.pop();
      }
    }
  }

  if (forwardBracketStack.length > 0) {
    return 0;
  } else {
    return 1;
  }
}

console.log(solution1(`(()(())())`) === 1);
console.log(solution1(`())`) === 0);
console.log(solution1(``) === 1);
console.log(solution1(`((())))`) === 0);
console.log(solution1(`(((((())))`) === 0);
console.log(solution1(`(()(())())`) === 1);
