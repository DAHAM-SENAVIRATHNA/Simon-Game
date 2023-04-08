var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];


function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
 }


$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + buttonColors + ".mp3");
audio.play();


$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });