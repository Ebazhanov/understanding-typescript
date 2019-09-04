// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27).length);
console.log(betterEcho({name: "Max", age: 27}));

// Build-in Generic
const testResultsNew: Array<number> = [1.99, 2.33];
testResultsNew.push(-2.999);
console.log(testResultsNew);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element))
}

printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T | undefined;
    multiplyValue: U | undefined;
    calculate(): number {
        return +this.baseValue! * +this.multiplyValue!;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = 'text';
simpleMath.multiplyValue = 21;
console.log(simpleMath.calculate());
