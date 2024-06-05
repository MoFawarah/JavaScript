

let pa = document.getElementById ("firstP")
pa.addEventListener ('mouseout' , function() {
    pa.innerHTML = "How can I help"
})

pa.addEventListener ('mouseover' , function() {
    pa.innerHTML = "Hello World!"
})



//task2

let imageFlag = document.getElementById("image")

let changeFlag = document.getElementById ("slection")

 changeFlag.addEventListener ('change' , function(){
   if (changeFlag.value === "jordan")
    imageFlag.src = "Images/jordanFlag.jpeg";

   else if (changeFlag.value === "palestine")
    imageFlag.src = "Images/palstineFlag.jpeg"
 })


 

let textArea = document.getElementById ("textarea")

let selectFont = document.getElementById ("selectFont")

let selectWeight = document.getElementById ("selectWeight")


let italicCheck = document.getElementById ("italic")
let boldCheck = document.getElementById ("bold")
let underLineCheck = document.getElementById ("underline")

let clicktimes = 0;

textArea.addEventListener ('click', function () {

    clicktimes++;

    if (clicktimes == 1) {
    textArea.style.fontFamily = "fantasy"
    textArea.style.fontSize = "10px"
    selectFont.children [0].innerHTML = "Fantasy" }

    else if (clicktimes == 2) {
        selectWeight.children [0].innerHTML = "15px"
        textArea.style.fontSize = "15px"
        
    }
    
})


italicCheck.onclick = function () {
    textArea.style.fontStyle = italicCheck.checked? 'italic' : 'normal';
}

boldCheck.onclick = function () {
    textArea.style.fontWeight = boldCheck.checked? "bold" : 'normal';
}

underLineCheck.onchange = function () {
    textArea.style.textDecoration = underLineCheck.checked? "underline" : "none";
}



