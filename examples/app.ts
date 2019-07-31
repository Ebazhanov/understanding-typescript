class Person {
    name: string | undefined;
    protected type: string | undefined;
    protected age: number | undefined;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("Super")
    }

    private setType(type: string){
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
class EvgenyClass extends Person {
    name = "Natasha";

    constructor(props, super1: string) {
        super(name, "Kolja");
        this.age = 31;
        console.log(this.type)
    }
}
const myPrint = new EvgenyClass("Anna", "Super");
console.log(myPrint);

// 61. Inheritance Wrap Up
