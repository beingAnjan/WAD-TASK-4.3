let userInputEl = document.getElementById("userInput");
let submitBtn = document.getElementById("submitBtn");
let msgEl = document.getElementById("msg");

let correctAnswer = "HTML";

submitBtn.addEventListener("click", function () {
    if (userInputEl.value.toLowerCase() === correctAnswer.toLowerCase()) {
        msgEl.textContent = "Correct!";
    } else {
        msgEl.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }
});
