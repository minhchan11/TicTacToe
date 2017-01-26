var score = 0

//Business Logic
//ORIGINAL CONSTRUCTOR BOARD
function Board(row,col,diag) {
    this.row = row;
    this.col = col;
    this.diag = diag; }
//CHILDREN CONSTRUCTOR ROW
function row(row1,row2,row3) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3; };
 // Children CONSTRUCTOR Column
function column(col1, col2,col3){
this.col1  = col1;
this.col2 = col2;
this.col3 = col3; };
// Children Constructor Diagonal
function  diagonal(diagonalLeft,diagonalRight){
this.diagonalLeft = diagonalLeft;
this.diagonalRight = diagonalRight;
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

    //STARTING USER INPUT TO MAKE NEW OBJECT FROM CONSTRUCTOR
    // User input in a row goes here
    var rowOne = [box1,box2,box3];
    var rowTwo = [box4,box5,box6];
    var rowThree = [box7,box8,box9];
    var myRow = new row (rowOne,rowTwo,rowThree);

  // User input in a column goes here
    var colOne = [box1,box4,box7];
    var colTwo = [box2,box5,box8];
    var colThree = [box3,box6,box9];
    var myColumn = new column(colOne,colTwo,colThree);

    // User input in a diagonal goes here
    var diagonalLeft=[box1,box5,box9];
    var diagonalRight = [box3,box5,box7];
    var myDiagonal = new diagonal(diagonalLeft,diagonalRight);


  })
});
