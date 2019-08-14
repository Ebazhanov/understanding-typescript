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

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car1 = new Car1("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(20);
console.log(car1.acceleration);

// Exercise 2 - Two objects, based on each other ...

class BaseObject {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle1 = new Rectangle();
rectangle1.width = 55;
rectangle1.length = 22;
console.log(rectangle1.calcSize());

/*
* Exercise 3 - Getter & Setters
* */

class Persons {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "first name is < less than 3";
        }
    }

}

const person1 = new Persons();
console.log(person1.firstName);
person1.firstName = "Zh";
console.log(person1.firstName);
person1.firstName = "Evgenii";
console.log(person1.firstName);

