// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var switchTurn = 1;
  var gameEnd = 1;

  function playerPlay(player) {
  $('.box').one('click',function(player){
    $(this).append('<img class = "player" src="player.jpg">');
    })
  };

  if (switchTurn === 1) {
    playerPlay(d1);
    switchTurn = 2;
  }
  if (switchTurn === 2) {
    playerPlay(d2);
    switchTurn = 1;
  }


 console.log(switchTurn);

});
