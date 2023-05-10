"use strict";
// // ✅ variable declared successfully
// const name = 'Coding Beauty';
// console.log('name:',name); // Coding Beauty
// export {};
// console.log('hello world');
let id = 5;
let company = "glowie beauty";
let isArray = true;
let x = "hello";
let nid = [1, 2, 3, 4, 5];
let arr = [1, true, "sam"];
//tuple
let person = [1, "hello", false];
//tuple array
let employee;
employee = [
  [1, "paul"],
  [2, "comfort"],
  [3, "steve"],
];
//union
let ids;
ids = "33";
//enum == name constants
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["up"] = 1)] = "up";
  Direction1[(Direction1["down"] = 2)] = "down";
  Direction1[(Direction1["left"] = 3)] = "left";
  Direction1[(Direction1["right"] = 4)] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
  Direction2["up"] = "up";
  Direction2["down"] = "down";
  Direction2["left"] = "left";
  Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
  id: 1,
  name: "john",
};
//type assertion: treat an entity as a different type
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//functions
function addNum(x, y) {
  return x + y;
}
// console.log(addNum(1,5))
//void
function log(message) {
  console.log(message);
}
const user1 = {
  id: 1,
  name: "john",
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is now registered`;
  }
}
const steve = new Person(34, "paul");
// console.log(steve.register())
//subclasses
class Employee extends Person {
  constructor(id, name, position) {
    super(id, name);
    this.position = position;
  }
}
const happy = new Employee(3, "joy", "developer");
// generics : used to build reusable components
function getArray(items) {
  return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["steve", "sam", "paul"]);
console.log(numArray.length - 1);
