/*Username: nsparrow, id: Spani321 4742998, file: validate_form.js*/

function validate(){
	var isValid = true;
	var fName = document.getElementById('firstname');
	var sName = document.getElementById('surname');
	var email = document.getElementById('sender');
	var fNameErr = document.getElementById('firstname_error');
	var sNameErr = document.getElementById('surname_error');
	var emailErr = document.getElementById('sender_error');
	fNameErr.innerHTML="";
	sNameErr.innerHTML="";
	emailErr.innerHTML="";
		
	if(fName.value == "" || fName.value == " "){
		isValid = false;
		fNameErr.innerHTML = "Must include your first name."
	}
	
	if(sName.value == "" || sName.value == " "){
		isValid = false;
		sNameErr.innerHTML = "Must include your surname."
	}
	
	if(email.value == "" || email.value == " "){
		isValid = false;
		emailErr.innerHTML = "Must include your email address."
	}
	
	return isValid;
}