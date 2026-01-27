function multiply(a, b) {
    return a * b;
}
let result1 = multiply(9, 8);
let result2= multiply(6,7)

console.log(result1);
console.log(result2)

function student(firstName, lastName, age, country) {
    let studentsData;
    studentsData = firstName + "" + lastName;
    studentsData += "is" + age + "years old."
    studentsData += "He/She is from" + country;
    return studentsData;
}
console.log(student ("Amal", "Mohamed", 21 ,"Kenya"));
console.log(student("Abdirizak", "Mohamed", 27, "Somalia"));

