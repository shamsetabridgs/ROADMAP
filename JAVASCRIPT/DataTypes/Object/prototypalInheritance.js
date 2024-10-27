// _________________________________________________________Introduction______________________________________________
/*
জাভাস্ক্রিপ্টের একটি মৌলিক বৈশিষ্ট্য হল প্রোটোটাইপাল ইনহেরিটেন্স, 
যা এক অবজেক্ট থেকে অন্য অবজেক্টের প্রপার্টি এবং মেথড উত্তরাধিকারী করা সম্ভব করে। 
জাভাস্ক্রিপ্টে অবজেক্টগুলো সরাসরি একে অপরের থেকে বৈশিষ্ট্য নিতে পারে। 
এটি অন্যান্য ক্লাসিক্যাল ইনহেরিটেন্সের মতো নয়, যেখানে ক্লাস থেকে অবজেক্ট তৈরি হয়। 
বরং এখানে অবজেক্ট একে অপরের কাছ থেকে সরাসরি প্রপার্টি পায়।
*/






// __________________________________________________How Prototypal Inheritance Work__________________________________________________
/*
প্রত্যেকটি জাভাস্ক্রিপ্ট অবজেক্টের একটি prototype প্রপার্টি থাকে, যা অন্য অবজেক্টের রেফারেন্স ধারণ করে। 
এই প্রোটোটাইপ অবজেক্টের প্রপার্টি এবং মেথডগুলি উত্তরাধিকারসূত্রে প্রাপ্ত হয়।
*/



// _____________________________________________________Example_______________________________________________
/*
// একটি প্রোটোটাইপ অবজেক্ট তৈরি করা
let personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// একটি নতুন অবজেক্ট তৈরি করা এবং প্রোটোটাইপাল ইনহেরিটেন্স করা
let person1 = Object.create(personPrototype);
person1.name = "Alice";
person1.greet();  // Output: "Hello, my name is Alice"

let person2 = Object.create(personPrototype);
person2.name = "Bob";
person2.greet();  // Output: "Hello, my name is Bob"
*/






// _____________________________________________________________Prototype Chain____________________________________________________
/*
let animal = {
    eat: function() {
        console.log("Eating...");
    }
};

let dog = Object.create(animal);
dog.bark = function() {
    console.log("Woof! Woof!");
};

dog.bark();  // Output: "Woof! Woof!"
dog.eat();   // Output: "Eating..." (inherited from animal)
*/






// _____________________________________________________________________Constructor Function__________________________________________________________________
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

let person1 = new Person("Alice", 25);
person1.greet();  // Output: "Hello, my name is Alice"
*/





//________________________________________1.Raw Prototype Inheritance
/*
// প্রোটোটাইপ অবজেক্ট
let vehicle = {
    move: function() {
        console.log("The vehicle is moving");
    }
};

// car অবজেক্ট তৈরি এবং প্রোটোটাইপাল ইনহেরিটেন্স করা
let car = Object.create(vehicle);
car.wheels = 4;  // car এর নিজস্ব প্রপার্টি
car.move();      // Output: "The vehicle is moving" (vehicle থেকে ইনহেরিটেড)

console.log(car.wheels);  // Output: 4
*/






//_____________________________2.Prototype Chain
/*
let animal = {
    eats: true,
    walk: function() {
        console.log("Animal is walking");
    }
};

let rabbit = Object.create(animal);  // rabbit animal থেকে ইনহেরিট করে
rabbit.jumps = true;  // rabbit এর নিজস্ব প্রপার্টি

console.log(rabbit.eats);  // Output: true (animal থেকে ইনহেরিটেড)
rabbit.walk();             // Output: "Animal is walking" (animal থেকে ইনহেরিটেড)

console.log(rabbit.jumps);  // Output: true (rabbit এর নিজস্ব প্রপার্টি)
*/






//____________________________3.Constructor Function with Protypal Inheritance
/*
// Constructor Function
function Animal(name) {
    this.name = name;
}

// প্রোটোটাইপ মেথড যোগ করা
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

// Dog কন্সট্রাক্টর ফাংশন
function Dog(name, breed) {
    Animal.call(this, name);  // Animal কন্সট্রাক্টর থেকে name ইনহেরিট করা
    this.breed = breed;  // Dog এর নিজস্ব প্রপার্টি
}

// প্রোটোটাইপাল ইনহেরিটেন্স সেট করা
Dog.prototype = Object.create(Animal.prototype);

// নতুন মেথড যোগ করা Dog এর প্রোটোটাইপে
Dog.prototype.bark = function() {
    console.log(`${this.name} is barking`);
};

// উদাহরণ
let myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat();   // Output: "Buddy is eating" (Animal এর প্রোটোটাইপ থেকে)
myDog.bark();  // Output: "Buddy is barking" (Dog এর প্রোটোটাইপ থেকে)
*/






//____________________________4.Overriding Methods in Prototypal Inheritance

let animal = {
    sound: function() {
        console.log("Animal makes a sound");
    }
};

let cat = Object.create(animal);
cat.sound = function() {
    console.log("Meow");
};

cat.sound();   // Output: "Meow" (cat এর মেথড animal এর sound মেথডকে ওভাররাইড করেছে)
