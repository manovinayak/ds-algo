// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function discIntersections(A: number[]): number {
  let count = 0;

  if (!Array.isArray(A) || A.length < 0 || A.length > 100000) {
    return -1;
  }

  for (let i = 0; i < A.length; i++) {
    if (count > 10000000) {
      return -1;
    }
    console.log(`center: ${i} => radius : ${A[i]}`);
    const selectedDiscCoordinates = [i - A[i], i + A[i]];
    for (let j = i + 1; j < A.length; j++) {
      const toCompareDiscCoordinates = [j - A[j], j + A[j]];
      console.log(
        ` =====> A[${i}] is between center: ${j} => radius : ${A[j]} : `,
        isBetween(selectedDiscCoordinates[0], toCompareDiscCoordinates) ||
          isBetween(selectedDiscCoordinates[1], toCompareDiscCoordinates) ||
          isBetween(toCompareDiscCoordinates[0], selectedDiscCoordinates) ||
          isBetween(toCompareDiscCoordinates[1], selectedDiscCoordinates),
      );
      if (
        isBetween(selectedDiscCoordinates[0], toCompareDiscCoordinates) ||
        isBetween(selectedDiscCoordinates[1], toCompareDiscCoordinates) ||
        isBetween(toCompareDiscCoordinates[0], selectedDiscCoordinates) ||
        isBetween(toCompareDiscCoordinates[1], selectedDiscCoordinates)
      ) {
        count++;
      }
    }
  }

  return count;
}

const isBetween = (num: number, range: number[]): boolean => {
  return num >= range[0] && num <= range[1];
};

// console.log(isBetween(10, [1, 10]));
// console.log(discIntersections([1, 5, 2, 1, 4, 0]));
console.log(discIntersections([1]));
console.log(discIntersections([]));
console.log(discIntersections([1, 1]));
