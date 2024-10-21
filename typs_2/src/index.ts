interface Person {
  name: string;
  age: number;
  greet(name: string): string;
}

const person: Person = {
  name: "thisisabukarsh",
  age: 30,
  greet: function (n: string) {
    return `Hey, I'm trying to be more powerful using TS: ${this.name} + ${n}`;
  },
};

// console.log(person.greet(person.name));

// extend interfaces

interface Employee extends Person {
  department: string;
}

const emp: Employee = {
  name: "thisisabukarsh",
  age: 35,
  greet: function (n: string) {
    return `Hey, I'm trying to be more powerful using TS: ${this.name} + ${n}`;
  },
  department: "IT",
};

// console.log(emp.greet(emp.name));
