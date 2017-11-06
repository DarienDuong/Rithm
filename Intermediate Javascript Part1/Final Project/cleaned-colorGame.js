var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square")
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

// selecting all the buttons now instead of manually selecting each
function setupModeButtons(){
	for(var i =0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		// remove class from both buttons and then add to one just clicked on
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// } else {numSquares = 6;}
		// here's another way to write the if statement
		this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setupSquares(){
	for (var i = 0; i<squares.length; i++){
	// add click listener to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square and compare it to picked color
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares on the page. we've done this already
	// loop through 6 squares and check if there's a color that matches that square
	for (var i =0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"; 
			squares[i].style.backgroundColor = colors[i];
		} else {squares[i].style.display = "none";}
		
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	// loop through all squares and change to match given color
	for (var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

//math.random will pick a number between 0 and 1 not including 1
//multiply by 6 if want number to go up to 6
// Math.random() * 6 + 1 will give number including 6-6.999
// Math.floor(Math.random()* 6 +1) will chop off the decimal
// multiply it by the number of color because we might have 3 or 6 colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

// need a function to generate 6 random colors
function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i =0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

// this function will actually generate the random color
function randomColor() {
	//pick a red from 0 - 255
	var red = Math.floor(Math.random() *256);
	//pick green from 0 - 255
	var green = Math.floor(Math.random() *256);
	//pick blue from 0 - 255
	var blue = Math.floor(Math.random() *256);

	return "rgb(" + red + ", " + green + ", " + blue + ")"
}