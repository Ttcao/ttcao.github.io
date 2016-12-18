var numOfturns = 0;
var p1ScoreTotal = 0;
var p2ScoreTotal = 0;
var gameOver = false;

// create gameboard data structure
// [maxRow[maxColumn], maxRow[maxColumn], maxRow[maxColumn]]
var createBoard = function() {
    var maxRow = 3;
    var maxColumn = 3;
    var emptyRow = new Array(maxColumn);

    // gameBoard has maxRow (3) number of rows
    gameBoard = new Array(maxRow);

    // Each row contains maxColumn (3) number of tiles
    for (var i = 0; i < maxRow; i++) {
        gameBoard[i] = new Array(maxColumn);
    }

    // At this point each element is undefined
    for (var i = 0; i < maxRow; i++) {
        for (var j = 0; j < maxColumn; j++) {
            gameBoard[i][j] = "";
        }
    }
}

// creates board in UI
var renderBoard = function() {
    var maxTiles = 3;
    for (var i = 0; i < maxTiles; i++) {
        var rowElement = document.createElement('div');
        // rowElement.setAttribute('data-value', );
        rowElement.className = 'row';

        for (var j = 0; j < maxTiles; j++) {
            var tileElement = document.createElement('div');
            tileElement.setAttribute('data-row', i);
            tileElement.setAttribute('data-column', j);
            tileElement.className = 'tile';
            tileElement.addEventListener('click', placeMark);
            rowElement.appendChild(tileElement);
        }
        // rows with tiles have been created to append to wrapper - UI.
        wrapperDOMelement.appendChild(rowElement);
    }
}

// gameplay - places the mark on the board and alternates players
var placeMark = function(event) {
  if (gameOver == false) {
    var clickedElement = event.target;

    //disables click event listener of target
    clickedElement.removeEventListener('click', placeMark);

    var indexRow = clickedElement.getAttribute('data-row');
    var indexColumn = clickedElement.getAttribute('data-column');
    // placeValue(indexRow, indexColumn);
  }
    numOfturns++;
    if (numOfturns % 2 !== 0) {
        console.log(event.target);
        gameBoard[indexRow][indexColumn] = "Player-One";
        event.target.innerHTML = '<img src="images/pacman.png" alt="pacman"/>';
    } else if (numOfturns % 2 == 0) {
        console.log(event.target);
        gameBoard[indexRow][indexColumn] = "Player-Two";
        event.target.innerHTML = '<img src="images/ghost.png" alt="ghost"/>';
    }
    checkResult();
}

// checks win
var checkResult = function() {
    if ((winRowP1() == true) || (winColumnP1() == true) || (winDiagonalP1() == true)) {
        p1ScoreTotal++
        gameOver = true;
        resultTextDOMelement.innerHTML = "PacMan Wins!";
        p1Score.innerHTML = p1ScoreTotal;

    } else if ((winRowP2() == true) || (winColumnP2() == true) || (winDiagonalP2() == true)) {
        p2ScoreTotal++
        gameOver = true;
        resultTextDOMelement.innerHTML = "Blinky Wins!";
        p2Score.innerHTML = p2ScoreTotal;

    } else {
        checkDraw();
    }
}

// //checks draw // if board is full
var checkDraw = function() {
    if ((gameBoard[0][0] !== "") && (gameBoard[0][1] !== "") && (gameBoard[0][2] !== "") && (gameBoard[1][0] !== "") && (gameBoard[1][1] !== "") && (gameBoard[1][2] !== "") && (gameBoard[2][0] !== "") && (gameBoard[2][1] !== "") && (gameBoard[2][2] !== "")) {
        resultTextDOMelement.innerHTML = "It's a draw!";
    }
}

var winRowP1 = function() {
    if ((gameBoard[0][0] === "Player-One") && (gameBoard[0][1] === "Player-One") && (gameBoard[0][2] === "Player-One")) {
        return true;
    }
    if ((gameBoard[1][0] === "Player-One") && (gameBoard[1][1] === "playerOne") && (gameBoard[1][2] === "Player-One")) {
        return true;
    }
    if ((gameBoard[2][0] === "Player-One") && (gameBoard[2][1] === "Player-One") && (gameBoard[2][2] === "Player-One")) {
        return true;
    }
}

var winRowP2 = function() {
    if ((gameBoard[0][0] === "Player-Two") && (gameBoard[0][1] === "Player-Two") && (gameBoard[0][2] === "Player-Two")) {
        return true;
    }
    if ((gameBoard[1][0] === "Player-Two") && (gameBoard[1][1] === "Player-Two") && (gameBoard[1][2] === "Player-Two")) {
        return true;
    }
    if ((gameBoard[2][0] === "Player-Two") && (gameBoard[2][1] === "Player-Two") && (gameBoard[2][2] === "Player-Two")) {
        return true;
    }
}

var winColumnP1 = function() {
    if ((gameBoard[0][0] === "Player-One") && (gameBoard[1][0] === "Player-One") && (gameBoard[2][0] === "Player-One")) {
        return true;
    }
    if ((gameBoard[0][1] === "Player-One") && (gameBoard[1][1] === "Player-One") && (gameBoard[2][1] === "Player-One")) {
        return true;
    }
    if ((gameBoard[0][2] === "Player-One") && (gameBoard[1][2] === "Player-One") && (gameBoard[2][2] === "Player-One")) {
        return true;
    }
}

var winColumnP2 = function() {
    if ((gameBoard[0][0] === "Player-Two") && (gameBoard[1][0] === "Player-Two") && (gameBoard[2][0] === "Player-Two")) {
        return true;
    }
    if ((gameBoard[0][1] === "Player-Two") && (gameBoard[1][1] === "Player-Two") && (gameBoard[2][1] === "Player-Two")) {
        return true;
    }
    if ((gameBoard[0][2] === "Player-Two") && (gameBoard[1][2] === "Player-Two") && (gameBoard[2][2] === "Player-Two")) {
        return true;
    }
}

var winDiagonalP1 = function() {
    if ((gameBoard[0][0] === "Player-One") && (gameBoard[1][1] === "Player-One") && (gameBoard[2][2] === "Player-One")) {
        return true;
    }
    if ((gameBoard[0][2] === "Player-One") && (gameBoard[1][1] === "Player-One") && (gameBoard[2][0] === "Player-One")) {
        return true;
    }
}

var winDiagonalP2 = function() {
    if ((gameBoard[0][0] === "Player-Two") && (gameBoard[1][1] === "Player-Two") && (gameBoard[2][2] === "Player-Two")) {
        return true;
    }
    if ((gameBoard[0][2] === "Player-Two") && (gameBoard[1][1] === "Player-Two") && (gameBoard[2][0] === "Player-Two")) {
        return true;
    }
}

// resets the game
var newGame = function() {
    numOfturns = 0;
    wrapperDOMelement.innerHTML = createBoard();
    resultTextDOMelement.innerHTML = "";
    gameOver = false;
    renderBoard();
}

// new game button
var newGameDOM = document.getElementById('new-game');
newGameDOM.addEventListener('click', newGame);

// the rendered board
var wrapperDOMelement = document.getElementById('wrapper');

var resultTextDOMelement = document.getElementById('result-text');
resultTextDOMelement.className = "blink";

var p1Score = document.getElementById('p1-score');
p1Score.className = "score";

var p2Score = document.getElementById('p2-score');
p2Score.className = "score";

createBoard();
renderBoard();
