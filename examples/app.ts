interface NamedPerson {
    firstName: string
}

function hello(myPerson: NamedPerson) {
    console.log("Hello, " + myPerson.firstName)
}

function changeName(myPerson: NamedPerson) {
    myPerson.firstName = "Anna"
}

const myPerson = {
    firstName: "Zhenja",
    age: 27
};

hello(myPerson);
changeName(myPerson);
hello(myPerson);
