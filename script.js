
$(document).ready(function(){  //make stuff when document is ready
    $(".burgermenue").click(function(){ //specific object selected element do something click
        $(".menupanel").addClass("active");
    });
    $(".menupanel__closing").click(function(){ //specific object selected element do something click
        $(this).parents(".menupanel").removeClass("active");//finds the element to be clicked and finds its parents with class menupanel removes class active 

    });
  });
