//............................decleared variable but not assigned................................
/*
let myVar;
console.log(myVar);               // undefined
*/





//..........................if not exist return statement in function...........................
/*
function sayHello() {
}
let result = sayHello();
console.log(result);                             // undefined
*/






//.............................Accessing undefined object property...............................
/*
let person = { name: 'Alice' };
console.log(person.age);                     // undefined
*/





//.........................Accessing outer from array index...............................
/*
let numbers = [1, 2, 4];
console.log(numbers[5]);                 // number
*/





//..........................Difference between undefined and null............................
// 1. 'undefined' is a defined value from System. Which shows that, the variable or properties decleared but not assigned. 
// 2. 'null' is value by intentionaly free from variable or properties.

/*
let undefinedVar;
let nullVar = null;
console.log(undefinedVar);           // undefined
console.log(nullVar);                // null
*/








//..................................Checking undefined by typeof operator.........................
/*
let myVar;
console.log(typeof myVar);                    // undefined
*/



//...............................condition check....................................

let myVar;

if (myVar == null) {
    console.log('This is a null value.');
} else {
    console.log('This is not a null value');
}                                                // This is a null vlaue