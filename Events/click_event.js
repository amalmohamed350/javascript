
function replyToTheSalaam(){
    alert("waaleykum Salaam");
}
   

 
function handleMouseOver(){
  document.getElementById("handleMouseOver").innerText = "mouse is over the text";
  document.body.style.backgroundColor = "red";
}

function handlesubmit (event) {
    event.preventDefault();
    let nameValue = document.getElementById("nameInput").value;
    alert("form submitted. Name:"+ nameValue)
}
handlesubmit()
