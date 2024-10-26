//______________________________________________________________________________Introduction____________________________________________________________________

// Symbol is an unique data-types that used to create unique and unchangable value.





//____________________________________________________________________________Chanracteristcs_____________________________________________________________

//_________Unique Value: প্রতিটি Symbol মান হল ইউনিক, অর্থাৎ এটি অন্য কোনও Symbol এর সাথে সমান হতে পারে না।

//_________Unchangable: একবার তৈরি হলে, Symbol এর মান পরিবর্তন করা যায় না।

//_________Description: Symbol তৈরির সময় একটি বর্ণনা যুক্ত করা যেতে পারে, যা ডিবাগিং এর সময় সহায়ক হতে পারে। তবে এটি ইউজারের কাছে দৃশ্যমান নয়।






//______________________________________________________________Creating SYMBOL_________________________________________________________________________
/*
const sym1 = Symbol('description1');
const sym2 = Symbol('description2');
console.log(sym1);                       // Output: Symbol(description1)
console.log(sym2);                       // Output: Symbol(description2)
*/




//____________________________________________________________________Uniqueness________________________________________________________________________
/*
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');

console.log(sym1 == sym2);              // false      (যদিও বর্ণনা একই)
*/






//_________________________________________________________________Symbol & Object Property____________________________________________________________

// Symbol মূলত অবজেক্টের প্রপার্টি নাম হিসেবে ব্যবহার করা হয়। যেহেতু Symbol এর নামগুলি ইউনিক, তাই এটি সংঘর্ষ এড়াতে সাহায্য করে।
/*
const sym = Symbol('UniqueKey');

let obj = {
    [sym]: 'value associated with unique key',
};
console.log(obj[sym]);                             // value associated with unique key
*/





//____________________________________________________________Use of Symbol_________________________________________________________________________
/*
const id = Symbol('id');

const user = {
    name: 'Alice',
    [id]: 12345             // id property is a symbol
};
console.log(user.name);              // Alice
console.log(user[id]);               // 12345
*/







//_______________________________________________________________Global Symbol Registry____________________________________________________________

const sym1 = Symbol.for('sharedSymbol');
const sym2 = Symbol.for('sharedSymbol');

console.log(sym1 === sym2);                  // true  (গ্লোবাল রেজিস্ট্রি থেকে একই Symbol)
