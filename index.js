// // EXAMPLE 1 - Check if String contains Special Characters in JavaScript

// function containsSpecialChars(str) {
//   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//   return specialChars.test(str);
// }

// console.log(containsSpecialChars('hello!')); // 👉️ true
// console.log(containsSpecialChars('abc')); // 👉️ false
// console.log(containsSpecialChars('one two')); // 👉️ false

// if (containsSpecialChars('hello!')) {
//   // 👇️ this runs
//   console.log('✅ string contains special characters');
// } else {
//   console.log('⛔️ string does NOT contain special characters');
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if String contains Special Characters using `Array.some()`

// function containsSpecialChars(str) {
//   const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;

//   const result = specialChars.split('').some(specialChar => {
//     if (str.includes(specialChar)) {
//       return true;
//     }

//     return false;
//   });

//   return result;
// }

// console.log(containsSpecialChars('hello!')); // 👉️ true
// console.log(containsSpecialChars('abc')); // 👉️ false
// console.log(containsSpecialChars('one two')); // 👉️ false

// if (containsSpecialChars('hello!')) {
//   // 👇️ this runs
//   console.log('✅ string contains special characters');
// } else {
//   console.log('⛔️ string does NOT contain special characters');
// }

// ------------------------------------------------------------------

// EXAMPLE 3 -
