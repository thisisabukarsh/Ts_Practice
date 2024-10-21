interface Animal {
  name: string;
  species: string;
  age?: number;
}

const getAnimalInfo = (animal: Animal): string => {
  return `Animal ${animal.name} has ${animal.species} and ${animal.age}`;
};

const dog: Animal = {
  name: "max",
  species: "dog",
  age: 5,
};

console.log(getAnimalInfo(dog)); // Output: Animal Max has dog and 5

type Shape = {
  shape: string;
};

const describeShape = (shape: Shape): string => {
  if (shape.shape === "circle") {
    return "The shape is a circle";
  } else if (shape.shape === "square") {
    return "The shape is a square";
  } else {
    throw new Error("Invalid shape type");
  }
};

const circle: Shape = {
  shape: "circle",
};

console.log(describeShape(circle)); // Output: The shape is a circle

interface Car {
  make: string;
  model: string;
  year: number;
}

const getCarDetails = (car: Car): string => {
  return `The car is a ${car.year} ${car.make} ${car.model}`;
};

const myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
};

console.log(getCarDetails(myCar)); // Output: The car is a 2020 Toyota Camry

type Point = {
  x: number;
  y: number;
  z: number;
};

const translate = (point: Point, dx: number, dy: number, dz: number): Point => {
  return { x: point.x + dx, y: point.y + dy, z: point.z + dz };
};

const myPoint: Point = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(translate(myPoint, 5, 10, 15)); // Output: { x: 6, y: 12, z: 18 }

const listAnimalNames = (animals: Animal[]): string[] => {
  return animals.map((animal: Animal) => animal.name);
};

const animals: Animal[] = [
  { name: "Max", species: "dog", age: 5 },
  { name: "Buddy", species: "dog", age: 3 },
  { name: "Charlie", species: "cat", age: 7 },
];

console.log(listAnimalNames(animals)); // Output: ["Max", "Buddy", "Charlie"]
