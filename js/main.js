console.log("main.js wurde geladen");

class Tetris {
    constructor() {
        
    }
}

const boardWidth = 10;
const boardHeight = 20;
const tetrisBoard = Array.from({ length: boardHeight }, () => Array(boardWidth).fill(0));

const board = document.getElementById("board")

for (let row = 0; row < boardHeight; row++) {
    for (let col = 0; col < boardWidth; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      board.appendChild(cell);
    }
  }

console.log(tetrisBoard);

const tetris = new Tetris();