"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 7;
const ableBusTime = 7;
const ableTrainTime = 8;

if (wakeUpTime === ableBusTime) {
  printOut("i can catch the bus to school. ");
} else {
  printOut("if i wake up at 7 o'clock i can take the bus, if not i have to take the train ");
  
} if (wakeUpTime === ableTrainTime) {
  printOut("if i wake up at 8 o'clock i can take the train, otherwise i have to take the car");
}



printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const number = -1;
printOut("value = " + number.toString());
if (number > 0) {
  printOut("positive");
  } else if (number < 0) {
    printOut("negative");
  } else {
    printOut("Zero");
  }

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageSize = Math.floor(Math.random()*8+ 1);
printOut("photo size = " + imageSize.toString());
if (imageSize >= 4) {
  printOut("Thank you");
  } else {
  printOut("The image is too small");
  }



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imageSize1 = Math.floor(Math.random()*8+1);
printOut("Photo size = " + imageSize1.toString());
if (imageSize1 >= 6) {
  printOut("Your image is too large");
} else if (imageSize1 <= imageSize){
  printOut("Your image is too small");
} else {
  printOut("Thank you");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random()*noOfMonth)];
printOut(monthName.toString());
if (monthName.toLowerCase().includes("r")){
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = monthList.indexOf(monthName);
const days = daysInMonth[monthIndex];
printOut("The number of days in " + monthName + " is " + days);


/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let galleryOpeningHours;
if (monthIndex === "March" || monthName === "May"){
  printOut(galleryOpeningHours = "stengt pga oppussing.");
} else if (monthName === "April"){
  printOut(galleryOpeningHours = "midlertidig åpent i nabobygget.");
} else {
  printOut(galleryOpeningHours = "åpent.");
}
printOut(newLine);
