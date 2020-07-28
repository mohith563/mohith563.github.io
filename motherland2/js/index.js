$(function() {
    var selectedClass = "";
    $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    console.log(selectedClass);
    $("#gallery").fadeTo(100, 0.1); //effects
    $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
    
    setTimeout(function() {
    $("."+selectedClass).not(".middle").fadeIn().addClass('animation');
    $("#gallery").fadeTo(300, 1);
    //added lines
    $('.middle').show();
    $('.text').show();
    //
    }, 300);
    });
    });