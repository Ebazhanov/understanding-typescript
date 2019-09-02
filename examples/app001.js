"use strict";
// let & const
var variable = "Test";
console.log(variable);
variable = "Another variable";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; //Wont'work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Function
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(12, 99));
var greet = function (myPerson1) {
    console.log("Hello! Evgeny");
};
greet(myPerson1);
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Evgeny");
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(11);
var countdown1 = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown1();
// Rest & Spread
console.log("REST & SPREAD");
var numbers = [1, 10, 111, -5];
console.log(Math.max(33, 329, 10, -3));
console.log(Math.max.apply(Math, numbers));
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray(1, 9));
function makeArray2(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray2("Zhenja", 1, 9, 12, 123, 43, 65));
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Sports", "Jogging", "Bicycling", "GYM"];
console.log(myHobbies[0], myHobbies[1], myHobbies[2], myHobbies[3]);
//
var myHobbies1 = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobb2 = myHobbies[1];
console.log(hobby1, hobb2);
//
var userDate = { userName: "Zhenja", age: 27 };
var userName1 = userDate.userName;
var age1 = userDate.age;
console.log(userName1, age1);
//
var newData = { userName2: "Zhenja", age2: 33 };
var userName2 = newData.userName2, age2 = newData.age2;
console.log(userName2, age2);
//
var newData2 = { userName3: "Zhenja", age3: 55 };
var myName3 = newData2.userName3, myAge3 = newData2.age3;
console.log(myName3, myAge3);
// Template Literals
var userName = "Max";
var greeting = "Hello, I'm \" + " + userName + " + \", I am";
console.log(greeting);
//
