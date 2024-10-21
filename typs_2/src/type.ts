let age: number; // an integer

// an array
let colors: Array<string> = ["red", "green", "yellow"];

/// an tuple
let product: [string, number] = ["model", 5];

// an enum
enum Direction {
  North,
  South,
  East,
  West,
}

let currentDirection: Direction = Direction.East;

//an any type
let data: any = 5;
data = "ops";
