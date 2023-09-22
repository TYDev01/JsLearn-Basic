// console.log(typeof true);
// console.log(typeof "true");
// // const consol = console.log()

// const now = 2023;
// const me = 1998;
// const you = 2000;
// const $averageAge = (me - you) / 2;
// // console.log(now - 1998 > now - 1995);

// // console.log($averageAge);

// console.log("4" - "2");
// let n = "1" + 1;
// n = n - 1;
// console.log(n);

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
// let like = document.querySelector("#liked");
// let savedName = [];
// savedName.push(prompt("Enter your name"));
// console.log(savedName)

// like.addEventListener("click", () => {
//   console.log(`${savedName} liked this post`);
// })

// let yourOtp = document.getElementById("yourOtp");
// let btnHolder = document.getElementById("btnHolder");
// console.log(yourOtp);
// console.log(btnHolder);

// btnHolder.addEventListener("click", (e) => {
//   // console.log(otp(5));
//   yourOtp.innerText = `Your OTP is ${otp(5)}`;
// });

function showName() {
  let personName = `Somto Ifeanyi Tishok`;
  return personName;
}

console.log(showName());
const Auth = () => {
  let aum = "nose";
};

let date = new Date();

// GENERATE RANDOM NUMBER AS OTP

function newOtp(a) {
  let generatedString = "";
  let randFigure =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < a; i++) {
    let random = Math.trunc(Math.random() * randFigure.length - 1);
    generatedString += randFigure[random];
  }
  return generatedString;
}

console.log(newOtp(6));

const otp = (anyValue) => {
  let otpCodeHolder = "";
  let toUseRandomFigure =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  for (let i = 0; i < anyValue; i++) {
    let theRandNum = Math.trunc(Math.random() * toUseRandomFigure.length - 1);
    otpCodeHolder += toUseRandomFigure[theRandNum];
  }
  return otpCodeHolder;
};
console.log(otp(9));

const fruits = function(y){
  const aFruit = y + 1;
  return aFruit;
}
const agem = fruits(1)

// const fruity = (e) => {
//   let ft = e * fruits(1);
//   return ft;
// };
// console.log(fruity(3));

function fruit2(a, b, c) {
  let appleFruit = agem();
  let mangoFruit = fruity(b);
  let kiwiFruit = fruity(c);
  return `${appleFruit}, ${mangoFruit}, ${kiwiFruit}`;
}

// console.log(fruit2(3, 5, 3));

function mycheck(ea) {
  let fru = ea * 2;
  return fru;
}

let minato =
console.log(typeof(mycheck()))

const admio = mycheck(5)
console.log(admio)

function calcAge(birthYear, firstName){
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old`)
  return age;
}

const age = calcAge(1991)

let somt = 1;
console.log(typeof(somt))