const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const errorPassword1 = document.getElementById('error-password1');
const errorPassword2 = document.getElementById('error-password2');
const submitButton = document.getElementById('submit');

function validateInputs() {
    let valid = true;

    // Validate password length
    if (password1.value.length < 6) {
        errorPassword1.style.display = 'inline';
        valid = false;
    } else {
        errorPassword1.style.display = 'none';
    }

    // Validate password match
    if (password1.value !== password2.value) {
        errorPassword2.style.display = 'inline';
        valid = false;
    } else {
        errorPassword2.style.display = 'none';
    }

    // Show or hide submit button
    submitButton.style.display = valid ? 'block' : 'none';
}

password1.addEventListener('input', validateInputs);
password2.addEventListener('input', validateInputs);
