const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

const createAccount = function() {
    if(password.value!=passwordConfirm.value){
        alert(`The entered passwords do not match.`)
    } else{
        alert(`Account created!`)
    }
};