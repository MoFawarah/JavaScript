


// task #1----------------

const headingContainer = document.getElementById("heading")

headingContainer.addEventListener ('mouseover', checkEvent)
headingContainer.addEventListener ('mouseout', checkEvent)

function checkEvent (event) {
   
    if (event.type == "mouseover"){
        headingContainer.innerHTML = "Can I help?"
        headingContainer.style.background = "blue"
        headingContainer.style.color = "white"

    }

    else if (event.type == "mouseout")
       { headingContainer.innerHTML = "Hello World!" 
        headingContainer.style.background = "yellow"
        headingContainer.style.color = "black"
       }
}


// task #2----------------

const divContainer = document.getElementById("divContainer");

divContainer.style.background = "orange";

divContainer.addEventListener ('click', function(){
    divContainer.style.background = "red"
})

divContainer.addEventListener('mouseleave', function () {
    divContainer.style.background = "orange";
})


// task #3----------------

let selectList = document.getElementById ("selection");
let optionList = document.getElementsByClassName ("option")
let image = document.getElementById ("image")

selectList.addEventListener ('change', function() {

    if (selectList.value == "select") {
        image.src = "Images/noimage.jpeg"
    }

    else if (selectList.value == "jordan") {
        image.src = "Images/jordanFlag.jpeg"
    }

    else if (selectList.value == "egypt") {
        image.src = "Images/egyptFlag.jpeg"
    }

    else if (selectList.value == "palestine") {
        image.src = "Images/palstineFlag.jpeg"
    }

    else if (selectList.value == "brazil") {
        image.src = "Images/brazilFlag.jpeg"
    }

})


// task #4----------------

const textArea = document.getElementById ("textarea")
const selectFont = document.getElementById ("selectFont")
const pTextArea = document.querySelector ("#textarea p")

const selectWeight = document.getElementById ("selectWeight")



selectFont.addEventListener ('change', function () {

    if (selectFont.value == "timesnewroman") {
        textArea.style.fontFamily =  'Times New Roman';
    }

    else if (selectFont.value == "fantasy") {
        textArea.style.fontFamily =  'fantasy';
    }

    else if (selectFont.value == "arial") {
        textArea.style.fontFamily =  'Arial'
    }
})

selectWeight.addEventListener ('change', function () {
    if (selectWeight.value === "10px") {
        pTextArea.style.fontSize = '10px';
    }

    else if (selectWeight.value === "15px") {
        pTextArea.style.fontSize = '15px';
    }

    else if (selectWeight.value === "20px") {
        pTextArea.style.fontSize = '20px';
   }
})



const italicCheck = document.getElementById ("italic")
const boldCheck = document.getElementById ("bold")
const underlineCheck = document.getElementById ("underline")

italicCheck.onclick = function (){
    textArea.style.fontStyle = italicCheck.checked? 'italic' : 'normal'
}

boldCheck.onclick = function (){
    textArea.style.fontWeight = boldCheck.checked? 'bold' : 'normal'
}

underlineCheck.onclick = function (){
    textArea.style.textDecoration = underlineCheck.checked? 'underline' : 'none'
}




// task #5----------------

let passwordField = document.getElementById ("password")
passwordField.onkeyup = function() {
    if (passwordField.value.length <7){
        
    }
}