
//     let person = {
//         firstName: "Ahmed", 
//         age: "34"
//     }

// {
//     "banana"
//     "mango"
//     }

// 

// let nums = [10, 20, 30]
// let copy = [...nums]

// console.log(nums)
// console.log(copy)

// let user = { name: "Amal", age: 25 };
// let details = { country: "Kenya" }

// let profile = { ...user, ...details }
// console.log(profile)

function multiply(x, y) {
    return x * y 
}

let numbers = [3, 5]
let  result = multiply(...numbers)
console.log(result)