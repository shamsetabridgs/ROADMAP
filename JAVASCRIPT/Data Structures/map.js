//___________________________________________________________________Introduction____________________________________________________________
/*
Map হলো জাভাস্ক্রিপ্টে একটি ডেটা স্ট্রাকচার যা কী-ভ্যালু (key-value) পেয়ারের আকারে ডেটা সংরক্ষণ করে। Object এর মতো দেখতে হলেও, Map এর কিছু বাড়তি সুবিধা রয়েছে। 
এর মাধ্যমে যে কোনো ধরনের ভ্যালুকে কী হিসেবে ব্যবহার করা যায় এবং এটি সহজেই ইটারেট করা যায়।
*/



//________________________________Characteristics of Map
/*
1. কী-ভ্যালু পেয়ারের মাধ্যমে ডেটা সংরক্ষণ করা হয়।
2. কোনো ডেটা টাইপ (string, number, object, ইত্যাদি) কী বা ভ্যালু হিসেবে ব্যবহার করা যায়।
3. ইনসার্শন অর্ডার মেইনটেইন করে; যেভাবে কী-ভ্যালু পেয়ার যোগ করা হয়েছে সেভাবেই প্রদর্শন করে।
4. Map এর সাইজ নির্ধারণের জন্য .size প্রপার্টি রয়েছে।
*/




//_________________________________________________________________Making and Using of Map___________________________________________________
/*
//______________________________________________________________________ Map তৈরি

let map = new Map();

//______________________________________________________________________ set(key, value) এর মাধ্যমে কী-ভ্যালু পেয়ার যোগ করা

map.set("name", "Rahim");
map.set("age", 25);
map.set("job", "Engineer");

console.log(map); 
// Output: Map { 'name' => 'Rahim', 'age' => 25, 'job' => 'Engineer' }

//______________________________________________________________________ get(key) এর মাধ্যমে মান অ্যাক্সেস করা

console.log(map.get("name")); // Output: Rahim
console.log(map.get("age"));  // Output: 25

//______________________________________________________________________ has(key) এর মাধ্যমে কী আছে কিনা চেক করা

console.log(map.has("job"));   // Output: true
console.log(map.has("salary")); // Output: false

//______________________________________________________________________ delete(key) এর মাধ্যমে কী-ভ্যালু পেয়ার মুছে ফেলা

map.delete("job");
console.log(map); 
// Output: Map { 'name' => 'Rahim', 'age' => 25 }

//______________________________________________________________________ clear() এর মাধ্যমে সব কী-ভ্যালু পেয়ার মুছে ফেলা

map.clear();
console.log(map); 
// Output: Map {}

//______________________________________________________________________ size প্রপার্টি দিয়ে Map এর সাইজ জানা

let map = new Map();
map.set("name", "Rahim");
map.set("age", 25);

console.log(map.size); // Output: 2

//_____________________________________________________________________ লুপিং করা Map এর উপরে

let map = new Map([
    ["name", "Rahim"],
    ["age", 25],
    ["job", "Engineer"]
]);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Output:
// name: Rahim
// age: 25
// job: Engineer







//_____________________________________________________________________Object বনাম Map________________________________________________________

বৈশিষ্ট্য	                                                      Object	                                              Map
কী টাইপ	                                                শুধুমাত্র string বা symbol	                            যে কোনো ডেটা টাইপ (object, etc.)
সাইজ জানা	                                                আলাদা উপায় নেই	                                       .size প্রপার্টি আছে
ইটারেশনের ক্রম	                                                 নির্দিষ্ট নয়	                                        ইনসার্শন অর্ডার অনুসরণ করে
ব্যবহারযোগ্যতা	                                           সাধারণত ছোট ডেটা সংরক্ষণে	                               বড় ডেটা সেটে আরও কার্যকর







//___________________________________________________________________Real Example___________________________________________________________

// ধরুন আমরা একাধিক ব্যবহারকারীর তথ্য সংরক্ষণ করছি, যেখানে userId কী এবং ব্যবহারকারীর ডেটা ভ্যালু হিসেবে সংরক্ষণ করছি।

*/


let users = new Map();
users.set(1, { name: "Rahim", age: 30 });
users.set(2, { name: "Karim", age: 25 });
users.set(3, { name: "Salma", age: 28 });

for (let [id, userInfo] of users) {
    console.log(`User ID: ${id}, Name: ${userInfo.name}, Age: ${userInfo.age}`);
}

// Output:
// User ID: 1, Name: Rahim, Age: 30
// User ID: 2, Name: Karim, Age: 25
// User ID: 3, Name: Salma, Age: 28