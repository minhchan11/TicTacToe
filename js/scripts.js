//Business Logic
//ORIGINAL CONSTRUCTOR BOARD
function board(row,col,dia) {
  this.row = row;
  this.col = col;
  this.dia = dia; }

  board.prototype.check = function () {
    for (var i = 0; i < 2 ; i++) {
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
      }
    };
  };

  //User Logic
  $(document).ready(function() {
    $(".table").change(function() {
      //TAKE VALUE
      box1 = parseInt($("#topLeft").val());
      box2 = parseInt($("#topMiddle").val());
      box3 = parseInt($("#topRight").val());
      box4 = parseInt($("#centerLeft").val());
      box5 = parseInt($("#centerMiddle").val());
      box6 = parseInt($("#centerRight").val());
      box7 = parseInt($("#bottomLeft").val());
      box8 = parseInt($("#bottomMiddle").val());
      box9 = parseInt($("#bottomRight").val());
      //MAKE VALUE INTO SCORE
      var rowScore = [(box1*box2*box3),(box4*box5*box6),(box7*box8*box9)];
      var colScore = [(box1*box4*box7),(box2*box5*box8),(box3*box6*box9)];
      var diaScore = [(box1*box5*box9),(box3*box5*box7)];
      var boardScore = new board(rowScore,colScore,diaScore);
      console.log(boardScore);
      boardScore.check();
    });
  });
