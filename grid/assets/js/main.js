$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
  selectedClass = $(this).attr("data-rel");
  $("#gallery").fadeTo(100, 0.1);
  $("#gallery div").not(`".${selectedClass}, .gallery__middle, .gallery__text"`).fadeOut().removeClass('animation');
  console.log(`.${selectedClass}, .gallery__container, .gallery__middle, .gallery__text`);
  setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('animation');;
  $("#gallery").fadeTo(300, 1);
  }, 300);
  });
  });