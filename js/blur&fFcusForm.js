let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let validationUsername = document.querySelector('.validation-username');
let validationPassword = document.querySelector('.validation-password');

// let validUsername = document.querySelector('.validUser');
// let invalidUsername = document.querySelector('.invalidUser')
// let validPassword = document.querySelector('.validPass');
// let invalidPassword = document.querySelector('.invalidPass')
// validUsername.style.display = 'none';
// invalidUsername.style.display = 'none';
// validPassword.style.display = 'none';
// invalidPassword.style.display = 'none';
function usernameValidation() {
    if (usernameInput.value.length < 12) {
        validationUsername.style.color = 'red';
        validationUsername.style.fontSize = '12px';
        validationUsername.innerHTML = 'Username must have 12 or more characters!!!'
        validationUsername.style.display = 'block'
    }
    else {
        validationUsername.style.color = 'green';
        validationUsername.style.fontSize = '12px';
        validationUsername.innerText = 'Username accepted!'
    }
}

function passwordValidation() {
    if (passwordInput.value.length < 12) {
        validationPassword.style.color = 'red';
        validationPassword.innerHTML = 'Password must have 8 or more characters!!!'
        validationPassword.style.fontSize = '12px';
        validationPassword.style.display = 'block'
    }
    else {
        validationPassword.style.color = 'green';
        validationPassword.innerHTML = 'Password accepted!'
        validationPassword.style.fontSize = '12px';
        validationPassword.style.display = 'block'
    }
}