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
// Property Decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class ProjectDecorator {
    @overwritable(false)
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


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}


class CourseDecorator {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, printAll: boolean) {
        if (printAll){
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}

const course  = new CourseDecorator("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
