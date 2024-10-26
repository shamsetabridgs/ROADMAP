//________________________________________________________________Creating BOOLEAN Value____________________________________________________________________
//_________________using literal
/*
let isTrue = true;   // Boolean true
let isFalse = false; // Boolean false
*/

//_______________using constructor
/*
let isTrue = Boolean(1);   // Output: true
let isFalse = Boolean(0);   // Output: false
*/

//______________Some Converted Boolean Value
/*
console.log(Boolean(0));          // Output: false
console.log(Boolean(""));         // Output: false
console.log(Boolean(null));       // Output: false
console.log(Boolean(undefined));  // Output: false
console.log(Boolean(NaN));        // Output: false

console.log(Boolean(1));          // Output: true
console.log(Boolean("Hello"));    // Output: true
console.log(Boolean([]));         // Output: true (শূন্য অ্যারে)
console.log(Boolean({}));         // Output: true (শূন্য অবজেক্ট)
*/





//_________________________________________________________Condition of BOOLEAN Data Type____________________________________________________________________
/*
let age = 18;

if (age >= 18) {
    console.log("You are an adult."); // Output: You are an adult.
} else {
    console.log("You are not an adult.");
}
*/







//________________________________________________________________Logical Operator_______________________________________________________________________

//_________AND(&&)
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false

//________OR(||)
console.log(true || false);   // Output: true
console.log(false || false);   // Output: false

//_______NOT(!)
console.log(!true);   // Output: false
console.log(!false);  // Output: true