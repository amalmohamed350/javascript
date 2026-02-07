class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  area() {
    return Math.PI * this.radius ** 2;
  }

  constructor(radius) {
    super();
    this.radius = radius;
  }
}

const shape = new Shape();
const circle = new Circle(5);

console.log(shape.area()); // 0
console.log(circle.area()); // 78.5
