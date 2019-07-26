"use strict";
// Exercise 1
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Solution 1
var double1 = function (value) { return value * 2; };
console.log(double1(10));
// =================================================
// Exercise 2
var greet2 = function (name) {
    if (name === undefined) {
        name = "Zhenja";
    }
    console.log("Hello, " + name);
};
// greet2();
greet2("Anna");
// Solution 2
var greet1 = function (name) {
    if (name === void 0) { name = "Zhenjha"; }
    if (name === undefined)
        console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// =================================================
// Exercise 3
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers2));
// Solution 3 - Spread Operator
var numbers3 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers3));
// =================================================
// Exercise 4
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
// =================================================
// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
// =================================================
// Exercise 6
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
