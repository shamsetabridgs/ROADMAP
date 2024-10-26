//_____________________________________________________________________Introduction_______________________________________________________________
/*
let value = null; // ভেরিয়েবলটি শুরুতে কোন মান নেই
console.log(value); // Output: null
*/




//________________________________________________________________Null vs Undefined_____________________________________________________________

// null: This is a deliberately set value that indicates "there is nothing here."
// undefined: This is a default value that indicates a variable has been declared but has not been assigned any value.
/*
let a;             // a হলো undefined
let b = null;     // b হলো null

console.log(a);   // Output: undefined
console.log(b);   // Output: null
*/





//____________________________________________________________Characteristics of Null_____________________________________________________________
//_________Type
/*
console.log(typeof null); // Output: "object"      // বিঃদ্রঃ: এটি একটি পরিচিত জাভাস্ক্রিপ্ট বৈশিষ্ট্য। এটি কিছুটা বিভ্রান্তিকর, কারণ null আসলে একটি বিশেষ মান যা অবজেক্ট নয়।
*/   


//________Values
/*
console.log(null == undefined); // Output: true (সামঞ্জস্যপূর্ণ তুলনা)
console.log(null === undefined); // Output: false (কঠোর তুলনা)
*/






//__________________________________________________________Setting Null__________________________________________________________
/*
let user = null;                   // User isn't right now.
*/





//_________________________________________________________Mathematical Operation with NULL____________________________________________

console.log(null + 5);       // Output: 5 (null কে 0 হিসেবে গণনা করা হয়)
console.log(null * 10);      // Output: 0 (null কে 0 হিসেবে গণনা করা হয়)
console.log(null === 0);     // Output: false
console.log(null == 0);      // Output: false