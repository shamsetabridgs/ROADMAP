//_________________________________________________________________Introduction_______________________________________________________________
/*
জাভাস্ক্রিপ্টে Keyed Collections বলতে এমন ডেটা স্ট্রাকচারকে বোঝায় যেগুলোতে কীগুলির সাথে ভ্যালু সংযুক্ত থাকে। 
এর মাধ্যমে আমরা কীগুলোর মাধ্যমে সহজে ডেটা অ্যাক্সেস করতে পারি। জাভাস্ক্রিপ্টে মূলত দুটি Keyed Collection রয়েছে: Map এবং Set।
*/





//__________________________________________________________________Map_____________________________________________________________________
/*
Map হলো একটি Keyed Collection যেখানে কীগুলো এবং তাদের সাথে সম্পর্কিত ভ্যালুগুলো সংরক্ষণ করা হয়। 
Object এর মতো হলেও Map ব্যবহার করলে কিছু সুবিধা পাওয়া যায়, যেমন যে কোনো ধরনের ডেটাকে কী হিসেবে ব্যবহার করা যায় এবং ইটারেট করা সহজ।
*/
/*
let map = new Map();
map.set("name", "Rahim");
map.set("age", 30);
map.set("job", "Engineer");

console.log(map.get("name")); // "Rahim"
console.log(map.size);        // 3
*/
/*
Map মেথডসমূহ
set(key, value): নতুন কী-ভ্যালু পেয়ার যোগ করে।

get(key): নির্দিষ্ট কী এর জন্য ভ্যালু রিটার্ন করে।

has(key): নির্দিষ্ট কী আছে কিনা পরীক্ষা করে।

delete(key): নির্দিষ্ট কী-ভ্যালু পেয়ার সরিয়ে ফেলে।

clear(): সব কী-ভ্যালু পেয়ার মুছে ফেলে।

size: Map এর আকার জানায় (কতগুলো এন্ট্রি আছে)।
*/





//_______________________________________________looping with MAP
/*
let map = new Map([
    ["name", "Rahim"],
    ["age", 30],
    ["job", "Engineer"]
]);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Rahim
// age: 30
// job: Engineer
*/








//________________________________________________________________Set_______________________________________________________________________
/*
Set হলো এমন একটি Keyed Collection যেখানে শুধুমাত্র ইউনিক ভ্যালুগুলো সংরক্ষণ করা হয়। 
এটি একই ধরনের ভ্যালু বারবার রাখতে দেয় না। এটি সাধারণত ডুপ্লিকেট ভ্যালু এড়ানোর জন্য ব্যবহৃত হয়।
*/


//______________________________rules of making set
/*
let set = new Set();
set.add("Apple");
set.add("Banana");
set.add("Mango");
set.add("Apple"); // ডুপ্লিকেট, তাই যোগ হবে না

console.log(set.size); // 3
console.log(set.has("Banana")); // true
*/

//____________________________Methods of set
/*
add(value): নতুন ইউনিক ভ্যালু যোগ করে।

has(value): নির্দিষ্ট ভ্যালু আছে কিনা পরীক্ষা করে।

delete(value): নির্দিষ্ট ভ্যালু সরিয়ে ফেলে।

clear(): সব ভ্যালু মুছে ফেলে।

size: Set এর আকার জানায় (কতগুলো ইউনিক এন্ট্রি আছে)।
*/


//__________________________looping with Set
/*
let set = new Set(["Apple", "Banana", "Mango"]);

for (let item of set) {
    console.log(item);
}
// Output:
// Apple
// Banana
// Mango
*/








//_______________________________________________________________Use case of Set and Map________________________________________________________

//___________________________________Map ব্যবহার করে ডেটা সংরক্ষণ
/*
let studentGrades = new Map();
studentGrades.set("Rahim", 85);
studentGrades.set("Karim", 90);
studentGrades.set("Salma", 88);

console.log(studentGrades.get("Karim")); // 90
*/



//__________________________________Set ব্যবহার করে ডুপ্লিকেট এড়ানো

let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];
let uniqueFruits = new Set(fruits);

console.log(uniqueFruits); // Set { 'Apple', 'Banana', 'Mango' }