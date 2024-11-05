//____________________________________________________________Introduction_________________________________________________________________
/*
Object Prototype জাভাস্ক্রিপ্টে প্রতিটি অবজেক্টের সাথে সম্পর্কিত একটি গুরুত্বপূর্ণ ধারণা। 
যখন আপনি কোনো অবজেক্ট তৈরি করেন, সেই অবজেক্ট স্বয়ংক্রিয়ভাবে একটি প্রোটোটাইপ অবজেক্ট থেকে উত্তরাধিকারী হয়। 
এই প্রোটোটাইপ অবজেক্টের মাধ্যমে আপনি সাধারণ বৈশিষ্ট্য ও মেথডগুলি শেয়ার করতে পারেন, 
যা নতুন অবজেক্টগুলিকে একেবারে স্ক্র্যাচ থেকে না তৈরি করেই ব্যবহারযোগ্য করে তোলে।
*/




//___________________________________________________________What is prototype__________________________________________________________
/*
জাভাস্ক্রিপ্টে, প্রতিটি অবজেক্টের একটি গোপন প্রপার্টি থাকে, যাকে [[Prototype]] বলা হয়। 
আপনি এটি ডট নোটেশন দিয়ে সরাসরি অ্যাক্সেস করতে পারেন না, তবে __proto__ প্রপার্টির মাধ্যমে এটি অ্যাক্সেসযোগ্য।
যখন কোনো অবজেক্টে কোনো প্রপার্টি বা মেথড অ্যাক্সেস করা হয়, তখন জাভাস্ক্রিপ্ট প্রথমে সেই অবজেক্টে খোঁজ করে। 
যদি সেখানে প্রপার্টি না পাওয়া যায়, তবে এটি প্রোটোটাইপ চেইন ধরে উপরে খোঁজ করতে থাকে।
*/





//________________________________________________________Example_____________________________________________________
/*
let animal = {
    type: 'Mamal',
    sound: function() {
        console.log('The animal makes a sound.');
    }
};

let dog = {
    bread: 'Golden Retriever',
    bark: function() {
        console.log('Woof! Woof!');
    }
};

dog.__proto__ = animal;

dog.bark();                            // Woof! Woof!
dog.sound();                           // The animal makes a sound.
*/








//___________________________________________________________________Prototype Chaining________________________________________________
/*
let vehicle = {
    wheels: 4,
    move: function() {
        console.log("The vehicle is moving");
    }
};

let car = Object.create(vehicle);  // car এর প্রোটোটাইপ হল vehicle
car.brand = "Toyota";

let electricCar = Object.create(car);  // electricCar এর প্রোটোটাইপ হল car
electricCar.batteryLife = "100 miles";

electricCar.move();  // Output: "The vehicle is moving" (vehicle থেকে ইনহেরিটেড)
console.log(electricCar.wheels);  // Output: 4 (vehicle থেকে ইনহেরিটেড)
console.log(electricCar.brand);   // Output: "Toyota" (car থেকে ইনহেরিটেড)
*/






//____________________________________________________________Object.prototype________________________________________________________
/*
সব জাভাস্ক্রিপ্ট অবজেক্টের প্রোটোটাইপ চেইনের শীর্ষে রয়েছে Object.prototype। এটি সকল অবজেক্টের প্রোটোটাইপ। 
যদি কোনো অবজেক্টের প্রোটোটাইপ চেইনে কোনো মেথড বা প্রপার্টি না পাওয়া যায়, তবে সেটি Object.prototype 
এ খোঁজ করা হয়।
*/
/*
let obj = {};
console.log(obj.toString());  // Output: "[object Object]"
*/






//____________________________________________________________Custom Prototypes___________________________________________________
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);

person1.greet();  // Output: "Hello, my name is Alice"
person2.greet();  // Output: "Hello, my name is Bob"
*/





//______________________________________________________Conclusion_______________________________________
/*
Object Prototype জাভাস্ক্রিপ্টে ইনহেরিটেন্সের ভিত্তি গড়ে তোলে।
একটি অবজেক্টের প্রোটোটাইপ থেকে প্রপার্টি ও মেথড পাওয়া যায় এবং প্রোটোটাইপ চেইনিংয়ের মাধ্যমে প্রোপার্টি শেয়ার করা সম্ভব।
Object.prototype সব অবজেক্টের প্রোটোটাইপ চেইনের শীর্ষে থাকে।
*/