const solution = (value: number) => {
  if (!isPositive(value)) {
    throw new Error('Number is not positive');
  }
  // const binaryValueArray = getBinaryValue(value);
  const binaryValue = convertToBinary(value);
  if (!binaryValue) {
    throw new Error('Binary value is empty');
  }

  const binaryValueArray = binaryValue.split('').map((value) => {
    return Number(value);
  });
  console.log(binaryValue);
  let greatestGap = 0;
  let currentGap = 0;

  for (let i = 0; i < binaryValueArray.length; i++) {
    if (i > 0 && binaryValueArray[i] === 0) {
      currentGap++;
    } else {
      if (currentGap > greatestGap) {
        greatestGap = currentGap;
      }
      currentGap = 0;
    }
  }
  return greatestGap;
};

const convertToBinary = (value: number) => {
  return value.toString(2);
};

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
    quotient = Math.floor(quotient / 2);
  }
  binaryArray.unshift(quotient);
  return binaryArray;
};

const isPositive = (value: number) => {
  return value > 0;
};

console.log(`1041 => `, solution(1041));
console.log(`10 => `, solution(10));
console.log(`32 => `, solution(32));
console.log(`15 => `, solution(15));
