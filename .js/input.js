/* This JavaScript file is the brains of the operations
   and is responsible for processing (e.g. formatting) the inputted text. 
   See math.js for calculations. */

// On Input (only works after startTest() has run)
input.addEventListener("input", function () {
    if (started === false) {
        disableTest();
    }

    inputArray = input.value;
    inputArray = inputArray.split("");

    updateChar();
    updateText();
    errorMath();
    accuracyMath();
    wpm();
    cpm();
});

// Updates typedChar based on on Input
function updateChar() {
    if (inputArray.length > typedChar) {
        // Updates variables
        typedChar++;
        inputChar = inputArray.length
    } else {
        // When backspaced, calculates the new typedChar
        distance = typedChar - inputArray.length;
        typedChar = typedChar - distance;
    }
}

function updateText() {
    var textLength = spanArray.length - 1;
    for (var i = textLength; i >= inputArray.length - 1; i--) {
        var charClass = spanArray[i].className;

        if (inputArray[i] == stringArray[i] && (charClass == "" || charClass == "backspace")) {
            // if correct
            console.log(inputArray[i] + " correct");
            spanArray[i].classList.remove("incorrect_char");
            spanArray[i].classList.remove("fixed_char");
            spanArray[i].classList.remove("backspace");
            spanArray[i].classList.add("correct_char");

        } else if ((inputArray[i] == stringArray[i]) && charClass == "incorrect_char") {
            // if fixed
            console.log(inputArray[i] + " fixed");
            spanArray[i].classList.remove("incorrect_char");
            spanArray[i].classList.remove("correct_char");
            spanArray[i].classList.remove("backspace");
            spanArray[i].classList.add("fixed_char");

        } else if ((inputArray[i] != stringArray[i]) && (i == typedChar - 1)) {
            // if wrong
            console.log(inputArray[i] + " incorrect");
            spanArray[i].classList.remove("backspace");
            spanArray[i].classList.add("incorrect_char");
         
        } else if (charClass == "incorrect_char") {
            // Do nothing

        } else if ((inputArray[i] != stringArray[i]) && (charClass != "")) {
            spanArray[i].classList.remove("incorrect_char");
            spanArray[i].classList.remove("correct_char");
            spanArray[i].classList.remove("fixed_char");
            spanArray[i].classList.add("backspace");
        }
    }
}

console.log("input.js loaded");