let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let validationUsername = document.querySelector('.validation-username');
let validationPassword = document.querySelector('.validation-password');

usernameInput.addEventListener('focus', usernameValidation);
passwordInput.addEventListener('blur', passwordValidation);

function usernameValidation() {
    if(usernameInput.value.length < 12) {
        validationUsername.textContent = 'Username must have 12 or more characters!!!';
        validationUsername.style.color = 'red';
        validationUsername.style.fontSize = '12px';
        validationUsername.style.display = 'block'
    }
    else {
        validationUsername.textContent = 'Username accepted!';
        validationUsername.style.color = 'green';
        validationUsername.style.fontSize = '12px';
        validationUsername.style.display = 'block'
    }
}

function passwordValidation() {
    if(passwordInput.value.length < 12) {
        validationPassword.textContent = 'Password must have 12 or more characters!!!';
        validationPassword.style.color = 'red';
        validationPassword.style.fontSize = '12px';
        validationPassword.style.display = 'block'
    }
    else {
        validationPassword.textContent = 'Password accepted!';
        validationPassword.style.color = 'green';
        validationPassword.style.fontSize = '12px';
        validationPassword.style.display = 'block'
    }
}