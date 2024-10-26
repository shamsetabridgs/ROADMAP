//.................................Length Property.................................
/*
let text = 'Hello, World';
console.log(text.length);
*/



//.................................toUpperCase() & toLowerCase method.......................
/*
let text = 'Hello, World';
console.log(text.toUpperCase());          // HELLO, WORLD
console.log(text.toLowerCase());          // hello, world
*/



//................................slice() method....................................
/*
let text = 'Hello, Javascript';
console.log(text.slice(0, 5));           // Hello
console.log(text.slice(7))               // Javascript
*/





//...............................replace() method.....................................
/*
let text = 'Hello, Javascript';
console.log(text.replace('Javascript', 'world'));           // Hello, world
*/




//....................................concate() method......................................
/*
let firstname = 'John';
let lastname  = 'Doe'
console.log(firstname.concat(' ',lastname));               // John Doe
*/





//...................................trim() method...................................
/*
let text = '      Hello, Javascript!      '
console.log(text.trim());                // Hello, Javascript! (from starting to ending)
*/





//.......................................charAt() [finding position]....................................
/*
let text = 'Hello';
console.log(text.charAt(1));          // e
*/





//.........................................split()  [arrage a string to a definite delimeter in an array]........................................
/*
let text = 'Hello, World';
console.log(text.split(" "));         // [ 'Hello,', 'World' ]
*/





//..........................................string interpolation............................................
/*
let name = 'John';
let age  = 25;
let text = `Hi guys my name is ${name} & I am ${age} years old`;
console.log(text);                                       // Hi guys my name is John & I am 25 years old
*/