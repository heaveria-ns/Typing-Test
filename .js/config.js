/* This JavaScript file is more to alleviate the background
   coding and make manipulation of the HTML/CSS much easier. */

// Creates Easy-to-Use DOM shortcuts for elements on screen.
var startButton = document.getElementById('startButton');
var input = document.getElementById("input");
var accuracy = document.getElementById("accuracyOutput");
var timeOutput = document.getElementById("timeOutput");
var errorOutput = document.getElementById("errorOutput");
var cpmOutput = document.getElementById("cpmOutput");
var wpmOutput = document.getElementById("wpmOutput");
var text = document.getElementById("textOutput");
var started = false; // Security measure

// Variables
var textChoice = randomNumber(0, 4);
var string;
var cpm;
//---Typed Characters---
var textChar = 0;
var inputChar = 0;
var typedChar = 0;
var wordChar = 0;
var inputWords = 0;
//---Arrays---
var inputArray; //Each character of input.
var stringArray; //Each character.
var spanArray; //Each <span> in text.
var wordArray; //Each word in text.
var distance;
var errors = 0;
var accuracy;
//---Time---
var seconds = 0;
var minutes = 0;
var totalSeconds = 0;
var time;
var timerInterval; 

/* -------------CODE----------- */

// Turns Quote Into Array and then Joins to Display (See Function)
createText();

// Button to Start Test
startButton.addEventListener("click", function() {
    startTest();
    setInterval(timerMath, 1000);
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

    wordArray = texts[textChoice].split(" ");
    wordChar = wordArray.length;
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
    startButton.disabled = true;
    input.disabled = true;
    if (started === false) {
    input.value = "Locked.\nPossible Reasons:\n- Attempted Cheating\n- Other Error\n(Always use the 'Start' button.)"
    }
}

console.log("config.js loaded");