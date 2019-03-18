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
        console.log("Only first one is clicked");

    });

});