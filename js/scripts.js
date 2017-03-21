$(document).ready(function() {

//Walrus Toggles//
$("p").click(function(){
  $(".initially-hidden").slideToggle();
  $(".initially-showing").slideToggle();
});

//Background Color Add and Remove Classes//

$("button#red-button").click( function(){
  $("body").removeClass();
  $("body").addClass("red-background");
});

$("button#blue-button").click( function(){
  $("body").removeClass();
  $("body").addClass("blue-background");
});

$("button#green-button").click( function(){
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#neutral-button").click( function(){
  $("body").removeClass();
  $("body").addClass("neutral-background");
});

});
