class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {
    console.log("Engine ignition logic");
  }
}

const car = new Car();
car.start(); // user doesn't care how engine works
