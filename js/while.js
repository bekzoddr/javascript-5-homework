// // While1:

// let A = 10;
// let B = 3;

// while (A > B) {
//   A--;
// }

// console.log(`A kesmaning bo'sh qismi: ${A}`);

// // While2:

// let A = 10;
// let B = 3;
// let count = 0;

// while (A > B) {
//   A -= B;
//   count++;
// }

// console.log(count);

// // While3:

// let n = 27;

// while (n % 3 === 0) {
//   n /= 3;
// }

// console.log(n === 1 ? "3 - ning darajasi" : "3 - ning darajasi emas");

// // While4:

// let n = 15;
// let m = 3;

// let quotient = Math.floor(n / m);
// let remainder = n % m;

// console.log(`Bo'lib butun qismi: ${quotient}, Qoldiq: ${remainder}`);

// // While5:

// let n = 12345;
// let reversed = 0;

// while (n > 0) {
//   reversed = reversed * 10 + n % 10;
//   n = Math.floor(n / 10);
// }

// console.log(`Berilgan son teskari tartibda: ${reversed}`);

// // While6:

// let n = 12345;
// let sum = 0;

// while (n > 0) {
//   sum += n % 10;
//   n = Math.floor(n / 10);
// }

// console.log(`Raqamlari yig'indisi: ${sum}`);

// // While7:

// let n = 12345;
// let hasDigit2 = false;

// while (n > 0) {
//   if (n % 10 === 2) {
//     hasDigit2 = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }

// console.log(hasDigit2 ? "2 raqami bor" : "2 raqami yo'q");

// // While8:

// let n = 12345;
// let hasOddDigit = false;

// while (n > 0) {
//   if (n % 10 % 2 !== 0) {
//     hasOddDigit = true;
//     break;
//   }
//   n = Math.floor(n / 10);
// }

// console.log(hasOddDigit ? "Toq raqam bor" : "Toq raqam yo'q");