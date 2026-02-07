function behaviorPromise(wellBehaved) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (wellBehaved) {
        resolve("You behaved well here is your phone");
      } else {
        reject("You did not behave well, No phone for you.");
      }
    }, 5000);
  });
}

async function checkPromise() {
    try {
        const message = await behaviorPromise(true)
        console.log("Mother's promise fulfilled.")
    } catch (error) {
        console.log("Mother's promised failed")
        
    }
}
 
checkPromise()
    
