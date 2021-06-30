$(document).ready(function() {
    $(".icon").click(function(){
        $(this).siblings().toggle();
    });
    $(".info").click(function(){
    $(this).siblings().toggle();
    $(this).toggle();
    });
    $(".portfolio").hover(
    function () {
        $(this).addClass("fade-portfolio-image");
        $(this).children(".name").show();
    },
    function () {
        $(this).removeClass("fade-portfolio-image");
        $(this).children(".name").hide();
    })
    $(".form").submit(function(){
        var firstName = document.getElementById("mce-NAME").value
        var lastName = document.getElementById("mce-FNAME").value
        var email = document.getElementById("mce-EMAIL").value
        var phone = document.getElementById("mce-PHONE").value
        var message = document.getElementById("mce-MESSAGE").value
        if (firstName == "" || firstName == null){
            alert("Hi ! Please Key in your First Name")
        }

        else if (lastName == "" || lastName == null){
            alert(" Hi ! Please Key in your Last Name")
        }

        else if (email == "" || email == null){
            alert("Email can not be empty")
        }

        else if (phone == "" || phone == null){
            alert("phone can not be empty")
        }

        else if (message == "" || message == null){
            alert("message can not be empty")
        }
       else{
        alert (" We have received your message, " + firstName + ". Thank you for reaching out to us")
       }
        

    })
    
});