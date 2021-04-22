// Lesson1 BinaryGap (100%)
const binaryGap = (N) => {
  const binary = N.toString(2);

  let zeroCount = 0;
  let maximum = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      zeroCount++;
    } else {
      maximum = maximum < zeroCount ? zeroCount : maximum;
      zeroCount = 0;
    }
  }

  return maximum;
};

// Lesson2 CyclicRotation (100%)
const cyclicRotation = (A, K) => {
  const acc = new Array(A.length);
  return A.reduce((acc, cur, curIdx, arr) => {
    const targetIdx = (K + curIdx) % A.length;
    acc[targetIdx] = cur;
    return acc;
  }, acc);
};

// Lesson2 OddOccurencesInArray (66%)
// const oddOccurencesInArray = (A) => {
//   return A.reduce((acc, cur) => {
//     const idx = acc.indexOf(cur);
//     if (idx !== -1) {
//       acc.splice(idx, 1);
//     } else {
//       acc.push(cur);
//     }
//     return acc;
//   }, [])[0];
// };

// Lesson2 OddOccurencesInArray (77%)
// const oddOccurencesInArray = (A) => {
//   const sorted = A.sort();
//   if (A.length === 1) return A[0];

//   for (let i = 0; i < sorted.length - 1; i += 2) {
//     if (!sorted[i + 1]) return sorted[i];
//     if (sorted[i] !== sorted[i + 1]) return sorted[i];
//   }
// };

// Lesson2 OddOccurencesInArray (88%)
// const oddOccurencesInArray = (A) => {
//   const sorted = A.sort();
//   if (A.length === 1) return A[0];
//   while(sorted.length > 1) {
//     const num1 = sorted.pop();
//     const num2 = sorted.pop();
//     if (num1 !== num2) return num1;
//   }
// };

// Lesson2 OddOccurencesInArray (100%)
const oddOccurencesInArray = (A) => {
  const sorted = A.sort();
  while(sorted.length > 1) {
    const num1 = sorted.pop();
    const num2 = sorted.pop();
    if (num1 !== num2) return num1;
  }
  if (sorted.length === 1) return sorted[0];
};

// Lesson3 FrogJmp (100%)
const frogJmp = (X, Y, D) => {
  return Math.ceil((Y - X) / D);
}
