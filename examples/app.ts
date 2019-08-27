interface NamedPerson {
    firstName?: string,
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function hello(myPerson: NamedPerson) {
    console.log("Hello, " + myPerson.firstName)
}

function changeName(myPerson: NamedPerson) {
    myPerson.firstName = "Zhenja"
}

const myPerson: NamedPerson = {
    firstName: "Zhenja",
    hobbies: ["Sport", "Programming"],
    greet(lastName: string){
        console.log("Hello, I am " + this.firstName + " " + lastName)
    }
};

changeName(myPerson);
myPerson.greet(' Baklazhanov');

class Person2 implements NamedPerson {
    firstName: string | undefined;
    greet(lastName: string) {
        console.log("Hello, I am " + this.firstName + " " + lastName)
    }
}

const hisPerson = new Person2();
hisPerson.firstName = "Evgeny";
// greet(hisPerson);

const newPerson = new Person2();
newPerson.firstName = "Zhenja";
hello(newPerson);
newPerson.greet("Vasechkin");

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Kolja",
    greet(lastName: string){
        console.log("Hello!")
    }
};

console.log(oldPerson);
