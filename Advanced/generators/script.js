// function listNames() {
//     console.log("Amal");
//     console.log("Mohamed");
//     console.log("Ali");
//     console.log("Sara");
// }

// listNames(); 

// function* listNames() {
//     yield "Amal";
//     yield "Mohamed";
//     yield "Ali";
//     yield "Sara";
// }

// const name=listNames();

// console.log(name.next().value); // Amal
// console.log(name.next().value); // Mohamed
// console.log(name.next().value); // Ali
// console.log(name.next().value); // Sara
// console.log(name.next().value); // undefined (no more values to yield)

// Sleep function (3 seconds)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Generator function
function* listNames() {
  yield "Amal";
  yield "Aisha";
  yield "Omar";
  yield "Fatima";
}

// Create generator
const namesGen = listNames();

// Async runner to control timing
async function runNames() {
  let result = namesGen.next();

  while (!result.done) {
    console.log(result.value); // print name

    // wait 3 seconds
    await sleep(3000);

    // go to next name
    result = namesGen.next();
  }

  console.log("All names listed");
}

// Start
runNames();