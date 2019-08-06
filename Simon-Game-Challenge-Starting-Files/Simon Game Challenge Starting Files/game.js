var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function(){
  if(!started){
      nextSequence();
      started = true;
  }
});

function nextSequence(){
  userClickedPattern = [];
  level++;
  $('h1').text("Level ");
  $('h1').append(level);

  var num = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[num];
  gamePattern.push(randomChosenColour);
  $('#' +randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$('.btn').on("click", function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkPressed(userClickedPattern.length-1);

});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $('#' + currentColor).addClass("pressed");
  setTimeout(function(){ $('#' + currentColor).removeClass("pressed"); }, 100);

}

function checkPressed(i){
    if (userClickedPattern[i] === gamePattern[i]){
        console.log("correct");
        if(userClickedPattern.length === gamePattern.length){
          setTimeout(function(){
            nextSequence();
            },1000);
          }
      }else{
        console.log("wrong");
        wrong = new Audio('sounds/wrong.mp3');
        wrong.play();
        $('body').addClass('game-over');
        setTimeout(function(){
          $('body').removeClass('game-over');
        },200);
        $('h1').text("Game Over, Press Any Key to Restart");
        startOver();
  }
}
function startOver(){
  started = false;
  level = 0;
  gamePattern = [];
}
