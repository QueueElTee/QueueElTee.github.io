var email = document.querySelector('#email');
var form = document.querySelector('form');
var button = document.querySelector('#submit');
var error1 = document.getElementById('empty');



button.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        error1.textContent = '';
        email.style.border = '1px solid lightgrey';
    } else {
        email.style.border = '1px solid red';
        error1.textContent = 'Please provide a valid email';
    }
}