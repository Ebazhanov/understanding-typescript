function logged(constructorFn: Function) {
    console.log(constructorFn)
}

@logged
class PersonDecoration {
    constructor() {
        console.log("WuHuwhooo");
    }
}

// Factory
function logging (value: boolean){
    return value ? logged: null;
}

// @ts-ignore
@logging(true)
class CarWithDecoration {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}


// @ts-ignore
// @logging(true)
@printable
class PlantWithDecorator {
    name = "Green Plant";
}
const plantNew = new PlantWithDecorator();
(<any>plantNew).print();
