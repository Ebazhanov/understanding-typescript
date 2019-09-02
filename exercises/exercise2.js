"use strict";
var _a;
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
Array.prototype.push.apply(newArray);
console.log(newArray);
// Solution 4
var newArray4 = [55, 20];
(_a = Array.prototype).push.apply(_a, newArray4);
console.log(newArray4);
// =================================================
// Exercise 5 - Destructuring Arrays
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
// Solution 5
var testResults5 = [111, 222, 333, 444];
var result51 = testResults5[0], result52 = testResults5[1], result53 = testResults5[2];
console.log([result51, result52, result53]);
console.log(result51, result52, result53);
// =================================================
// Exercise 6 - Destructuring Arrays
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
// Solution 6
var scientist6 = { firstName6: "Wann", experience6: 18 };
var firstName6 = scientist6.firstName6, experience6 = scientist6.experience6;
console.log(firstName6, experience6);
