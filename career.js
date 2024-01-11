function chk(){
	var em=document.getElementById('email').value;
	var pass=document.getElementById('password').value;
	if(em=='8849815877' && pass=='8849815877'){
		alert('you are login succssfully')
		window.location='welcome.html'
	}
	else{
		alert('something went wrong')
		window.location='index.html'
	}

}