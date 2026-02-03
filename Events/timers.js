function sayMyName() {
  console.log("Hello" + "Amal");
}

let timer = setInterval(sayMyName, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 1000);
