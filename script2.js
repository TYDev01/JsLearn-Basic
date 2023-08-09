"use strict";

let date = new Date();
function logger(userName, password) {
  console.log(userName, password);
  const logged = `User: ${userName}, Password: ${password}`;
  return logged;
}

logger("tony", 8888); // Calling the function like this will only log the inputed values to the console, but will not return anything. If you want to display the returned value you have to add it to a variable or console.log the function call. Example below.
console.log(logger("tony", 8888));
//or like this
let returnedLogger = logger("tony", 8888);
console.log(returnedLogger);


function ageCalc(birthYear){
    const age = date.getFullYear() - birthYear;
    return age;
}

console.log(ageCalc(1995));

// const ageCalc2 = ()=>{}
const ageCalc3 = birthYear => date.getFullYear() - birthYear;
console.log(ageCalc3(1998))

// Calling a function inside a function
const multiply = (fruit) => {
    return fruit * 2;
}

const addItems = (item1, item2) => {
    const item1Increase = multiply(item1);
    const item2Increase = multiply(item2);
    const outPut = `The total of ${item1} and ${item2} is ${item1Increase} and  ${item2Increase}`;
    return outPut;
}

console.log(addItems(32, 43));

const usersInfo = ['Tony', 'Grace', "Mustapha", "Tobi", "Tunde", "Tayo", "Titi", "Tola", "Tosin", 8123732277];
console.log(usersInfo[usersInfo.length -3])

const years = [1990, 1995, 1998, 2000, 2005, 2010, 2015, 2020];
console.log(ageCalc(years[2]))

//BUILD A FUNCTION THAT GIVES YOU YOUR CURRENT AGE ACCORDING TO YOUR BIRTH YEAR
//A LITTLE FUNCTION THAT CALCULATES THE AGE OF A USER
/*const userAgeCalc = (yearOfBirth) => {
  let currentAge = date.getFullYear() - yearOfBirth;
  return currentAge;
};
const userAge = Number(prompt("Enter your birth year"));
console.log(`You're ${userAgeCalc(userAge)} years old`)
*/
const randomNames = ["Tony", "Grace", "Mustapha", "Tobi", "Tunde", "Tayo", "Titi", "Tola", "Tosin"];
const pushed = randomNames.push("Tobi");
const unshifted = randomNames.unshift("Tobes");
console.log(randomNames)
console.log(`${unshifted} Unshifted`)
console.log(`${pushed} Pushed`)
const poped = randomNames.pop();
console.log(`${poped} Popped`)
console.log(randomNames.includes("Tobme"))

if (years.includes(1998)) {
    console.log(ageCalc(years[4]) + " Years old")
}
let mas = 2000000

// OBJECT LEARN
const newUser = {
    name: "Tony",
    year: 1999,
    calc: function(){
      this.age = date.getFullYear() - this.year;
      return this.age;
    },
    skinColor: "Black",
    hobby: "Coding",
    girlfriend: "None",
    bestFriend: "None",
    friends: ["Grace", "Mustapha", "Tobi", "Tunde", "Tayo", "Titi", "Tola", "Tosin"],
    check: function(anything){
      console.log(anything);
    }
}

console.log(newUser.calc())

let home = "House"
newUser.check(home);
// console.log(newUser.friends[2])



// const intrestedIn = prompt("What do you want to know about Tony? Choose between name, age, skinColor, hobby, girlfriend, bestFriend");
// console.log(intrestedIn)
// if (newUser[intrestedIn] == undefined) {
//     console.log("Wrong info")
//   }else{
//     console.log(newUser[intrestedIn]);
//   }

// if (intrestedIn == "name") {
//   console.log(newUser.name);
// } else if (intrestedIn == "age") {
//   console.log(newUser.age);
// } else if (intrestedIn == "skinColor") {
//   console.log(newUser.skinColor);
// } else if (intrestedIn == "hobby") {
//   console.log(newUser.hobby);
// } else if (intrestedIn == "girlfriend") {
//   console.log(newUser.girlfriend);
// } else if (intrestedIn == "bestFriend") {
//   console.log(newUser.bestFriend);
// }else{
//     console.log("Wrong input")
// }

const userTest = {}
userTest["name"] = "Tony";
userTest["age"] = 19;
userTest["hobby"] = "Coding";

console.log(userTest.age)