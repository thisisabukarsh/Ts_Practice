// basic function
function greet(name: string): string {
  return `Hello ${name}!`;
}
console.log(greet("Alice")); // Hello Alice!

// an function with optional parameters
function greetWithAge(name: string, age?: number): string {
  if (age) {
    return `${name} ${age}`;
  }
  return `Hello ${name} !`;
}

console.log(greetWithAge("Bob")); // Hello Bob!
console.log(greetWithAge("Bob", 28)); // Bob 28

//a function with default parameters
function greetWithDefault(name: string, greeting: string = "Hello"): string {
  return `${greeting} ${name}!`;
}

console.log(greetWithDefault("Bob")); // Hello Bob!
console.log(greetWithDefault("Bob", "hello mr")); // hello mr Bob

// a function with rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(15, 15)); // 30

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 7)); // 35

function describePerson(name: string, age: number, hobby?: string): string {
  if (hobby) {
    return `Person: ${name}, Age: ${age}, Hobby: ${hobby}`;
  }
  return `Person: ${name}, Age: ${age}`;
}

console.log(describePerson("Alice", 28)); // Person: Alice, Age: 28
console.log(describePerson("Bob", 32, "Reading")); // Person: Bob, Age: 32, Hobby: Reading

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

console.log(isEven(5)); // false

function greetPeople(names: string[]): void {
  names.forEach((name) => console.log(`Hello ${name}`));
}

greetPeople(["Alice", "Bob", "Charlie"]); // Hello Alice, Hello Bob, Hello Charlie

//concat overloading
function concat(a: string, b: string): string;
function concat(a: string, b: string): number;
function concat(a: any, b: any) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Both inputs must be of the same type.");
  }
}
