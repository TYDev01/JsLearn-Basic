"use strict";

let date = new Date();

function calcAge(birthYear) {
  const age = date.getFullYear() - birthYear;

function printAge(){
  const output = `You are ${age}, born in ${birthYear}`;
  console.log(output);

  if(birthYear >= 1981 && birthYear <= 1996){
    let millenial = true;
    const statement = `Ohhh and you're a millenial ${person}`
    console.log(statement)
  }else{
    console.log("Ewoooo small")
  }
  console.log(millenial)
}
printAge();

  return age;
}


const person = "Jomi";
calcAge(1996);
