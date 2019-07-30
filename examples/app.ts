class Person {
    name: string | undefined;
    private type: string | undefined;
    protected age: number | undefined;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("Super")
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type)
    }
}

const person = new Person("Evgeny", "Zhenja");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");
