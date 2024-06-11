

let nameField = document.getElementById ("nameInput")

let ageField = document.getElementById ("ageInput")

let genderField = document.getElementById ("genderInput")

let bithdayField = document.getElementById ("birthdayInput")

let imageField = document.getElementById ("imageInput")


nameField.onkeyup = function () {

    localStorage.nameInput = nameField.value;
}

ageField.onkeyup = function () {
    localStorage.ageInput = ageField.value;
}

genderField.onkeyup  = function () { 
    
    localStorage.genderInput = genderField.value;
}

imageField.onkeyup    = function () { 
    localStorage.imageInput = imageField.value

}
bithdayField.onchange = function () {
    localStorage.birthdayInput = bithdayField.value;
}





//second felid stuff:

var desrpField  = document.getElementById ("descriptionInput");

let magAndUniField = document.getElementById ("majAndUniInput");



//second Form Evenets: 

 magAndUniField.onkeyup  = function () {
    localStorage.desrpInput = desrpField.value
    localStorage.magAndUniInput = magAndUniField.value;
    
}

desrpField.onkeyup = function () { 
    localStorage.desrpInput = desrpField.value

}



if (localStorage.length > 1) {
    nameField.value = localStorage.nameInput
    ageField.value = localStorage.ageInput
    genderField.value = localStorage.genderInput
    bithdayField.value = localStorage.birthdayInput
    imageField.value = localStorage.imageInput

    desrpField.value = localStorage.desrpInput
    magAndUniField.value = localStorage.magAndUniInput
    
}





