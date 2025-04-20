function solution1(S: string): number {
  const stack: string[] = [];
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      switch (char) {
        case ')':
          if (stack[stack.length - 1] === '(') {
            stack.pop();
          }
          break;
        case '}':
          if (stack[stack.length - 1] === '{') {
            stack.pop();
          }
          break;
        case ']':
          if (stack[stack.length - 1] === '[') {
            stack.pop();
          }
          break;
        default:
          break;
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(`result: `, solution1('{[()()]}'));
console.log(`result: `, solution1(''));
console.log(`result: `, solution1('([)()]'));
console.log(`result: `, solution1('([)asdasdasd()]'));
console.log(`result: `, solution1('{[asdasd(asdasd)(asdasdasd)]} '));
console.log(`result: `, solution1('()(()())((()())(()()))(()())()'));
console.log(''.length);
