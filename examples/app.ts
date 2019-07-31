class Person {
    name: string | undefined;
    protected type: string | undefined;
    protected age: number | undefined;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Super")
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type)
    }
}

const person = new Person("Evgeny", "Zhenja");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");

// 59. Inheritance
/*
class EvgenyClass extends Person {
    name = "Natasha";
}
const myPrint = new EvgenyClass("Anna", "Super");
console.log(myPrint);
*/

// 60. Inheritance and Constructor
class EvgenyClass60 extends Person {
    name = "Natasha";

    constructor(props, super1: string) {
        super(name, "Kolja");
    }
}

const myPrint60 = new EvgenyClass60("Anna", "Super");
console.log(myPrint60);

// 61. Inheritance Wrap Up

class EvgenyClass61 extends Person {
    name = "Natasha";

    constructor(props, super1: string) {
        super(name, "Kolja");
        this.age = 18;
    }
}

const myPrint61 = new EvgenyClass61("Anna", "Super");
console.log(myPrint61);

// 62. Getters & Setters
class Plant {
    private _cars: string | undefined;

    get cars() {
        return this._cars;
    }

    set cars(value: string) {
        if (value.length > 3){
            this._cars = value;
        } else {
            this._cars = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.cars);
plant.cars
