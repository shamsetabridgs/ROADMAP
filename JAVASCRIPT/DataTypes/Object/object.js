//______________________________________________________________________Introduction______________________________________________________________
/*
জাভাস্ক্রিপ্টে অবজেক্ট একটি ডাটা স্ট্রাকচার যা কী-মূল্য জোড়া (key-value pairs) ধারণ করে। এটি জটিল ডেটা সংরক্ষণ এবং সংগঠিত করার জন্য ব্যবহৃত হয়। 
অবজেক্টগুলি জাভাস্ক্রিপ্টের একটি মৌলিক উপাদান এবং এটি বিভিন্ন ধরনের তথ্য ধারণ করতে পারে।
*/





//_______________________________________________________________Ways of creating Objects_________________________________________________________

//_______________Using Object Literals
/*
const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};
console.log(person);              // { name: 'Alice', age: 30, isStudent: false }
*/


//_____________Using Constructor Function
/*
function Person(name, age) {
    this.name = name;
    this.age  = age;
}

const person1 = new Person('Bob', 25);
console.log(person1);                  // Person { name: 'Bob', age: 25 }
*/


//_____________Using Object.create() 
/*
const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person2 = Object.create(personPrototype);
person2.name = "Charlie";
person2.age  = 28;
console.log(person2);                             // { name: 'Charlie', age: 28 }
person2.greet();                                  // Hello, my name is Charlie
*/






//________________________________________________________________________Properties of Object_______________________________________________________________________

//___________Key-value pair
/*
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

console.log(car.brand); // Output: Toyota
*/


//___________Adding new Property
/*
car.color = "red"; // নতুন প্রপার্টি যোগ করা
console.log(car.color); // Output: red
*/


//___________Deleting Property
/*
delete car.year; // প্রপার্টি মুছে ফেলা
console.log(car.year); // Output: undefined
*/







//_________________________________________________________________________Characteristics of Objects____________________________________________________________________
/*
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
*/

//________________Accessing Property
/*
console.log(car.model); // Output: Camry
console.log(car['brand']); // Output: Toyota
*/


//________________Nested Object
/*
const user = {
    name: "Dave",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

console.log(user.address.city); // Output: New York
*/




//______________________________________________________________Objects Method_____________________________________________________________
/*
const person3 = {
    name: "Eve",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person3.greet(); // Output: Hello, my name is Eve
*/







//_____________________________________________________________Global Methods of Objects___________________________________________________

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

//_________Object.keys(): অবজেক্টের সমস্ত কী একটি অ্যারেতে ফেরত দেয়।
console.log(Object.keys(car));                                      // [ 'brand', 'model', 'year' ]


//_________Object.values(): অবজেক্টের সমস্ত মান একটি অ্যারেতে ফেরত দেয়।
console.log(Object.values(car));                                    // [ 'Toyota', 'Camry', 2020 ]


//_________Object.entries(): অবজেক্টের সমস্ত কী-মান জোড়া একটি অ্যারেতে ফেরত দেয়।
console.log(Object.entries(car));                                   // [ [ 'brand', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ] ]
