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

// Lesson3 PermMissingElem (10%)
// const permMissingElem = (A) => {
//   const sorted = A.sort();
//   for(let i = 0; i < sorted.length; i++) {
//     if(sorted[i] !== i + 1) return i+1;
//   }
// }

// Lesson4 MissingInteger (100%)
const MissingInteger = (A) => {
  const counter = A.reduce((acc, cur) => {
    if((cur > 0) && (acc[cur] === undefined)) acc[cur] = true;
    return acc;
  }, [true]);

  for(let i = 0; i < counter.length; i++) {
    if((i !== 0) && (counter[i] === undefined)) return i;
  }

  return counter.length === 1 ? 1 : counter.length;
}

// Lesson4 PermCheck (100%)
const permCheck = (A) => {
  const acc = new Array(A.length);

  const counter = A.reduce((acc, cur) => {
    if (acc[cur - 1] === undefined) acc[cur - 1] = true;
    return acc;
  }, acc);
  
  for(let i = 0; i < counter.length; i++) {
    if(!counter[i]) return 0;
  }

  return 1;
}

// Lesson5 CountDiv (75%)
// const countDiv = (A, B, K) => {
//   let start = A;
//   while(start % K !== 0) {
//     start++;
//   }

//   let count = 0;
//   for(let i = start; i <= B; i = i + K) {
//     if(i % K === 0) count++;
//   }

//   return count;
// }

// Lesson5 CountDiv (75%)
// const countDiv = (A, B, K) => {
//   let start = A;
//   while(start % K !== 0) {
//     start++;
//   }

//   return parseInt(((B - start) / K)) + 1;
// }

// Lesson5 CountDiv (100%)
const countDiv = (A, B, K) => {
  let start = A;
  while(start % K !== 0) {
    if(start === B) return 0;
    start++;
  }

  return parseInt(((B - start) / K)) + 1;
}