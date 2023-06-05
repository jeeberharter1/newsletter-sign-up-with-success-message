const formContainer = document.getElementById('form-container');
const confirmation = document.getElementById('confirmation');
const confirmBtn = document.getElementById('subscribe-btn');
const error = document.getElementById('error');
const dismissBtn = document.getElementById('dismiss-btn');
const emailConfirm = document.getElementById('email-confirm');

let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkInput() {
    const input = document.getElementById('email');

    if (input.value.trim().length === 0) {
        error.innerHTML = "Valid email required";
        error.style.visibility = "visible";
        input.classList.add('invalid');
    } else if (!input.value.match(emailformat)) {
        error.innerHTML = "Invalid format";
        error.style.visibility = "visible";
        input.classList.add('invalid');
    } else {
        error.style.visibility = "hidden";
        input.classList.remove('invalid');
        formContainer.style.display = "none";
        confirmation.style.display = "flex";
        emailConfirm.innerHTML = input.value;
    }
}

confirmBtn.addEventListener('click', checkInput);
dismissBtn.addEventListener('click', () => {
    formContainer.style.display = "flex";
    confirmation.style.display = "none";
})

window.onload = () => {
    document.getElementById('form').reset();
};