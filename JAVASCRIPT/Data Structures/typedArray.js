//________________________________________________________________Introduction__________________________________________________________
/*
JavaScript-এর TypedArray হলো এক ধরনের ডেটা স্ট্রাকচার যা শুধু এক ধরনের ডেটা সংরক্ষণ করে এবং মূলত বাইনারি ডেটা প্রসেসিং-এর জন্য ব্যবহৃত হয়। 
এটি সাধারণ Array থেকে দ্রুততর, কারণ TypedArray-এর আকার স্থির (fixed) এবং একক ডেটা টাইপ নিয়ে কাজ করে। 
TypedArray-এর মূল ব্যবহারক্ষেত্র হলো উচ্চ-পারফরম্যান্সের প্রয়োজনীয় কাজে, যেমন ইমেজ প্রসেসিং, ওয়েব অ্যাপ্লিকেশনের বাইনারি ডেটা ম্যানিপুলেশন, এবং বিভিন্ন মিডিয়া ফাইল প্রসেসিং।
*/




//_______________________________________________________________Type of TypedArray_____________________________________________________
/*
JavaScript বিভিন্ন ধরনের TypedArray সরবরাহ করে, প্রতিটি নির্দিষ্ট ডেটা টাইপ ধরে রাখার জন্য ডিজাইন করা হয়েছে। 
এখানে জনপ্রিয় কিছু TypedArray এবং তাদের ধরন সম্পর্কে আলোচনা করা হলো:

1. Int8Array: ৮-বিট signed integer (-128 থেকে 127)
2. Uint8Array: ৮-বিট unsigned integer (0 থেকে 255)
3. Uint8ClampedArray: ৮-বিট unsigned integer যা ক্ল্যাম্পড মান প্রদান করে (0 থেকে 255) এবং overflow হলে 255 এ সীমাবদ্ধ রাখে।
4. Int16Array: ১৬-বিট signed integer (-32,768 থেকে 32,767)
5. Uint16Array: ১৬-বিট unsigned integer (0 থেকে 65,535)
6. Int32Array: ৩২-বিট signed integer (-2,147,483,648 থেকে 2,147,483,647)
7. Uint32Array: ৩২-বিট unsigned integer (0 থেকে 4,294,967,295)
8. Float32Array: ৩২-বিট floating-point number
9. Float64Array: ৬৪-বিট floating-point number
*/





//___________________________________________________________Creating Typed Array_______________________________________________________
/*
TypedArray তৈরি করার জন্য একটি নির্দিষ্ট কনস্ট্রাক্টর ব্যবহার করতে হয়, যেমন Int8Array, Uint16Array ইত্যাদি। 
এটির জন্য ডেটা, ব্যাফার, বা নির্দিষ্ট আকার সরবরাহ করা যেতে পারে।
*/



//__________________Fixed value Typed Array
/*
// 8-bit unsigned integer Array
const byteArray = new Uint8Array([10, 20, 30, 40]);
console.log(byteArray[2]); // Output: 30
*/


//_________________Fixed shape Type Array
/*
// 10-element 32-bit floating point Array
const floatArray = new Float32Array(10);
floatArray[0] = 3.14;
console.log(floatArray[0]); // Output: 3.14
*/



//________________Type Array by Array Buffer
/*
// 16 বাইটের একটি ArrayBuffer তৈরি
const buffer = new ArrayBuffer(16);

// 32-bit integer TypedArray তৈরি যা buffer-এর প্রথম 4টি ইন্টিজার ধরে
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log(int32View[0]); // Output: 42
*/





//_____________________________________________________________Methods and Property_______________________________________________________
/*
.set(): অন্য একটি TypedArray বা Array থেকে মান কপি করে।
.subarray(): মূল TypedArray-এর একটি অংশ নির্দিষ্ট করে উপ-অ্যারে (subarray) তৈরি করে।
.buffer: TypedArray এর অন্তর্গত ArrayBuffer প্রদান করে।
*/
/*
const array1 = new Uint8Array([10, 20, 30, 40]);
const array2 = new Uint8Array(2);
array2.set(array1.subarray(1, 3));

console.log(array2); // Output: Uint8Array [20, 30]
*/





//____________________________________________________________Benefits of Typed Array______________________________________________________
/*
1. উচ্চ-পারফরম্যান্স: TypedArray একই ধরনের ডেটা ব্যবহার করে, যা দ্রুত ডেটা অ্যাক্সেস এবং প্রসেসিং নিশ্চিত করে।
2. মেমোরি ব্যবস্থাপনা: নির্দিষ্ট আকারের কারণে মেমোরি ব্যবহার নির্দিষ্ট থাকে।
3. বাইনারি ডেটা ম্যানিপুলেশন: মিডিয়া প্রসেসিং, ওয়েবসকেটস এবং অন্যান্য বাইনারি ডেটার ক্ষেত্রে ব্যবহৃত হয়।
*/