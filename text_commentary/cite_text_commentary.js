
$(document).ready(function () {
     $(".ohco2_commentedPassage").click(function() {
            console.log("Item selected");
            $(this).children(".ohco2_commentBlock").toggle();
        });
});

