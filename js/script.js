alert("hello!");

alert("Hello! Wecome to Delani Studios")
$(document).ready(function(){
        $("#submit").click(function(){
        alert("message has been recieved thank you for shopping with us!")
    });

        $("img").click (function(){
        $(".image-showing").toggle();
        $(".text-hidden").toggle();
    })
        $(".design").click(function(){
            $(".text-hidden").toggle();
            $(".image-showing").toggle();
    })
        $(".development").click(function(){
            $(".text-hidden").toggle();
            $(".image-showing").toggle();
        })
        

});


