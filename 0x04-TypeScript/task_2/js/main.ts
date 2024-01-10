interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
};

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    };
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    };
    workDirectorTasks(): string {
        return "Getting to director tasks";
    };
};

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    };
    getCoffeeBreak(): string {
        return "Cannot have a break";
    };
    workTeacherTasks(): string {
        return "Getting to work";
    };
};

interface createEmployeeInterface {
    (salary: number | string): Teacher | Director;
};

const createEmployee: createEmployeeInterface = (salary) => {
    if (typeof salary ==='number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
};

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee:Teacher | Director) { 
    employee instanceof Director;
};

function executeWork(employee: Teacher | Director) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    } 
    if (employee instanceof Teacher) {
        console.log(employee.workTeacherTasks());
    }
   
};

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
    if (todayClass === "Math") {
        console.log("Teaching Math");
    }
    if (todayClass === "History") {
        console.log("Teaching History");
    }
};

teachClass('Math');
teachClass('History');