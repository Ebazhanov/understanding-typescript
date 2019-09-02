"use strict";
function hello(myPerson) {
    console.log("Hello, " + myPerson.firstName);
}
function changeName(myPerson) {
    myPerson.firstName = "Zhenja";
}
var myPerson = {
    firstName: "Zhenja",
    hobbies: ["Sport", "Programming"],
    greet: function (lastName) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    }
};
changeName(myPerson);
myPerson.greet(' Baklazhanov');
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.greet = function (lastName) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
    };
    return Person2;
}());
var hisPerson = new Person2();
hisPerson.firstName = "Evgeny";
// greet(hisPerson);
var newPerson = new Person2();
newPerson.firstName = "Zhenja";
hello(newPerson);
newPerson.greet("Vasechkin");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Kolja",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
