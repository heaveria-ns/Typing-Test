/* This JavaScript file is responsible
   for all the math from the inputted text. */

// Calculates errors and updates HTML
function errorMath() {
    errors = text.getElementsByClassName("incorrect_char").length + text.getElementsByClassName("fixed_char").length;
    errorOutput.innerHTML = errors;
}

// Calculates words-per-minute and updates HTML
 function wpmMath() {
    inputWords = inputArray.join("");
    var numWords = inputWords.split(" ").length;
    wpmOutput.innerHTML = Math.round(numWords/(totalSeconds / 60)); 
}

// Calculates characters-per-minute and updates HTML
function cpmMath() {
    cpmOutput.innerHTML = Math.round(typedChar/(totalSeconds / 60));
}

// Calculates accuracy and updates HTML
function accuracyMath() {
    errors = text.getElementsByClassName("incorrect_char").length + text.getElementsByClassName("fixed_char").length;
    accuracy = 100 - Math.round((100 / wordChar) * errors);
    accuracyOutput.innerHTML = accuracy + "%";
}

/* Math to count up since 0:0 (min:sec).
   called in config.js */
function timerMath() {
    if (seconds < 60) {
        seconds++;
        totalSeconds++;
        time = minutes + ":" + seconds;
        timeOutput.innerHTML = time;
    } else if (seconds >= 60) {
        seconds = 0;
        minutes++;
        totalSeconds++;
        time = minutes + ":" + seconds;
        timeOutput.innerHTML = time;
    };

    cpmMath();
    wpmMath();
}

console.log("math.js loaded");