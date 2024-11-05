//______________________________________________________________________Introduction________________________________________________________
/*
এক্সপ্লিসিট টাইপ কাস্টিং (Explicit Type Casting) হলো সেই প্রক্রিয়া, যেখানে জাভাস্ক্রিপ্টে ডেভেলপার সরাসরি কোনো ডেটাটাইপকে অন্য ডেটাটাইপে রূপান্তর করে। 
এখানে জাভাস্ক্রিপ্ট নিজে থেকে কিছু করে না, বরং ডেভেলপার নিজেই ডেটাটাইপ পরিবর্তন করেন। এক্সপ্লিসিট টাইপ কাস্টিং ব্যবহার করে আপনি স্ট্রিংকে সংখ্যা, 
সংখ্যাকে স্ট্রিং, বুলিয়ান ইত্যাদিতে রূপান্তর করতে পারেন।
*/




//_______________________________________________Number Casting
/*
let str = "123";
let num = Number(str);
console.log(num);       // 123
console.log(typeof num); // "number"



console.log(Number(""));       // 0 (ফাঁকা স্ট্রিংকে 0 হিসেবে গণ্য করে)
console.log(Number("123abc")); // NaN (স্ট্রিংয়ে সংখ্যা ছাড়া অন্য অক্ষর থাকলে NaN দেয়)
console.log(Number(true));     // 1
console.log(Number(false));    // 0
*/






//___________________________________________________String Casting
/*
let num = 456;
let str = String(num);
console.log(str);         // "456"
console.log(typeof str);  // "string"



console.log(String(true));    // "true"
console.log(String(false));   // "false"
console.log(String(123));     // "123"
console.log(String(null));    // "null"
console.log(String(undefined)); // "undefined"
*/








//______________________________________________________Boolean Casting
/*
let val = 1;
let boolVal = Boolean(val);
console.log(boolVal);        // true
console.log(typeof boolVal); // "boolean"



console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false
console.log(Boolean("Hello"));    // true
console.log(Boolean(123));        // true
*/






//___________________________________________________A real example

let str = "42";
let num = 8;

// স্ট্রিং "42" কে সংখ্যায় রূপান্তর করে গুণ করা
let result = Number(str) * num;
console.log(result); // 336

// সংখ্যাকে স্ট্রিং এ রূপান্তর করে যোগ করা
let concatResult = str + String(num);
console.log(concatResult); // "428"