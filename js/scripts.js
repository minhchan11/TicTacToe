//Defining global variable
var turn = 0;
var player = 0;
//Business Logic
//ORIGINAL CONSTRUCTOR BOARD
function board(row,col,dia) {
  this.row = row;
  this.col = col;
  this.dia = dia; }
//CREATE PROTOTYPE TO CHECK SCORE, ANNOUNCE RESULT
  board.prototype.check = function () {
    for (var i = 0; i < 3 ; i++) {
      if( this.row[i] === 1) {
        alert ("Player X wins!");
      } else if (this.row[i] === 8) {
        alert("Player O wins");
      } else if (this.col[i] === 1) {
        alert("Player X wins");
      } else if (this.col[i] === 8) {
        alert("Player O wins");
      } else if (this.dia[i] === 1) {
        alert("Player X wins");
      } else if (this.dia[i] === 8) {
        alert("Player 0 wins");
      } else {
        if (turn === 9) {
          alert("This is a tie game");
          return false;
        }
      }
    };
  };

    //User Logic
    $(document).ready(function() {
  $("input#square").click(function() {
    if (player === 0) {
        $(this).val("1");
        $(this).addClass("red");
        $(this).prop("disabled",true);
        player += 1;
    } else {
      $(this).val("2");
      $(this).addClass("blue");
      $(this).prop("disabled",true);
      player -=1;
    }
    turn+=
    //TAKE VALUE
    box1 = parseInt($("input.box1").val());
    box2 = parseInt($("input.box2").val());
    box3 = parseInt($("input.box3").val());
    box4 = parseInt($("input.box4").val());
    box5 = parseInt($("input.box5").val());
    box6 = parseInt($("input.box6").val());
    box7 = parseInt($("input.box7").val());
    box8 = parseInt($("input.box8").val());
    box9 = parseInt($("input.box9").val());
    //MAKE VALUE INTO SCORE
    var rowScore = [(box1*box2*box3),(box4*box5*box6),(box7*box8*box9)];
    console.log(rowScore);
    var colScore = [(box1*box4*box7),(box2*box5*box8),(box3*box6*box9)];
    console.log(colScore);
    var diaScore = [(box1*box5*box9),(box3*box5*box7)];
    var boardScore = new board(rowScore,colScore,diaScore);
    boardScore.check();
  });
});
