function up() {

//ID of the button div is "up"
$("#up").ready(function() {
  //"test" is ID of the image
    $("#test").animate({left: "+=500"}, 2000);
    $("#test").animate({left: "-=300"}, 1000).css("color","red").slideUp(2000).slideDown(2000);

});

}
