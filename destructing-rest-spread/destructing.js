// objects
let person = {
    firstName: "Ahmed",
    age: 40
}

console.log(person)

console.log(person.firstName)
console.log(person["age"])

let { firstName, age } = person
console.log(firstName, age)

//arrays

let listOfStudents = ["Ahmed", "Yaxya", "Abdi", "Jibril"]

console.log(listOfStudents[0])
 
let [firstPosition, secondPosition] = listOfStudents

console.log(firstPosition, secondPosition)