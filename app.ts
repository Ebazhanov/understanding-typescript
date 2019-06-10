// string
let myName: string = 'Evgeny';
// myName = 28;

// number
let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

//array
let hobbies = ["Cooking", "Sports"];
console.log(typeof hobbies); // object
console.log(hobbies[0]); // Cooking
// hobbies = [100] Type 'number' is not assignable to type 'string'
hobbies = ["A string"];

// array any type
let hobbiesAny: any[] = ["Cooking", "Sports"];
hobbiesAny = [100];
// hobbiesAny = 100; // error


// array any type
let hobbies3: any = ["Cooking", "Sports"];
hobbies3 = [100];
hobbies3 = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Grayv = 1, // 0
    Green, // 1
    Blue = 100 // 2
}

let myColor: Color = Color.Blue;
console.log(myColor);

// any type
let car: any = "BMw";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());


// void
function sayHello(): void {
    console.log("Hello, Evgeny!")
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1+value2
}
console.log(multiply(2, 222));

// function types
// let myMultiply;
let myMultiply: (a:number, b:number) => number;

// myMultiply();
myMultiply = multiply;
console.log(myMultiply(59, 99));

// objects
let userData: {name: string, age: number} = {
    name: "Evgeny",
    age: 22
};
