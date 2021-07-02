function validate() {
      
	if( document.myForm.name.value == "" ) {
	   alert( "Please provide your name!" );
	   document.myForm.name.focus() ;
	   return false;
	}
	if( document.myForm.password.value == "" ) {
	   alert( "Please provide your password!" );
	   document.myForm.password.focus() ;
	   return false;
	}
	
	return( true );
 }

 $(document).ready(function(){
    $("#registerButton").click(function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var password =$("#password").val();
        const userResponse={password: password, lastname:lastname,firstname:firstname}
        // alert(userResponse);
		console.log(userResponse)
		localStorage.setItem("user", userResponse);
      
    });

});

 function register() {
	 var name = document.myform.newName.value
      var pass = document.myform.newPassword.value
	  var pass2 = document.myform.confirmPassword.value
	if( name  == "" ) {
	   alert( "Please provide your name!" );
	   document.myform.name.focus() ;
	   return false;
	}
	else if( pass == "" ) {
	   alert( "Please provide your password!" );
	   document.myform.password.focus() ;
	   return false;
	}
	else if(pass!==pass2){
		alert("password do not match")
		document.myform.confirmPassword.focus();
		return false;
	}

	else if(pass.lenght<4){
		alert ("password too short")
		document.myform.password.focus() ;
		return false;
	}
	 else {
		 return( true );
	 }
 }
    if (document.myForm.fName.value == "") {
        alert("Please provide your First name");
        document.myForm.fName.focus();
        return false;
    } else if (document.myForm.lName.value == "") {
        alert("Please provide your last name");
        document.myForm.lName.focus();
        return false;
    } else if (document.myForm.uName.value =="" ) {
        alert("Please  provide your username");
        document.myForm.uName.focus();
        return false;
    } else if (document.myForm.email.value =="") {
        alert("Please provide your email");
        document.myForm.email.focus();
        return false;
    } else if (document.myForm.password.value =="") {
        alert("Please provide your password");
        document.myForm.password.focus();
        return false;
    }else if(document.myForm.cPassword.value !=="password"){
        alert("password do not match")
        document.myForm.cPassword.focus();
        return false;
        }   
     else {
        return true;
    }

