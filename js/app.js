// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var playerTurn = 1;
  var gameEnd = 1;

  $('.box').on('click',function(){

    var played = $(this);

    if (played.hasClass('p1') || played.hasClass('p2'))  {
      alert ("already played!");
    }
    else {
      if (playerTurn ===1) {
          played.append('<img src= "d1.png">');
          played.addClass('p1');
          if (checkWon('p1')) {
            alert('You Won!');
          }

          else {
            playerTurn = 2;
          }
      }
      else {
        played.append('<img src= "d2.png">');
        played.addClass('p2');
        if (checkWon('p2')) {
          alert('You Won!');
        }
        else {
          playerTurn = 1;
        }
      }
    }
  });

    function checkWon(player) {
      if ($('#a1').hasClass(player) && $('#a2').hasClass(player) && $('#a3').hasClass(player)) {
        return true;
      }

      else if ($('#a4').hasClass(player) && $('#a5').hasClass(player) && $('#a6').hasClass(player)) {
        return true;
      }

      else if ($('#a7').hasClass(player) && $('#a8').hasClass(player) && $('#a9').hasClass(player)) {
        return true;
      }

      else if ($('#a1').hasClass(player) && $('#a4').hasClass(player) && $('#a7').hasClass(player)) {
        return true;
      }

      else if ($('#a2').hasClass(player) && $('#a5').hasClass(player) && $('#a8').hasClass(player)) {
        return true;
      }

      else if ($('#a3').hasClass(player) && $('#a6').hasClass(player) && $('#a9').hasClass(player)) {
        return true;
      }

      else if ($('#a1').hasClass(player) && $('#a5').hasClass(player) && $('#a9').hasClass(player)) {
        return true;
      }

      else if ($('#a3').hasClass(player) && $('#a5').hasClass(player) && $('#a7').hasClass(player)) {
        return true;
      }
      else {
        return false;
      }
    }





});
