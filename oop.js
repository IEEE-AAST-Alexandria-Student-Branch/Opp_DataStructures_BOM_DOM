/*
    OOP in JavaScript
*/

// object literal

var person1 = {
  name: "Nicholas",
  age: 29,

  sayName: function () {
    console.log(this.name);
  },
};

// Constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  },
  sayAge: function () {
    console.log(this.age);
  },
  zipCode: "10001",

  // static method
};

// Create an instance

var person1 = new Person("Nicholas", 29);

// Call the methods

person1.sayName(); // outputs "Nicholas"

person1.sayAge(); // outputs 29

// class Person

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

// Create an instance

let person1 = new Person("Nicholas", 29);

// Call the methods

person1.sayName(); // outputs "Nicholas"

// inheritance

class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
  sayAge() {
    console.log(this.age);
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  sayAge() {
    console.log(this.age);
  }
}

let student1 = new Student("Nicholas", 29);

student1.sayName(); // outputs "Nicholas"

student1.sayAge(); // outputs 29
