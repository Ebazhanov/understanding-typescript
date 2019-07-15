// let & const
let variable = "Test";
console.log(variable);
variable = "Another variable";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //Wont'work

// Block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow Function
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1+number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(12, 99));

const greet = () => {
    console.log("Hello! Evgeny")
};
greet();

const greetFriend = friend => console.log(friend);

greetFriend("Evgeny");

// Default Parameters

console.log("DEFAULT PARAMETERS");
const countdown = (start: number): void => {
    while(start > 0){
        start--;
    }
    console.log("Done!", start)
};

countdown(11);


const countdown1 = (start: number = 10): void => {
    while(start > 0){
        start--;
    }
    console.log("Done!", start)
};
countdown1();

// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 10, 111, -5];
console.log(Math.max(33, 329, 10, -3));
console.log(Math.max(...numbers));

function makeArray(arg1: number, arg2: number) {
    return [arg1, arg2];
}
console.log(makeArray(1,9));

function makeArray2(name:string, ...args: number[]) {
    return args;
}
console.log(makeArray2("Zhenja", 1,9,12,123,43,65));

function printInfo(...info: [string, number]) {
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

// Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Sports", "Jogging", "Bicycling", "GYM"];
console.log(myHobbies[0], myHobbies[1], myHobbies[2], myHobbies[3]);

//
const myHobbies1 = ["Cooking", "Sports"];
const [hobby1, hobb2] = myHobbies;
console.log(hobby1, hobb2);


//
const userDate = {userName: "Zhenja", age: 27 };
const userName1 = userDate.userName;
const age1 = userDate.age;
console.log(userName1, age1);

//
const newData = {userName2: "Zhenja", age2: 33 };
const { userName2, age2 } = newData;
console.log(userName2, age2);

//
const newData2 = {userName3: "Zhenja", age3: 55 };
const { userName3: myName3, age3: myAge3 } = newData2;
console.log(myName3, myAge3);

// Template Literals
const userName = "Max";
const greeting = `Hello, I'm " + ${userName} + ", I am`;
console.log(greeting);

//
