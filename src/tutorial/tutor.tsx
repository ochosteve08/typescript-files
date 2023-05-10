/* eslint-disable @typescript-eslint/no-unused-vars */

// ✅ variable declared successfully
// const name: string = 'Coding Beauty';
// console.log('name:', name); // Coding Beauty

console.log("hello world");

let id: number = 5;
let company: string = "glowie beauty";
let isArray: boolean = true;
let x: any = "hello";
let nid: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "sam"];

// tuple
let person: [number, string, boolean] = [1, "hello", false];

// tuple array
let employee: [number, string][]; // nested array

employee = [
  [1, "paul"],
  [2, "comfort"],
  [3, "steve"],
];

// union
let ids: string | number;

ids = "33";

// enum == named constants
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}

console.log(Direction1.Up);

// objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};

// type assertion: treat an entity as a different type
let cid: any = 1;
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 5));

// void
function log(message: string | number): void {
  console.log(message);
}

// interfaces
interface UserInterface {
  readonly id: number; // id cannot be assigned to any other number
  name: string;
  age?: number; // '?' makes it an optional property
}

const user1: UserInterface = {
  id: 1,
  name: "john",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const steve = new Person(34, "paul");
console.log(steve.register());

// subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const happy = new Employee(3, "joy", "developer");

// generics: used to build reusable components
function getArray<T>(items: T[]): T[] {
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["steve", "sam", "paul"]);

console.log(numArray.length - 1);
