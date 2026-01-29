// let age = 13
// if (age >= 18) {
//     console.log("You are an Adult");
// } else if (age >= 13 && age <= 17) {
//     console.log("You are a Teenager");
// } else if (age <= 3) {
//     console.log("You are a Toddler")
// } else {
//     console.log("You are NOT an Adult")
// }


let age = 10;

switch (true) {
    case age >= 18:
        console.log("You are an Adult");
        break;

    case age >= 13 && age <= 17:
        console.log("You are a Teenager");
        break;

    case age <= 3:
        console.log("You are a Toddler");
        break;

    default:
        console.log("You are NOT an Adult");
}
// } //1️ Order matters
// Your conditions must go from most specific to least specific.

// 2️ break is REQUIRED
// Without it, JS will keep executing the next cases.
