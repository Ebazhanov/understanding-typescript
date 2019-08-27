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
console.log(betterEcho<number>(27).length);
console.log(betterEcho({name: "Max", age: 27}));

// Build-in Generic
const testResultsNew: Array<number> = [1.99, 2.33];
testResultsNew.push(-2.999);
console.log(testResultsNew);
