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


// Method Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

class ProjectDecorator {
    projectName: string;

    constructor(name: string){
        this.projectName = name;
    }

    @editable(false)
    calcBudget(){
        console.log(1000)
    }
}

const project = new ProjectDecorator("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
