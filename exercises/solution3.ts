// Exercise 1 - How was your TypeScript Class?

class Car1 {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Uraaaaaaaaaaa!")
    }

    accelerate(speed: number){
        this.acceleration = this.acceleration + speed;
    }
}
const car1 = new Car1("BMW");
car1.honk();

console.log(car1.acceleration);

car1.accelerate(20);

console.log(car1.acceleration);
