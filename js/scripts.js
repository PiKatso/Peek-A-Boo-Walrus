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

//Computer Talk & Response//
$("button#hello-button").click(function(){
  $("ul#guest-input").append("<li>hello HELLO!</li>");
  $("ul#computer-response").append("<li>well hello there doll.</li>");

});

$("button#whats-up-button").click(function(){
  $("ul#guest-input").append("<li>Yo yo yo, what's up?!</li>");
  $("ul#computer-response").append("<li>Yo homie, how it do?</li>");

});



});
