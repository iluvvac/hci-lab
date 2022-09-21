const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const radio = document.getElementById('radio');
const radio2 = document.getElementById('radio2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	
	if(firstnameValue === '') {
		setErrorFor(firstname, '*Please Fill The First Name');
	} else {
		setSuccessFor(firstname);
	}

	if(lastnameValue === '') {
		setErrorFor(lastname, '*Please Fill The Last Name');
	} else {
		setSuccessFor(lastname);
	}
    
	if(document.getElementById('radio').checked) {
        setSuccessFor(radio)
    }else if(document.getElementById('radio2').checked){
        setSuccessFor(radio)
    }else{
		setErrorFor(radio, '*Please Select A Gender')
	}

    if(firstnameValue != '' && lastnameValue != '' && document.getElementById('radio').checked) {
        window.location.href="register2.html"
    }
	if(firstnameValue != '' && lastnameValue != '' && document.getElementById('radio2').checked) {
        window.location.href="register2.html"
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