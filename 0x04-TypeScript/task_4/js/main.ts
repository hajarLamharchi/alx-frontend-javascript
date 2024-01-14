/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: "walt",
    lastName: "white",
    experienceTeachingC: 10,
};
console.log("c++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
React.setTeacher = cTeacher;
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());