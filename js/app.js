document.addEventListener("DOMContentLoaded", function () {
    var squares = document.querySelectorAll(".square");
    var colors = generateRandomColors(6);
    var messageDisplay = document.getElementById("message");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = pickedColor;
    var h1 = document.querySelector("h1");
    var resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", function () {
        //generate all new colors
        colors = generateRandomColors(6);
        //pick a new random color from array
        pickedColor = pickColor();
        //change colorDisplay to match pickedColor
        colorDisplay.textContent = pickedColor;
        //change colors of squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            //change color of h1
            h1.style.backgroundColor = "#123252";
        }
    });
    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
        //add click listener to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            //compare clicked color to pickedColor
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

    function generateRandomColors(num) {
        //make an empty array
        var arr = [];
        //add num random colors to arr
        for (var i = 0; i < num; i++) {
            //get random color and push into arr
            arr.push(randomColor());
        }
        //return that array
        return arr;
    }

    function randomColor() {
        //pick a red from 0 - 255
        var r = Math.floor(Math.random() * 256);
        //pick a green from 0 - 255
        var g = Math.floor(Math.random() * 256);
        //pick a blue from 0 - 255
        var b = Math.floor(Math.random() * 256);
        //return string "rgb(r, g, b)"
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
});