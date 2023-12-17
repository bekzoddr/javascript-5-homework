// 5

// let inputNumber = (123454321);
// let isPalindrome = true;

// let numberString = String(inputNumber);
// let length = numberString.length;
// let start = 0;
// let end = length - 1;

// while (start < end) {
//     if (numberString[start] !== numberString[end]) {
//         isPalindrome = false;
//         break;
//     }
//     start++;
//     end--;
// }

// if (isPalindrome) {
//     console.log("Output: True");
// } else {
//     console.log("Output: False");
// }


// // 6

// let N_while = (100);
// let concatenatedNumbers_while = "";
// let j = 1;

// while (j <= N_while) {
//     concatenatedNumbers_while += j;
//     j++;
// }

// let count_while = 0;
// let searchNumber_while = 1;
// let k = 0;

// while (k < concatenatedNumbers_while.length) {
//     if (parseInt(concatenatedNumbers_while[k]) === searchNumber_while) {
//         count_while++;
//     }
//     k++;
// }

// console.log(`Output: ${count_while} ta`);



// 7

// let N = 20;
// let result = 0;
// let currentNumber = 1;

// while (currentNumber <= N) {
//   result += Number(String(currentNumber).split('').reduce((sum, digit) => sum + Number(digit), 0));
//   currentNumber++;
// }

// console.log(result);


// 8


let N = 20; 
let concatenatedNumber = '';
let currentNumber = 1;

while (currentNumber <= N) {
  concatenatedNumber += currentNumber;
  currentNumber++;
}

const numberOfDigits = concatenatedNumber.length;

console.log(numberOfDigits);


// 9

// let a = 4;
// let b = 8;

// for (let i = 0; i < a; i++) {
//     if (i === 0 || i === a - 1) {
//         console.log("* ".repeat(b));
//     } else {
//         console.log("*" + " ".repeat(b - 2) + " *");
//     }
// }

// 10

// let n = 50;
// let currentNumber = 2;
// let primeCount = 0;

// while (currentNumber <= n) {
//   let isPrime = true;
//   let divisor = 2;

//   while (divisor <= Math.sqrt(currentNumber)) {
//     if (currentNumber % divisor === 0) {
//       isPrime = false;
//       break;
//     }
//     divisor++;
//   }

//   if (isPrime) {
//     primeCount++;
//   }

//   currentNumber++;
// }

// console.log(`${n} Songacha   ${primeCount} ta tub son bor.`);


// 11

// let n = 200;
// let count = 0;
// let currentNumber = 11;

// while (currentNumber <= n) {
//   count++;
//   currentNumber += 11;
// }

// console.log(count);
