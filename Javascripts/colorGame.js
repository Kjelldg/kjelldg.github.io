var colors = [
    "rgb(255, 0, 0)",
    "rgb(55, 1, 0)",
    "rgb(5, 77, 13)",
    "rgb(0, 231, 0)",
    "rgb(55, 55, 190)",
    "rgb(132, 68, 212)"
]

var squares = document.querySelectorAll(".square");
var correctColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {

      var clickedColor = this.style.backgroundColor;
      if (clickedColor === correctColor) {
          alert("Correct!");
      } else {
          this.style.backgroundColor = "#232323";
      }
        
    });
}