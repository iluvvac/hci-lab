const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(passwordValue === '') {
		setErrorFor(password, '*Please Fill The Password');
	}else if(CheckPassword(passwordValue) == false) {
        setErrorFor(password, '*Password Too Short');
    }else if(isUpper(passwordValue) == false) {
        setErrorFor(password, '*Password Does Not Contain Capital Letter');
    }else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, '*Please Confirm Password');
	}else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'The Password Does Not Match');
	}else{
		setSuccessFor(password2);
	}

    if(document.getElementById('checkbox').checked) {
        setSuccessFor(checkbox)
    }else{
        setErrorFor(checkbox, '*You Need To Agree To Continue')
    }

    if(passwordValue != '' && password2Value != '' && document.getElementById('checkbox').checked) {
        window.location.href="homepage.html"
    }
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// function isUpper(password) {
//     if(password == toUpperCase(password))
// }

function isUpper(password) {
    for(var i = 0; i <= password; i++){
        if(password[i] == password[i].toUpperCase()) {
            return true;
        }else{
            return false;
        }
    }
}

function CheckPassword(password) { 
    var pass= /^[A-Za-z]\w{8,25}$/;
    if(password.match(pass)) { 
        return true;
    }else{ 
        return false;
    }
}