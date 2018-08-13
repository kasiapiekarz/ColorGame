document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");
    var colors = [
        "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"
    ];
    var messageDisplay = document.getElementById("message");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = pickedColor;
    var h1 = document.querySelector("h1");
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#123252";
                messageDisplay.textContent = "Try again!";
            }
        });
    }

    function changeColors(color) {
        //loop through all squares
        for (var i = 0; i < squares.length; i++) {
            //change each color to match given color
            squares[i].style.backgroundColor = color;
        }
    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
});