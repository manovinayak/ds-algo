

const solution = (value: number) => {
  if (!isPositive(value)) {
    throw new Error('Number is not positive');
  }
  const binaryValueArray = getBinaryValue(value);
  let greatestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < binaryValueArray.length; i++) {
      if(i >0 && binaryValueArray[i] === 0) {
        currentGap++;
      } else {
        if (currentGap > greatestGap) {
          greatestGap = currentGap;
        }
        currentGap =0;
      }
  }

  return greatestGap;
}


/**
 *
 * @param value
 */
const getBinaryValue = (value: number): number[] => {
  let quotient = value;
  let binaryArray: number[] = [];

  while (quotient > 1) {
    const reminder = quotient % 2;
    binaryArray.unshift(reminder);
    quotient = Math.floor(quotient / 2) ;
  }
  binaryArray.unshift(quotient)
  // return parseInt(binaryArray.join(''), 10);
  return binaryArray;
}

const getLargestBinaryGap = (value: number) => {}

const isPositive = (value: number) => {
  return value > 0;
}

console.log(getBinaryValue(1041).toString());
console.log(solution(1041));