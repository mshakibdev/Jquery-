"use strict"

$(document).ready(function() {
    //console.log("ready!");
});

// $(function() {
//     console.log("ready2!");
// });

// $(window).on("load", function() {
//     console.log("window loaded");
// });
$(document).ready(function() {
    $("div").click(function() {
        //console.log('div is clicked')
        // console.log($(this)); //for debugging
        // $(this).hide();
    });
});

$("*").click(function() {
    //console.log("everything is selected!")
});

$(document).ready(function() {
    //select id
    $("#d1").click(function() {
        // console.log('d1 is clicked');
    });

    //select class
    $(".class2").click(function() {
        // console.log('class2 is clicked');

    });
});

//multiple select (id+class+so on....)
$(document).ready(function() {
    $("#d1,#d2,.class2").click(function() {
        //console.log("all is clicked");

    });

});
// for a specific element
$(document).ready(function() {
    $(".class2:first").click(function() {
        // console.log("Only first one is clicked");

    });

});

$("document").ready(function() {
    $("tr:odd").css("background-color", "#80E4F6");
});

$(document).ready(function() {
    $("p.class2").click(function() {
        //console.log("hello");

    });
});

$(document).ready(function() {
    $(":button").click(function() {
        //console.log("button is clicked!");

    });
    $(":input").click(function() {
        //console.log("Input is clicked!");

    });
});

$(document).ready(function() {

    $("p:contains(B)").css("background-color", "#66EF96");
    $("p:contains(p)").css("color", "#890DF0");
});

$(document).ready(function() {
    var title = $("div").attr("title");
    // console.log(title);

});


$(document).ready(function() {
    $("#changedivstitle").click(function() {
        //$("div").attr("title", "new");

    });
});


//with call-back function

$(document).ready(function() {
    $("#changedivstitle").click(function() {
        $("div").attr("title", function(index, originalValue) {
            // console.log(index);
            //console.log(originalValue);
            return 100 + index;
        });
    });

});