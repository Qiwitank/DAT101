"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let output = '';
for (let i = 1; i <= 10; i++) output += i + ' ';
output += '<br>';
for (let i = 10; i >= 1; i--) output += i + ' ';
printOut(output.toString());

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetNumber = 45
let guessedNumber;

while (true){
    guessedNumber = Math.floor(Math.random() * 60) + 1;
    if (guessedNumber === targetNumber) {
        break;
    }
}
printOut("The guessed number is: " + guessedNumber.toString());

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const targetNumber2 = Math.floor(Math.random() * 1000000) + 1;
let guessedNumber2;
let guesses = 0;
const startTime = Date.now();
while (true){
    guessedNumber2 = Math.floor(Math.random() * 1000000) + 1;
    guesses++;
    if (guessedNumber2 === targetNumber2) {
        break;
    }
}
const endTime = Date.now();
const timeTaken = endTime - startTime;
printOut("The number is: " + guessedNumber2.toString());
printOut("How many guesses it took: " + guesses.toString());
printOut("How much time it took: " + timeTaken.toString());

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function findPrimes(){
    const primes = [];
    for (let num = 2; num < 200; num++) {
        let isPrime = true;
        let i = 2;
        while (i * i <= num) {
            if (num % i === 0){
                isPrime = false;
                break;

            }
            i++;
        }
        
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;

    }


const primeNumbers = findPrimes();
printOut(primeNumbers.toString());

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++){
    let rowText = "";
    for (let column = 1; column <= 9; column++){
        rowText += "K" + column + "R" + row + " ";
    }
    printOut(rowText);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const points = Math.ceil(Math.random() * 236);
const percent = points / 236 * 100;
let grade;
if (percent < 40) {
    grade = "F";
} else if (percent < 52) {
    grade = "E";
}else if (percent < 64) {
    grade = "D";
}else if (percent < 76) {
    grade = "C";
}else if (percent < 88) {
    grade = "B";
}else {
    grade = "A";
}

printOut("Studenten fikk " + grade.toString() + " og fikk " + points.toString() + " poeng.");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let answer = "";
  let rolls = 0;
  let done = false;
  let hasYahtzee = false;   // True if we have already got Yahtzee
  let hasStraight = false;  // True if we have already got Straight
  let has3Pair = false;     // True if we have already got 3 pair
  let hasTower = false;     // True if we have already got four and two equals
  do {
    const d1 = Math.ceil(Math.random() * 6);  // Dice one
    const d2 = Math.ceil(Math.random() * 6);  // Dice two
    const d3 = Math.ceil(Math.random() * 6);  // Dice three
    const d4 = Math.ceil(Math.random() * 6);  // Dice four
    const d5 = Math.ceil(Math.random() * 6);  // Dice five
    const d6 = Math.ceil(Math.random() * 6);  // Dice six
    const txtD = (d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6); // make string of all dice's
    rolls++;  // increase rolls with one, computer has rolled all dices.
    // Check to see if all dice are equal (Yahtzee!)
    if ((d1 === d2) && (d1 === d3) && (d1 === d4) && (d1 === d5) && (d1 === d6)) {
      // All dice are equal, check if we already has got Yahtzee
      if (hasYahtzee === false) {
        hasYahtzee = true;
        answer += txtD + newLine;
        answer += "Yatzi!" + newLine;
        answer += "På " + rolls.toString() + " kast!" + newLine + newLine;
      }
    } else {
      // All dice are not equal, count each number of occurrence
      // Find match for each 1,2,3,4,5,6, if no match found use a empty string so length will work.
      
      const cD1 = (txtD.match(/1/g) || "").length; //count1
      const cD2 = (txtD.match(/2/g) || "").length;
      const cD3 = (txtD.match(/3/g) || "").length;
      const cD4 = (txtD.match(/4/g) || "").length;
      const cD5 = (txtD.match(/5/g) || "").length;
      const cD6 = (txtD.match(/6/g) || "").length;
      if ((cD1 === 1) && (cD2 === 1) && (cD3 === 1) && (cD4 === 1) && (cD5 === 1) && (cD6 === 1)) {
        // All dice are different, check if we already got Straight
        if (hasStraight === false) {
          hasStraight = true;
          answer += txtD + newLine;
          answer += "Full straight" + newLine;
          answer += "På " + rolls.toString() + " Kast!" + newLine + newLine;
        }
      } else {
        // we have neither Yahtzee or Straight
        // Count number of equal occurrence
        const txtCD = cD1 + "," + cD2 + "," + cD3 + "," + cD4 + "," + cD5 + "," + cD6;
        const ccD2 = (txtCD.match(/2/g) || "").length;
        const ccD4 = (txtCD.match(/4/g) || "").length;
        if (ccD2 === 3) {
          // Check if we already got 3 pair
          if (has3Pair === false) {
            has3Pair = true;
            answer += txtD + newLine;
            answer += "3 Par" + newLine;
            answer += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        } else if ((ccD2 === 1) && (ccD4 === 1)) {
          // Check if we already got tower
          if (hasTower === false) {
            hasTower = true;
            answer += txtD + newLine + newLine;
            answer += "Tårn" + newLine;
            answer += "På " + rolls.toString() + " kast!" + newLine  + newLine;
          }
        }
      }
    }
    done = hasYahtzee && hasStraight;
  } while (done === false);
  printOut(answer + newLine);