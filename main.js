// Add Grid Colors to form the Chessboard
let gameCells = document.querySelectorAll("#chessgame .gamecell");

let row = 0;

// A8 = Gamecell Index 0, H1 = Gamecell Index 63
for (let i = 0; i < 64; i++) {
  // Modulus 0 - Even Rows (8, 6, 4, 2)
  if (row % 2 === 0) {
    //If 1st If condition met, loop here. If not, jump to Else If
    if (i % 2 === 0) {
      gameCells[i].style.backgroundColor = "lightgray";
    } else {
      gameCells[i].style.backgroundColor = "darkgray";
    }
    if ((i + 1) % 8 === 0) {
      row++;
    }
    // Odd Rows (7, 5, 3, 1)
  } else if (row % 2 !== 0) {
    if (i % 2 === 0) {
      gameCells[i].style.backgroundColor = "darkgray";
    } else {
      gameCells[i].style.backgroundColor = "lightgray";
    }
    if ((i + 1) % 8 === 0) {
      row++;
    }
  }
}

// ============= MOVE CHESS PIECES ================
let moveable = false;
let pieceClicked;

let pieces = document.querySelectorAll(".chessPiece");
let squares = document.querySelectorAll(".gamecell");

// loop through Chess pieces (32) + EL awaiting "click" event
for (i = 0; i < pieces.length; i++) {
  pieces[i].addEventListener("click", whichPiece);
}

// Once a piece is chosen to move...
function whichPiece() {
  moveable = true;
  pieceClicked = this; //works within Array to specify "this" item

  // loop through Squares (64) + EL awaiting "click" event
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", movesPieceHere);
  }
}

// Places chess piece on chosen Square/Gamecell
function movesPieceHere() {
  moveable = false;

  this.appendChild(pieceClicked);
}

// =========== EATEN PIECES TO GRAVEYARD =========
let graveYard = document.querySelectorAll(".graveYard");
let pieceEaten;

// Intend to lay out eaten pieces in Black & White rows - currently stacking pieces
for (i = 0; i < graveYard.length; i++) {
  graveYard[i].addEventListener("click", movesPieceHere);
}

// **** Can't swap pieces becasue current pieces take up whole gamecell. Perhaps change the piecesto only cover theire own silhouette ******


// ******** SYMPATHY POINTS FOR DAYS OF CODING!!!! *********

// // ===== ORGANIZE CHESSBOARD UPON RESET ====
// // Array of Royal Black pieces for row 8
// let arrayRoyalB = [
//   "./RoyalImages/1B.png",
//   "./RoyalImages/2B.png",
//   "./RoyalImages/3B.png",
//   "./RoyalImages/4B.png",
//   "./RoyalImages/5B.png",
//   "./RoyalImages/6B.png",
//   "./RoyalImages/7B.png",
//   "./RoyalImages/8B.png",
// ];

// // Array of Royal White pieces for row 1
// let arrayRoyalW = [
//   "./RoyalImages/1W.png",
//   "./RoyalImages/2W.png",
//   "./RoyalImages/3W.png",
//   "./RoyalImages/4W.png",
//   "./RoyalImages/5W.png",
//   "./RoyalImages/6W.png",
//   "./RoyalImages/7W.png",
//   "./RoyalImages/8W.png",
// ];

// let row8 = document.querySelectorAll(".row-8");
// let row7 = document.querySelectorAll(".row-7");
// let row2 = document.querySelectorAll(".row-2");
// let row1 = document.querySelectorAll(".row-1");

// // Reset Button - Resets the Chessboard to starting position
// let resetButton = document.querySelector("#reset-button");
// resetButton.addEventListener("click", resetFunction);

// function resetFunction() {
//   resetButton.removeEventListener("click", resetFunction);
//   console.log("Reset Button Clicked");

//   // Black Royal Pieces populate row 8
//   for (i = 0; i < 8; i++) {
//     let blackRoyal = document.createElement("img");
//     blackRoyal.className = "chessPiece";
//     // blackRoyal.addEventListener('click', resetFunction);
//     row8[i].appendChild(blackRoyal);
//     blackRoyal.src = arrayRoyalB[i];
//   }

