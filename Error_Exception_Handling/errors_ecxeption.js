// compile time errors
// run times errors


try {
    //     let firstName
    //     console.log(firstName.toUpperCase())
    // }
    let dbError = new Error("Could not connect to the database")
    throw dbError
}

catch (error) {
    console.log(error.message)
}

finally {
    console.log("This code will run regardless")
}