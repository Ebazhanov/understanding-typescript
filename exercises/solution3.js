"use strict";
// Exercise 1 - How was your TypeScript Class?
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car1 = /** @class */ (function () {
    function Car1(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car1.prototype.honk = function () {
        console.log("Uraaaaaaaaaaa!");
    };
    Car1.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car1;
}());
var car1 = new Car1("BMW");
car1.honk();
console.log(car1.acceleration);
car1.accelerate(20);
console.log(car1.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle1 = new Rectangle();
rectangle1.width = 55;
rectangle1.length = 22;
console.log(rectangle1.calcSize());
/*
* Exercise 3 - Getter & Setters
* */
var Persons = /** @class */ (function () {
    function Persons() {
        this._firstName = "";
    }
    Object.defineProperty(Persons.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "first name is < less than 3";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Persons;
}());
var person1 = new Persons();
console.log(person1.firstName);
person1.firstName = "Zh";
console.log(person1.firstName);
person1.firstName = "Evgenii";
console.log(person1.firstName);
