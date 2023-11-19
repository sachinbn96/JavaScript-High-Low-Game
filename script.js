"use strict";
// console.log("value test:", document.querySelector(".btn").textContent);

// Generating random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Store score
let score = document.querySelector(".score").textContent;
console.log("Score " + score + " typeof score " + typeof score);

let highScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Handling the click of Check button
document.querySelector(".check").addEventListener("click", () => {
  if (Number(document.querySelector(".score").textContent) > 0) {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    const messageElement = document.querySelector(".message").textContent;
    console.log(messageElement);

    // This is an input elemnt hence using value and not textContent
    // Since empty string is a falsey value we can use like below for validation
    if (!document.querySelector(".guess").value) {
      // I didn't use the guess variable here coz Number("")=0 which is not an empty input, its a valid input

      // You can't do like below coz you need to grab the current value in that input field
      // each time using document.querySelector

      // messageElement = "Please enter a number";

      // Instead do like below: you need to retrieve that element from DOM each time

      displayMessage("Please enter a number");
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "Guess Lower" : "Guess Higher");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".score").textContent = 0;
        displayMessage("You lose");
      }
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("Bingo Bango!!!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
  }
});

// Handling the click of again button
document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "20";
  score = document.querySelector(".score").textContent;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
