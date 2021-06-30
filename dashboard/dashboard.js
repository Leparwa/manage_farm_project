function Farmer(ranch1, ranch2, ranch3, ranch4, days, price) {
    this.ranch1 = ranch1;
    this.ranch2 = ranch2;
    this.ranch3 = ranch3;
    this.ranch4 = ranch4;
    this.day = days;
    this.price = price;
}
Farmer.prototype.farmerTotalRevenue = function() {
        return (this.ranch1 + this.ranch2 + this.ranch3 + this.ranch4) * this.day * this.price;
    }
    // Farmer.prototype.costOfProduction = function() {
    //         return (this.ranch1 + this.ranch2 + this.ranch3 + this.ranch4) * this.day * 25 * 130;
    //     }
    // user interface logic
$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedRanch1 = parseInt($("input#ranch1").val());
        var inputtedRanch2 = parseInt($("input#ranch2").val());
        var inputtedRanch3 = parseInt($("input#ranch3").val());
        var inputtedRanch4 = parseInt($("input#ranch4").val());
        var inputtedDay = parseInt($("input#day").val());
        var inputtedPrice = parseInt($("input#price").val());

        var newFarmer = new Farmer(inputtedRanch1, inputtedRanch2, inputtedRanch3, inputtedRanch4, inputtedDay, inputtedPrice);
        $("h6#output").append("<span>" + " Your production revenue is " + "KES " + newFarmer.farmerTotalRevenue() + "</span>")
            // if (newFarmer.farmerTotalRevenue() < newFarmer.costOfProduction()) {
            //     $("h6#output").append("<span>" + " Your cost of production is " + "KES " + newFarmer.costOfProduction() + "</span>");
            //     $("h6#output1").append("<span>" + " Your production revenue is " + "KES " + newFarmer.farmerTotalRevenue() + "</span>");
            //     $("h6#output2").append("<span>" + " You have registered a loss of " + "KES " + (newFarmer.costOfProduction() - newFarmer.farmerTotalRevenue()) + "</span>");
            // } else {
            //     $("h6#output").append("<span>" + " Your cost of production is " + "KES " + newFarmer.costOfProduction() + "</span>");
            //     $("h6#output1").append("<span>" + " Your production revenue is " + "KES " + newFarmer.farmerTotalRevenue() + "</span>");
            //     $("h6#output2").append("<span>" + " You have registered a profit of " + "KES " + (newFarmer.farmerTotalRevenue() - newFarmer.costOfProduction()) + "</span>");
            // }
            // empties the fields
        $("input#ranch1").val("");
        $("input#ranch2").val("");
        $("input#ranch3").val("");
        $("input#ranch4").val("");
        $("input#day").val("");
        $("input#price").val("");
    });
});
$(document).ready(function() {
    $("#img1").click(function() {
        $("#p1").toggle("slow");


    });
    $("#img2").click(function() {
        $("#p2").toggle("slow");


    });
    $("#img3").click(function() {
        $("#p3").toggle("slow");


    });
    $("#img4").click(function() {
        $("#p4").toggle("slow");


    });
});