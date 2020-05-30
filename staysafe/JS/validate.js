var email =document.forms['form']['email'];
var password =document.forms['form']['password'];



var email_error = document.getElementById('email_error');
var pass_error= document.getElementById('pass_error');



function validate()
{

	if(email.value.length<5){
		email.style.border = "1px solid red";
		email_error.style.display="block";
		email.focus();
		return false;
	}
	if(email.value.length>=9)
	{
		email_error.style.display="none";
		email.style.border = "none";
	}

	if(password.value.length<8){
		password.style.border ="1px solid red";
		pass_error.style.display="block";
		password.focus();
		return false;
	}
	if(password.value.length>=8){
		password.style.border='none';
		pass_error.style.display='none';
	}
}