

var numberOfSquares = 6;
var playerHighScore = 0;

var colors = generateRandomColors(numberOfSquares);
var correctColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var highScore = document.getElementById("highScore");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
       this.classList.add("selected"); 
    });
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
}

easyButton.addEventListener("click", function() {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function () {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];       
            squares[i].style.display = "block";        
    }
});

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numberOfSquares);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    highScore.textContent = "Current streak: " + playerHighScore;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
})



colorDisplay.textContent = correctColor;
highScore.textContent = "Current streak: " + playerHighScore;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {

      var clickedColor = this.style.backgroundColor;
      
      if (clickedColor === correctColor) {
          messageDisplay.textContent = "Correct!";
          playerHighScore++;
          changeColors(clickedColor);
          h1.style.backgroundColor = correctColor;
          resetButton.textContent = "Play Again?";
      } else {
          playerHighScore = 0;
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try again";
      }
        
    });
}

// Loops through the squares and changes their color to the correct color when answering correctly.
function changeColors (color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }

}

function pickColor () {

    var random = Math.floor(Math.random() * colors.length);

    return colors[random];
}

function generateRandomColors(number) {

    var array = [];

    for (var i = 0; i < number; i++) {
        array.push(randomColor());

    }
    return array;
}

function randomColor () {
    
    var red = Math.floor(Math.random() * 256);

    var green = Math.floor(Math.random() * 256);

    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";

} 