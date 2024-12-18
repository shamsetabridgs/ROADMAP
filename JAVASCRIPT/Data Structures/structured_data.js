//______________________________________________________________Introduction_______________________________________________________________
/*
জাভাস্ক্রিপ্টে স্ট্রাকচার্ড ডেটা (Structured Data) বলতে এমন ডেটা বোঝায় যেটি নির্দিষ্ট কাঠামো অনুসরণ করে থাকে এবং সহজে অ্যাক্সেস, 
পরিচালনা এবং সংশোধন করা যায়। জাভাস্ক্রিপ্টে স্ট্রাকচার্ড ডেটা সাধারণত অবজেক্ট (Object) এবং অ্যারেই (Array) এর মাধ্যমে গঠন করা হয়। 
এগুলোকে নেস্টেড (Nested) আকারেও তৈরি করা যায়, অর্থাৎ একটি অবজেক্টের মধ্যে অ্যারেই বা আরেকটি অবজেক্ট থাকতে পারে। এছাড়াও, 
JSON (JavaScript Object Notation) ডেটা আদান-প্রদানের জন্য বহুল ব্যবহৃত একটি ফরম্যাট যা স্ট্রাকচার্ড ডেটা হিসাবে ব্যবহার করা হয়।
*/





//___________________________________________________________________Object___________________________________________________________________

//_________________জাভাস্ক্রিপ্ট অবজেক্ট একটি কী-ভ্যালু পেয়ার (key-value pair) ভিত্তিক স্ট্রাকচার। অবজেক্ট ডেটা স্টোর এবং অ্যাক্সেস করতে খুবই কার্যকর।
/*
let person = {
    name: "Rahim",
    age: 30,
    job: "Engineer",
    address: {
        street: "123 Main St",
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(person.name);       // "Rahim"
console.log(person.address.city); // "Dhaka"
*/






//___________________________________________________________________Array___________________________________________________________________

//___________জাভাস্ক্রিপ্টে অ্যারেই হলো একটি ধরণের স্ট্রাকচার যা একাধিক ভ্যালুকে একটি তালিকা আকারে সংরক্ষণ করতে পারে। এটি ইনডেক্স ব্যবহার করে প্রতিটি ভ্যালু অ্যাক্সেস করা যায়।
/*
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Mango"
*/







//____________________________________________________________________Array of Object_______________________________________________________

//______অবজেক্টের অ্যারেই তৈরি করে আমরা একটি গোষ্ঠীর একাধিক অবজেক্ট সংরক্ষণ করতে পারি। এটি সাধারণত তখন ব্যবহৃত হয় যখন আমাদের একাধিক একই ধরনের ডেটা রাখতে হয়।
/*
let employees = [
    { name: "Rahim", age: 25, job: "Developer" },
    { name: "Karim", age: 30, job: "Designer" },
    { name: "Salma", age: 28, job: "Manager" }
];

console.log(employees[1].name); // "Karim"
console.log(employees[2].job);  // "Manager"
*/






//___________________________________________________________________JSON (JavaScript Object Notation)______________________________________________
/*
JSON হলো স্ট্রাকচার্ড ডেটা আদান-প্রদানের জন্য একটি জনপ্রিয় ফরম্যাট, যা মূলত জাভাস্ক্রিপ্ট অবজেক্টের মতো দেখায়। এটি সার্ভার এবং ক্লায়েন্টের মধ্যে ডেটা পাঠানোর জন্য বহুল ব্যবহৃত হয়। 
JSON ফরম্যাট সাধারণত একটি স্ট্রিং আকারে থাকে, এবং JSON.parse() এবং JSON.stringify() ফাংশন ব্যবহার করে এটি জাভাস্ক্রিপ্ট অবজেক্ট এবং স্ট্রিংয়ে রূপান্তর করা যায়।
*/

/*
let jsonString = '{"name": "Rahim", "age": 30, "city": "Dhaka"}';
let obj = JSON.parse(jsonString);

console.log(obj.name); // "Rahim"
console.log(obj.city); // "Dhaka"
*/









//___________________________________________________________________More complex structured data___________________________________________________

let school = {
    name: "ABC School",
    location: "Dhaka",
    students: [
        { name: "Rahim", grade: "A" },
        { name: "Karim", grade: "B" }
    ],
    teachers: [
        { name: "Mr. A", subject: "Math" },
        { name: "Ms. B", subject: "Science" }
    ]
};

console.log(school.students[0].name);  // "Rahim"
console.log(school.teachers[1].subject); // "Science"