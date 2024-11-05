//_____________________________________________________________________Introduction_____________________________________________________________
/*
JSON (JavaScript Object Notation) হলো একটি ডেটা বিন্যাস, যা মূলত জাভাস্ক্রিপ্ট অবজেক্টের মতই দেখতে, তবে এটি ভাষা নিরপেক্ষ এবং ডেটা বিনিময়ের জন্য বহুল ব্যবহৃত। 
JSON সহজেই পড়া যায় এবং এতে ডেটা কী-ভ্যালু পেয়ারের মাধ্যমে স্ট্রাকচার করা হয়। এটি মূলত সার্ভার এবং ক্লায়েন্ট এর মধ্যে ডেটা আদান-প্রদানের জন্য ব্যবহৃত হয়।

জাভাস্ক্রিপ্টে JSON ফরম্যাটে ডেটা পাঠাতে এবং গ্রহণ করতে বেশ কয়েকটি বিল্ট-ইন মেথড আছে।
*/




//_________________________________________________Example of JSON format
/*
1. ডেটা সবসময় কী-ভ্যালু পেয়ার হিসেবে থাকে।
2. কী (key) সবসময় ডাবল কোটেশনের ("") মধ্যে থাকবে।
3. ভ্যালু (value) স্ট্রিং, নাম্বার, বুলিয়ান, অ্যারে, বা অন্য অবজেক্ট হতে পারে।
*/
/*
{
    "name": "Rahim",
    "age": 25,
    "isStudent": true,
    "hobbies": ["Reading", "Gaming", "Programming"],
    "address": {
        "street": "123 Main St",
        "city": "Dhaka",
        "country": "Bangladesh"
    }
}
*/







//______________________________________________________JSON working with JavaScript
/*
1. JSON.parse(): JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে।
2. JSON.stringify(): জাভাস্ক্রিপ্ট অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তর করে।
*/






//_____________________________________________________Example of JSON.parse()
/*
let jsonString = '{"name": "Rahim", "age": 25, "isStudent": true}';

// JSON স্ট্রিং থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর
let obj = JSON.parse(jsonString);

console.log(obj.name);    // "Rahim"
console.log(obj.age);     // 25
console.log(obj.isStudent); // true
*/







//___________________________________________________Example JSON.stringify() 
/*
let student = {
    name: "Rahim",
    age: 25,
    isStudent: true
};

// জাভাস্ক্রিপ্ট অবজেক্ট থেকে JSON স্ট্রিংয়ে রূপান্তর
let jsonString = JSON.stringify(student);

console.log(jsonString);
// {"name":"Rahim","age":25,"isStudent":true}
*/





//____________________________________________________________Working with Nested JSON______________________________________________________
/*
let jsonString = '{"name": "Karim", "age": 30, "address": {"city": "Dhaka", "country": "Bangladesh"}}';

// JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করা
let obj = JSON.parse(jsonString);

console.log(obj.name);         // "Karim"
console.log(obj.address.city); // "Dhaka"
*/








//___________________________________________________________Nested JSON Data with Array______________________________________________________

let jsonString = `[
    {"name": "Rahim", "age": 25},
    {"name": "Karim", "age": 30}
]`;

// JSON স্ট্রিং থেকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করা
let obj = JSON.parse(jsonString);

console.log(obj[0].name); // "Rahim"
console.log(obj[1].age);  // 30
