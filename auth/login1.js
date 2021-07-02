

$(document).ready(function(){
  $("#loginButton").click(function(){
  
    let user =   JSON.parse(localStorage.getItem('user'));
      var firstname = $("#username").val();
      var lastname = $("#password").val();
      // alert(userResponse);
    if(firstname===user){
      window.location.href = 'file:///home/moringa/manage_farm_project/account.html'

    }
    else{
      alert("sorry your password or username is incorrect")
    }
  });

});
function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.mecallapi.com/api/auth/user");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", "Bearer "+jwt);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      if (objects["status"] == "ok") {
        const user = objects["user"]
        document.getElementById("newName").innerHTML = user["Newname"];
     
      }
    }
  };
}



function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './signin.html'
}