class Person {
    name: string | undefined;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person("Evgeny", "Zhenja");
console.log(person);
