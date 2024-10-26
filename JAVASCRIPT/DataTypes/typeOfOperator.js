//_____________________________________________________________Introduction_________________________________________________________

// জাভাস্ক্রিপ্টে typeof একটি অপারেটর যা একটি ভেরিয়েবলের ডাটা টাইপ নির্ধারণ করতে ব্যবহৃত হয়। এটি একটি স্ট্রিং ফেরত দেয় যা ভেরিয়েবলের টাইপ নির্দেশ করে।




//___________________________________________________________Use Case_____________________________________________________________

//_______typeof অপারেটরটি যেকোনো ভেরিয়েবলের সামনে ব্যবহার করা যেতে পারে এবং এটি নিম্নলিখিত ডাটা টাইপগুলির জন্য স্ট্রিং ফেরত দেয়:
// 1.undefined,  2.boolean, 3.number, 4.string, 5.function, 6.object, 7.symbol(From ES6)




//__________________________________________________________Exmple_________________________________________________________________
/*
let num = 42;
let str = "Hello";
let isTrue = true;
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let func = function() {};
let sym = Symbol('symbol');
let undf;

console.log(typeof num);      // Output: "number"
console.log(typeof str);      // Output: "string"
console.log(typeof isTrue);   // Output: "boolean"
console.log(typeof obj);      // Output: "object"
console.log(typeof arr);      // Output: "object" (arrays are also objects)
console.log(typeof func);     // Output: "function"
console.log(typeof sym);      // Output: "symbol"
console.log(typeof undf);     // Output: "undefined"
*/






//____________________________________________________Primitive DataType__________________________________________________________________
/*
let x = 10;         // Number
let y = "10";      // String
let z = true;      // Boolean
let u;             // Undefined
let v = null;      // Object (but null is a special case)

console.log(typeof x); // Output: "number"
console.log(typeof y); // Output: "string"
console.log(typeof z); // Output: "boolean"
console.log(typeof u); // Output: "undefined"
console.log(typeof v); // Output: "object" (this is a historical bug in JavaScript)
*/






//_________________________________________________________Object & Array_______________________________________________________________

/*
let person = { name: "Alice", age: 25 };
let numbers = [1, 2, 3, 4];

console.log(typeof person); // Output: "object"
console.log(typeof numbers); // Output: "object" (arrays are a type of object)
*/





//_______________________________________________________Function_______________________________________________________________________
/*
function greet() {
    return "Hello!";
}

console.log(typeof greet); // Output: "function"
*/





//____________________________________________________________Used CASE/ EXAMPLE/ INSTANCE_____________________________________________
/*
let input = "Hello World";

if (typeof input === "string") {
    console.log("Input is a string.");
} else {
    console.log("Input is not a string.");
}                                                               // Output: Input is a string.
*/