var name1 = document.forms['form2']['name_1'];
var email1 =document.forms['form2']['email1'];
var password1 =document.forms['form2']['password1'];

var repassword = document.forms['form2']['repassword'];



var email_error = document.getElementById('email1_error');
var pass_error= document.getElementById('pass1_error');
var name_error = document.getElementById('name1_error');
var repass_error = document.getElementById('repass_error');
	


function validate1()
{
if(name1.value==''){
		name1.style.border = "1px solid red";
		name_error.style.display="block";
		name1.focus();
		return false;
	}
	if(name1.value !== "")
	{
		name_error.style.display='none';
		name1.style.border = "none";
	}

	if(email1.value.length<3){
		email1.style.border = "1px solid red";
		email1_error.style.display="block";
		email1.focus();
		return false;
	}
	if(password1.value.length<9){
		password1.style.border = "1px solid red";
		pass1_error.style.display="block";
		password1.focus();
		return false;
	}
	if(repassword.value != password1.value){
		repassword.style.border = "1px solid red";
		repass_error.style.display="block";
		repassword.focus();
		return false;
	}


	}