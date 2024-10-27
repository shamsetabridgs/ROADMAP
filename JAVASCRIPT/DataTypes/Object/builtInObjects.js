//_____________________________________________________Introduction_________________________________
/*
জাভাস্ক্রিপ্টে অনেক বিল্ট-ইন অবজেক্ট রয়েছে যা ডেভেলপারদের বিভিন্ন কার্য সম্পাদনে সাহায্য করে। 
এগুলি পূর্বনির্ধারিত এবং জাভাস্ক্রিপ্ট ইঞ্জিনে অন্তর্ভুক্ত থাকে, যা সহজে ব্যবহারযোগ্য। 
প্রতিটি বিল্ট-ইন অবজেক্টের নির্দিষ্ট মেথডস এবং প্রপার্টিস রয়েছে যা নির্দিষ্ট কাজগুলোকে সহজ করে।
*/




//_____________________________________________________________________________Some Built-in Objects____________________________________________________________

//_________1.String অবজেক্ট টেক্সট ম্যানিপুলেশন এবং স্ট্রিং রিলেটেড অপারেশনের জন্য ব্যবহৃত হয়।
/*
let str = 'Hello, World';
console.log(str.length);              // 12
console.log(str.toUpperCase());       // HELLO, WORLD
console.log(str.includes('world'));   // false
*/



//________2.Number অবজেক্ট সংখ্যার সাথে কাজ করার জন্য ব্যবহার করা হয়।
/*
let number = 123.456;
console.log(number.toFixed(2));                  // 123.45
console.log(Number.isInteger(10));               // true
console.log(Number.isNaN('Hello'));              // false
*/


//_______3.Boolean অবজেক্ট সত্য (true) বা মিথ্যা (false) মান ধরে।
/*
let isTrue = Boolean(1);   // true
let isFalse = Boolean(0);  // false
console.log(isTrue);       // Output: true
console.log(isFalse);      // Output: false
*/



//_______4.Array অবজেক্ট অনেকগুলো উপাদানকে একসাথে রাখার জন্য ব্যবহৃত হয়। এটি বিভিন্ন মেথড দিয়ে উপাদান ম্যানিপুলেট করতে দেয়।
/*
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);            // Output: 5
console.log(arr.push(6));           // Output: [1, 2, 3, 4, 5, 6]
console.log(arr.pop());             // Output: 6 (and arr becomes [1, 2, 3, 4, 5])
console.log(arr.includes(3));       // Output: true
*/



//_______5.Math অবজেক্ট বিভিন্ন গণিত সম্পর্কিত কাজের জন্য ব্যবহৃত হয়।
/*
console.log(Math.PI);             // Output: 3.141592653589793
console.log(Math.max(5, 10));     // Output: 10
console.log(Math.sqrt(16));       // Output: 4
console.log(Math.random());       // Output: Random number between 0 and 1
*/




//_______6.Date অবজেক্ট তারিখ এবং সময় সম্পর্কিত কাজের জন্য ব্যবহৃত হয়।
/*
let now = new Date();
console.log(now);                        // Output: current date and time
console.log(now.getFullYear());          // Output: current year
console.log(now.getMonth());             // Output: current month (0-based)
console.log(now.getDate());              // Output: current day of the month
*/



//_______7.Object অবজেক্ট একটি সাধারণ ডাটা স্ট্রাকচার হিসেবে ব্যবহৃত হয় যা কী-মূল্য জোড়া ধারণ করে।
/*
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name);      // Output: "Alice"
person.greet();                // Output: "Hello, my name is Alice"
*/




//_________8.RegExp অবজেক্ট নিয়মিত অভিব্যক্তি (Regular Expression) তৈরি করতে এবং টেক্সট ম্যাচিং করতে ব্যবহৃত হয়।
/*
let regex = /hello/i;  // "i" flag means case-insensitive
let str = "Hello World!";
console.log(regex.test(str));    // Output: true
console.log(str.match(regex));   // Output: ["Hello"]
*/




//_________9.JSON অবজেক্ট JSON ডাটা ম্যানিপুলেট করতে ব্যবহৃত হয়, যেমন সার্ভার থেকে ডেটা এক্সচেঞ্জ।
/*
let jsonString = '{"name": "John", "age": 30}';
let jsonObj = JSON.parse(jsonString);      // Converts JSON string to object
console.log(jsonObj.name);                 // Output: "John"

let newJsonStr = JSON.stringify(jsonObj);  // Converts object to JSON string
console.log(newJsonStr);                   // Output: '{"name":"John","age":30}'
*/




//____________10.Set অবজেক্ট অনন্য মানের একটি সংগ্রহ ধারণ করে, যেখানে একই মান একাধিকবার যোগ করা যায় না।
/*
let mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(5);  // Duplicate values are ignored

console.log(mySet.has(1));    // Output: true
console.log(mySet.size);      // Output: 2
*/



//___________11.Map অবজেক্ট কী-মূল্য জোড়ার একটি সংগ্রহ, যেখানে যেকোনো মান কী বা মান হিসেবে ব্যবহার করা যেতে পারে।
/*
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(myMap.size);

console.log(myMap.get('name'));        // Alice
console.log(myMap.size);               // 2
*/




//___________12.Promise অবজেক্ট অ্যাসিঙ্ক্রোনাস অপারেশনগুলির রেজাল্ট হ্যান্ডল করতে ব্যবহৃত হয়।

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("operation Successfull!");
    } else {
        reject("Operation Failed!");
    }
});

promise
    .then(result => console.log(result))              // operation Successfull!
    .catch(error => console.log(error));