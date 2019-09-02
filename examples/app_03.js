"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Super");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Evgeny", "Zhenja");
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
var EvgenyClass60 = /** @class */ (function (_super) {
    __extends(EvgenyClass60, _super);
    function EvgenyClass60(props, super1) {
        var _this = _super.call(this, name, "Kolja") || this;
        _this.name = "Natasha";
        return _this;
    }
    return EvgenyClass60;
}(Person));
var myPrint60 = new EvgenyClass60("Anna", "Super");
console.log(myPrint60);
// 61. Inheritance Wrap Up
var EvgenyClass61 = /** @class */ (function (_super) {
    __extends(EvgenyClass61, _super);
    function EvgenyClass61(props, super1) {
        var _this = _super.call(this, name, "Kolja") || this;
        _this.name = "Natasha";
        _this.age = 18;
        return _this;
    }
    return EvgenyClass61;
}(Person));
var myPrint61 = new EvgenyClass61("Anna", "Super");
console.log(myPrint61);
// 62. Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._cars = "Default";
    }
    Object.defineProperty(Plant.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        set: function (value) {
            if (value.length > 3) {
                this._cars = value;
            }
            else {
                this._cars = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.cars);
plant.cars = "AB";
console.log(plant.cars);
plant.cars = "Javascript";
console.log(plant.cars);
// 63. Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));
// 64. Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.bugdet = 50000;
    }
    Project.prototype.calcBudget = function () {
        return this.bugdet * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// 65. Private Constructors & Singletons (added with TypeScript 2.0)
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
// 66. "readonly" Properties (added with TypeScript 2.0)
