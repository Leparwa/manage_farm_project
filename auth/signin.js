function validate() {
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
}