"use strict";
console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "New Number yoyo";
let theSecretNumber = document.querySelector(".number");
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let again = document.querySelector(".again");
let body = document.querySelector("body");
let som = Math.trunc(Math.random() * 100);
console.log(som)
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);
let totalScore = 20;

// RESETING THE GAME
again.addEventListener("click", () => {
  totalScore = 20;
//   highscore = 0;
  message.textContent = "Start guessing";
  highscore.textContent = 0;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber)
  score.textContent = totalScore;
  body.style.backgroundColor = "#222";
  theSecretNumber.style.width = "15rem";
  Number(document.querySelector(".guess").value = '');
  theSecretNumber.textContent = "?";
});

check.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
      // secreteNumber = Math.trunc(Math.random() * 20) + 1;
     // console.log(secreteNumber)
  if (!guess) {
    message.textContent = "Add any number ";
  } else if (guess > secreteNumber) {
    if (totalScore > 1) {
      message.textContent = "High number";
      totalScore--;
      score.textContent = totalScore;
    } else {
      message.textContent = "You've lost the game";
    }
  } else if (guess < secreteNumber) {
    if (totalScore > 1) {
      message.textContent = "Low number";
      totalScore--;
      score.textContent = totalScore;
    } else {
      message.textContent = "You've lost the game";
    }
  } else if (guess === secreteNumber) {
    message.textContent = "Correct number";
    theSecretNumber.textContent = secreteNumber;
    highscore.textContent = totalScore;
    body.style.backgroundColor = "#60b347";
    theSecretNumber.style.width = "30rem";
  }
});

let start = 0;
let end = 12;
// let stop = 3;

for(let i = start; i <= start; i++){
  console.log(`\n ${i} times table \n`);

for(let j = start; j <= end; j++){
  console.log(`${i} x ${j} = ${i * j}`);
}
}