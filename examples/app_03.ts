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
    private _cars: string = "Default";

    get cars() {
        return this._cars;
    }

    set cars(value: string) {
        if (value.length > 3) {
            this._cars = value;
        } else {
            this._cars = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.cars);
plant.cars = "AB";
console.log(plant.cars);
plant.cars = "Javascript";
console.log(plant.cars);

// 63. Static Properties and Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number):number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));

// 64. Abstract Classes
abstract class Project {
    projectName: string | undefined;
    bugdet: number = 50000;

    abstract changeName(name: string): void;

    calcBudget(){
        return this.bugdet * 2;
    }
}
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// 65. Private Constructors & Singletons (added with TypeScript 2.0)
class OnlyOne {
    private static instance: OnlyOne;

    private constructor (public name: string) {}

    static getInstance() {
        if (!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One')
        }
        return OnlyOne.instance;
    }
}

let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Something else';

// 66. "readonly" Properties (added with TypeScript 2.0)
