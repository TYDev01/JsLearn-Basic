console.log(typeof true);
console.log(typeof "true");
// const consol = console.log()

const now = 2023;
const me = 1998;
const you = 2000;
const $averageAge = (me - you) / 2;
// console.log(now - 1998 > now - 1995);

// console.log($averageAge);

console.log("4" - "2");
let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, "", undefined, null, NaN
// let getNumber = Number(prompt("Enter a number"));
// console.log(typeof getNumber);
// if (getNumber >= 5 ){
//     console.log(`${getNumber} is a good number`)
// }else{
//     console.log(`${getNumber} is your personal Choice right?`)
// }

// const canSwim = true;
// const canCook = true;

// if (canSwim && !canCook) {
//   console.log("Passed");
// } else {
//   console.log("Learn how to Swim or Cook");
// }

// let doge = 1;
// function simInt() {
//   let ab = prompt("Principal value");
//   let bc = prompt("Rate value");
//   let cd = prompt("Time value");
//   let total = ab * bc * cd;
//   return total;
// }

// console.log(simInt())

// const numReverse = function(num){
//   const terms = Number(prompt("Enter the number of terms: "));
//   return terms.reverse();
//   // return reversed;
// }

// const reversing = numReverse();
// console.log(reversing)

// function reverseNumberUsingPrompt(number) {
//   // const mea = `Enter a number to reverse: `;
//   const response = prompt();
//   return response.reverse();
// }

// console.log(reverseNumberUsingPrompt());

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArr.reverse());

// enter your name in a prompt save it in an array
// like a post and it stores the number of likes
// like a post it will show your name and the number of likes

// let newName = prompt("Enter your name");
let like = document.querySelector("#liked");
let savedName = [];
savedName.push(prompt("Enter your name"));
console.log(savedName)

like.addEventListener("click", () => {
  console.log(`${savedName} liked this post`);
})