//   // Black Pawns populate row 7
//   for (i = 0; i < 8; i++) {
//     let blackPawns = document.createElement("img");
//     blackPawns.className = "chessPiece";
//     // blackPawnA.addEventListener('click', resetFunction);
//     row7[i].appendChild(blackPawns);
//     blackPawns.src = "./images/BlackPawn.png";
//   }

//   // White Pawns populate row 2
//   for (i = 0; i < 8; i++) {
//     let whitePawns = document.createElement("img");
//     whitePawns.className = "chessPiece";
//     // whitePawnA.addEventListener('click', resetFunction);
//     row2[i].appendChild(whitePawns);
//     whitePawns.src = "./images/WhitePawn.png";
//   }

//   // White Royal Pieces populate row 1
//   for (i = 0; i < 8; i++) {
//     let whiteRoyal = document.createElement("img");
//     whiteRoyal.className = "chessPiece";
//     // whiteRoyal.addEventListener('click', resetFunction);
//     row1[i].appendChild(whiteRoyal);
//     whiteRoyal.src = arrayRoyalW[i];
//   }
// }

// ====== Move Chess pieces - Draggable =======
// document.addEventListener("DOMContentLoaded", (event) => {
//   function handleDragStart(event) {
//     this.style.opacity = "0.4";
//     dragSrcEl = this;

//     event.dataTransfer.effectAllowed = "move";
//     event.dataTransfer.setData("img/html", this.innerHTML);
//   }

//   function handleDragEnd(event) {
//     this.style.opacity = "1";

//     items.forEach(function (item) {
//       item.classList.remove("over");
//     });
//   }

//   function handleDragOver(event) {
//     event.preventDefault();
//     return false;
//   }

//   function handleDragEnter(event) {
//     this.classList.add("over");
//   }

//   function handleDragLeave(event) {
//     this.classList.remove("over");
//   }

//   function handleDrop(event) {
//     event.stopPropagation();
//     if (dragSrcEl !== this) {
//       dragSrcEl.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData("img/html");
//     }
//     return false;
//   }

//   let items = document.querySelectorAll("#chessgame .chessPiece");
//   items.forEach(function (item) {
//     item.addEventListener("dragstart", handleDragStart);
//     item.addEventListener("dragover", handleDragOver);
//     item.addEventListener("dragenter", handleDragEnter);
//     item.addEventListener("dragleave", handleDragLeave);
//     item.addEventListener("dragend", handleDragEnd);
//     item.addEventListener("drop", handleDrop);
//   });
// });

// =============================================

// ******* SAVE JUST INCASE **************
//   // Black Rook 1
//   let blackRook1 = document.createElement("img"); //Creates img element
//   blackRook1.className = "chessPiece"; // CSS link to adjust piece parameters
//   // blackRook1.addEventListener('click', resetFunction);
//   let cellA8 = document.querySelector("#a8"); // ref to existing HTML element (parent)
//   cellA8.appendChild(blackRook1); //adds img (as child) to parent
//   blackRook1.src = "./images/BlackRook.png"; // access src to img folder

//   // Black Knight 1
//   let blackKnight1 = document.createElement("img");
//   blackKnight1.className = "chessPiece";
//   // blackKnight1.addEventListener('click', resetFunction);
//   let cellB8 = document.querySelector("#b8");
//   cellB8.appendChild(blackKnight1);
//   blackKnight1.src = "./images/BlackKnight.png";

//   // Black Bishop 1
//   let blackBishop1 = document.createElement("img");
//   blackBishop1.className = "chessPiece";
//   // blackBishop1.addEventListener('click', resetFunction);
//   let cellC8 = document.querySelector("#c8");
//   cellC8.appendChild(blackBishop1);
//   blackBishop1.src = "./images/BlackBishop.png";

//   // Black Queen
//   let blackQueen = document.createElement("img");
//   blackQueen.className = "chessPiece";
//   // blackQueen.addEventListener('click', resetFunction);
//   let cellD8 = document.querySelector("#d8");
//   cellD8.appendChild(blackQueen);
//   blackQueen.src = "./images/BlackQueen.png";

