
var form = document.getElementsById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
})


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
