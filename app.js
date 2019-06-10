"use strict";
// string
var myName = 'Evgeny';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Max';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
//array
var hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies); // object
console.log(hobbies[0]); // Cooking
// hobbies = [100] Type 'number' is not assignable to type 'string'
hobbies = ["A string"];
// array any type
var hobbiesAny = ["Cooking", "Sports"];
hobbiesAny = [100];
// hobbiesAny = 100; // error
// array any type
var hobbies3 = ["Cooking", "Sports"];
hobbies3 = [100];
hobbies3 = 100;
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Grayv"] = 1] = "Grayv";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 100] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any type
var car = "BMw";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello, Evgeny!");
}
// argument types
function multiply(value1, value2) {
    return value1 + value2;
}
console.log(multiply(2, 222));
// function types
// let myMultiply;
var myMultiply;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(59, 99));
// objects
var userData = {
    name: "Evgeny",
    age: 22
};
