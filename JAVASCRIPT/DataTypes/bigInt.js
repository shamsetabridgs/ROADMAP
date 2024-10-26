let bigIntNumber = 123456789012345678901234567890n;   // BigInt Literal
let bingIntUsingConstructor = BigInt("123456789012345678901234567890");  // BigInt Constructor





//_____________________________________________________________Characteristics____________________________________________________
/*
let bigNumber = 900468753457453874574n;
console.log(bigNumber + 1n);               // 900468753457453874575n
*/





//______________________________________________________________Mathematical Operation____________________________________________
/*
let a = 100000000000000000000n;
let b = 2n;

console.log(a + b);  // Output: 100000000000000000002n
console.log(a - b);  // Output: 99999999999999999998n
console.log(a * b);  // Output: 200000000000000000000n
console.log(a / b);  // Output: 50000000000000000000n
console.log(a % b);  // Output: 0n
*/





//_______________________________________________________BigInt vs Number_________________________________________________________
/*
// It's not possible mathematical operation between Number and BigInt. For executing operation, We need type casting.

let bigIntValue = 10n;
let numberValue = 5;
//console.log(bigIntValue + numberValue);                   // TypeError: Cannot mix BigInt and other types, use explicit conversions

// Convert Number to bigInt
console.log(bigIntValue + BigInt(numberValue));            // 15n

// Convert bigInt to Number
console.log(Number(bigIntValue) + numberValue);            // 15
*/







//_____________________________________________________Comparison operation using BigInt______________________________________________
/*
console.log(10n > 5);        // Output: true
console.log(10n === 10);     // Output: false (BigInt !== Number)
console.log(10n == 10);      // Output: true (Loose equality)
*/






//______________________________________________________Limitation___________________________________________________________

// It has not Decimal Number. It doesn't support it.
/*
let decimalBigInt = 1.5n;   // SyntaxError: Invalid or unexpected token
*/

// Compatibility problem: Some browser doesn't support BIGINT. Because I has included from ES2020.