//   //  Black King
//   let blackKing = document.createElement("img");
//   blackKing.className = "chessPiece";
//   // blackKing.addEventListener('click', resetFunction);
//   let cellE8 = document.querySelector("#e8");
//   cellE8.appendChild(blackKing);
//   blackKing.src = "./images/BlackKing.png";

//   // Black Bishop 2
//   let blackBishop2 = document.createElement("img");
//   blackBishop2.className = "chessPiece";
//   // blackBishop2.addEventListener('click', resetFunction);
//   let cellF8 = document.querySelector("#f8");
//   cellF8.appendChild(blackBishop2);
//   blackBishop2.src = "./images/BlackBishop.png";

//   // Black Knight 2
//   let blackKnight2 = document.createElement("img");
//   blackKnight2.className = "chessPiece";
//   // blackKnight2.addEventListener('click', resetFunction);
//   let cellG8 = document.querySelector("#g8");
//   cellG8.appendChild(blackKnight2);
//   blackKnight2.src = "./images/BlackKnight.png";

//   // Black Rook 2
//   let blackRook2 = document.createElement("img");
//   blackRook2.className = "chessPiece";
//   // blackRook2.addEventListener('click', resetFunction);
//   let cellH8 = document.querySelector("#h8");
//   cellH8.appendChild(blackRook2);
//   blackRook2.src = "./images/BlackRook.png";

// =======  WHITE   ===================================

//   // White Rook 1
//   let whiteRook1 = document.createElement("img");
//   whiteRook1.className = "chessPiece";
//   // whiteRook1.addEventListener('click', resetFunction);
//   let cellA1 = document.querySelector("#a1");
//   cellA1.appendChild(whiteRook1);
//   whiteRook1.src = "./images/WhiteRook.png";

//   // White Knight 1
//   let whiteKnight1 = document.createElement("img");
//   whiteKnight1.className = "chessPiece";
//   // whiteKnight1.addEventListener('click', resetFunction);
//   let cellB1 = document.querySelector("#b1");
//   cellB1.appendChild(whiteKnight1);
//   whiteKnight1.src = "./images/WhiteKnight.png";

//   // White Bishop 1
//   let whiteBishop1 = document.createElement("img");
//   whiteBishop1.className = "chessPiece";
//   // whiteBishop1.addEventListener('click', resetFunction);
//   let cellC1 = document.querySelector("#c1");
//   cellC1.appendChild(whiteBishop1);
//   whiteBishop1.src = "./images/WhiteBishop.png";

//   //  White Queen
//   let whiteQueen = document.createElement("img");
//   whiteQueen.className = "chessPiece";
//   // whiteQueen.addEventListener('click', resetFunction);
//   let cellD1 = document.querySelector("#d1");
//   cellD1.appendChild(whiteQueen);
//   whiteQueen.src = "./images/WhiteQueen.png";

//   //  White King
//   let whiteKing = document.createElement("img");
//   whiteKing.className = "chessPiece";
//   // whiteKing.addEventListener('click', resetFunction);
//   let cellE1 = document.querySelector("#e1");
//   cellE1.appendChild(whiteKing);
//   whiteKing.src = "./images/WhiteKing.png";

//   // White Bishop 2
//   let whiteBishop2 = document.createElement("img");
//   whiteBishop2.className = "chessPiece";
//   // whiteBishop2.addEventListener('click', resetFunction);
//   let cellF1 = document.querySelector("#f1");
//   cellF1.appendChild(whiteBishop2);
//   whiteBishop2.src = "./images/WhiteBishop.png";

//   // White Knight 2
//   let whiteKnight2 = document.createElement("img");
//   whiteKnight2.className = "chessPiece";
//   // whiteKnight2.addEventListener('click', resetFunction);
//   let cellG1 = document.querySelector("#g1");
//   cellG1.appendChild(whiteKnight2);
//   whiteKnight2.src = "./images/WhiteKnight.png";

//   // White Rook 2
//   let whiteRook2 = document.createElement("img");
//   whiteRook2.className = "chessPiece";
//   // whiteRook2.addEventListener('click', resetFunction);
//   let cellH1 = document.querySelector("#h1");
//   cellH1.appendChild(whiteRook2);
//   whiteRook2.src = "./images/WhiteRook.png";
