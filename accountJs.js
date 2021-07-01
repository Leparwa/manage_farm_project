$(document).ready(function(){
    $("#saveButton").click(function(){
        var recordDate = $("#recordDate").val();
        var tag = $("#tag").val();
        var message =$("#comment").val();
        var litres =$("#litres").val();
        const userResponse={litres: litres, animalTag:tag, description:message, recordDate:recordDate}
        // alert(userResponse);
        $.ajax({
			type: "POST",
		url: "https://60d96e3eeec56d001747778f.mockapi.io/dairyFarm",
			// dataType: "jsonp",
			data: {
                userResponse
			},
			success: function(res) {
				console.log("success"+res);
				alert(`You have successfully Recorded milk for cow of tag ${tag}`);
                 
			},
			error: function(res) {
                console.log("error"+JSON.stringify(res));

			}
		});
    });

});
function getRecords(){
    $.get("https://60d96e3eeec56d001747778f.mockapi.io/dairyFarm", function(data){
      console.log(data)
      });
}
getRecords()