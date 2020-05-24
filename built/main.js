var startGameBtn = document.querySelector("button");
var inputField = document.querySelector("input");
var showTextField = document.getElementById("show-text-to-type");
var something = document.getElementById("show-if-right");
var countdownField = document.getElementById("countdown");
var textToType = ["Python", "Hacking", "JavaScript", "TypeScript"];
var showHighScore = document.getElementById("show-highscore");
var highScore = 0;
var index = 0;
var score = 0;
var youCanType = false;
var timeleft = 10;
var updateScore = function (score) {
    something.textContent = "" + score;
    highScore = score;
    showHighScore.textContent = "" + highScore;
};
var showText = function (index) {
    showTextField.textContent = "Word to type now: " + textToType[index];
};
var checkIfMatch = function () {
    if (youCanType) {
        if (inputField.value == textToType[index]) {
            index += 1;
            score += 1;
            showText(index);
            inputField.value = "";
            something.textContent = "";
            updateScore(score);
        }
        else if (inputField.value != textToType[index]) {
            score -= 1;
            inputField.value = "";
            something.textContent = "Please type again!";
            updateScore(score);
        }
    }
    else {
        inputField.value = "You cant type anymore";
    }
};
var startCountdown = function (timeleft) {
    var downloadTimer = setInterval(function () {
        countdownField.textContent = "" + timeleft;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            countdownField.textContent =
                "Your time is over, you cant type anymore!";
            youCanType = false;
        }
        timeleft -= 1;
    }, 1000);
};
startGameBtn.addEventListener("click", function () {
    startCountdown(timeleft);
    showText(index);
    youCanType = true;
});
inputField.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        checkIfMatch();
    }
});
