/*
    dataStructure in JavaScript
 */

// Array

var arr = [1, 2, 3, 4, 5];

// Object
/**
 * 1. keys can be any type
 * 2. keys are not converted to strings
 * 3. not iterable only with for in
 * 4. unordered key value pairs of data
 */
var obj = {
  name: "Nicholas",
  age: 29,
  sayName: function () {
    console.log(this.name);
  },
};

delete obj.name;

// Set
/**
 * 1. insert order is not stored
 * 2. elements are accessed and extracted via method
 * 3. size dynamic
 * 4. duplicate values are not allowed
 * 5. duplicate values are ignored
 * 6. deletion and insertion is fast
 */
var set = new Set([1, 2, 3, 4, 5]);
set.add(6);
set.delete(1);

// Map
/**
 * 1. ordered key value pairs of data
 * 2. keys can be any type
 * 3. keys are unique
 * 4. pure data storage
 */
var map = new Map([
  ["name", "Nicholas"],

  ["age", 29],
]);
map.set("sayName", function () {
  console.log(map.get("name"));
});

map.get("sayName")();

/**
 * maps vs objects
 * 
 * 1. keys can be any type
 * 2. keys are not converted to strings
 * 3. keys are iterable
 * 4. keys are ordered
 * 5. size property
 * 6. clear method
 * 7. has method
 * 8. get method
 * 9. set method
 * 10. delete method
 * 11. forEach method

 */
