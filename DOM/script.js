let allTheFirstWannaBe = document.getElementsByClassName("wanna-first");
allTheFirstWannaBe[0].style.color = "blue"
    allTheFirstWannaBe[0].style.fontSize="50px"


for(let i = 1; i <= 500; i++) {

    let firstH1 = document.createElement("h1")
    firstH1.innerHTML = i + ":" + "Hello World <>"
    firstH1.style.color = "red"
    let firstP =document.getElementById("wanna-first")
    document.body.appendChild(firstH1)



}
 hr