function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class PersonDecoration {
    constructor() {
        console.log("WuHuwhooo");
    }
}
