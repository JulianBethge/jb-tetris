class Tetris {
  constructor() {
    this.boardVisual = null
    this.boardMath = null
    this.intervalId = null
    this.piece = null
  }
  start() {
    // Create the visual board
    this.boardVisual = document.getElementById("board")
    this.boardMath = Array.from({ length: boardHeight }, () =>
      Array(boardWidth).fill(0)
    )

    // Add cells to the visual board
    for (let row = 0; row < boardHeight; row++) {
      for (let col = 0; col < boardWidth; col++) {
        let cell = document.createElement("div")
        cell.classList.add("cell")
        this.boardVisual.appendChild(cell)
      }
    }

    // Start the game loop
    this.runGameLoop()
  }
  runGameLoop() {
    this.intervalId = setInterval(() => {}, 1000)
  }
}

class Piece {
  constructor() {
    this.x = 0
    this.y = 0
    this.rotation = 0
    this.color = "red"
    this.shape = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    this.createDomElement()
  }
  createDomElement() {
    this.domElement = document.createElement("div")
    this.domElement.classList.add("piece")
    this.domElement.style.backgroundColor = this.color

    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.shape[row][col] === 1) {
          let cell = document.createElement("div")
          cell.classList.add("cell")
          this.domElement.appendChild(cell)
        }
      }
    }
  }
}

// Define the dimensions of the board
const boardWidth = 10
const boardHeight = 20

// Initialize the game
const tetris = new Tetris()

// Start the game
tetris.start()
