/* This JavaScript file is more to alleviate the background
   coding and make manipulation of the HTML/CSS much easier. */

// Creates Easy-to-Use DOM shortcuts for elements on screen.
var startButton = document.getElementById('startButton');
var input = document.getElementById("input");
var accuracy = document.getElementById("accuracy");
var time = document.getElementById("timeOutput");
var errorOutput = document.getElementById("errorOutput");
var text = document.getElementById("textOutput");
var started = false; // Security measure

// Variables
var textChoice = randomNumber(0, 4);
var string;
var textChar = 0;
var inputChar = 0;
var typedChar = 0;
var inputArray;
var stringArray;
var spanArray;
var distance;
var errors = 0;

/* -------------CODE----------- */

// Turns Quote Into Array and then Joins to Display (See Function)
createText();

// Button to Start Test
startButton.addEventListener("click", function() {
    startTest();
    time();
});

/* ------FUNCTIONS---------- */

// Easier Function to Generate Random Number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
}

// Turns Quote Into Array and then Joins to Display (See Function)
function createText() {
    stringArray = texts[textChoice].split("");
    string = texts[textChoice].split("").forEach(char => { 
	    const charSpan = document.createElement('span') 
	    charSpan.innerText = char 
	    text.appendChild(charSpan)
        });
    textChar = stringArray.length;
    spanArray = text.querySelectorAll('span');

    /* var textLength = spanArray.length - 1;
    for (var i = textLength; i <= spanArray.length - 1; i--) {
        spanArray[i].classList.add("normal_char");
    } */ //TESTING PURPOSES
} 

// Starts Test
function startTest() {
    started = true;
    input.value = "";
    startButton.disabled = true;
    input.disabled = false;
    input.focus();
}

// Security Measure
function disableTest() {
    startButton.disabled = false;
    input.disabled = true;
    input.value = "Locked.\nPossible Reasons:\n- Attempted Cheating\n- Other Error\n(Always use the 'Start' button.)"
}

/* Use this to get how many elements have class "text" is the parent div
text.getElementsByClassName("correct_char").length; */

console.log("config.js loaded");