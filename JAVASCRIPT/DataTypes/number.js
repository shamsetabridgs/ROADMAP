/*
let integerNumber = 10;        // পূর্ণ সংখ্যা
let floatNumber = 10.5;        // দশমিক সংখ্যা
let negativeNumber = -25;      // ঋণাত্মক সংখ্যা
let scientificNotation = 2e5;  // বিজ্ঞানী নোটেশন, 2 * 10^5
*/





//___________________________________________Infinity_________________________________________
/*
console.log(10 / 0);       // Output: Infinity
console.log(-10 / 0);      // Output: -Infinity
*/






//_______________________________________NaN(Not a Number)______________________________________
/*
console.log("*" * 3);                   // NaN
console.log(Math.sqrt(-1));             // NaN
*/





//____________________________________(+, -, *, /)_______________________________________
/*
let a = 10;
let b = 3;
console.log(a + b);  // Output: 13
console.log(a - b);  // Output: 7
console.log(a * b);  // Output: 30
console.log(a / b);  // Output: 3.3333333333333335
*/





//___________________________________________Modulus_________________________________________
/*
console.log(6 % 5);  // Output: 1
*/





//__________________________________________Exponential_______________________________________
/*
console.log(3 ** 3);                   // 27
*/






//___________________________________________Number Method________________________________________
/*
//1.toString()
let number1 = 123;
console.log(number1.toString());              // "123"


//2.toFixed()
let number2 = 3.14159;
console.log(number2.toFixed(2));              // 3.14


//3. parseInt() & parseFloat()
console.log(parseInt("10.5"));                // 10
console.log(parseFloat("10.5"));              // 10.5
*/







//____________________________________Checking_____________________________________

console.log(isNaN("text"));           // true
console.log(isNaN(123));              // false


console.log(isFinite(10/0));          // false
console.log(isFinite(10/2));          // true