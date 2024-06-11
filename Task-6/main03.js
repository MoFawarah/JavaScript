

var regName = /^[a-zA-Z]+$/; 


function validateFName() {
    var fNameField = document.getElementById('firstnameinput');  
    var fnameInput = fNameField.value.trim(); 
  
    let fNameError=document.getElementById('firstNameError');
    
    if (regName.test(fnameInput)==false && fnameInput !=='') {
        fNameError.innerText='Numbers are not allowed';
    } 

    else {
        fNameError.innerText='';
    }
    
}





function validateLName() {
  var lNameField = document.getElementById('lastnameinput'); 
  var lnameInput = lNameField.value.trim(); 

  let lNameError=document.getElementById('lasttNameError'); 

  if (regName.test(lnameInput) == false && lnameInput !== '' ) {

    lNameError.innerText='Numbers are not allowed here tooooo';
  }
  else {
    lNameError.innerText='';
  }

}




var regEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
function validateEmail() {
var emailInput = document.getElementById('Emailinput');
var email = emailInput.value.trim();

let spe=document.getElementById('spEmail');
if (regEmail.test(email)==false && email !== "") {
    spe.innerText='the e-mail is not valid';
} 

else {
    spe.innerText='';
} 
}





// var dateNumber =/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/; // object defined
// function birthdayValidate() {
// var dateNumberInput = document.getElementById('birthdayInput');
// var dNumber = dateNumberInput.value.trim();
// var dat=document.getElementById('spBdate');


// if (dateNumber.test(dNumber)==false && dNumber !== '') {
//     dat.innerHTML='The format should be dd/mm/yyyy';
// } 

// else {
//     dat.innerHTML = '';
//   }
// }

var dateNumber = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;

function birthdayValidate() {
  var dateNumberInput = document.getElementById('birthdayInput');
  var dNumber = dateNumberInput.value.trim();
  var dat = document.getElementById('spBdate');

  if (dNumber === '' || dateNumber.test(dNumber)) {
    dat.innerHTML = '';
  } else {
    dat.innerHTML = 'The format should be dd/mm/yyyy';
  }
}

// Add blur event listener
document.getElementById('birthdayInput').addEventListener('blur', birthdayValidate);

// Optionally, add a keyup event to clear the message when the input is cleared
document.getElementById('birthdayInput').addEventListener('input', function() {
  var dNumber = this.value.trim();
  var dat = document.getElementById('spBdate');
  if (dNumber === '') {
    dat.innerHTML = '';
  }
});


