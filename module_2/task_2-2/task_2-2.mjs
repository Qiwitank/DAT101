"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Original expression: 2 + 3 * 2 - 4 * 6");
const calculation = 2 + 3 * (2 - 4) * 6;
printOut("Svar " + calculation);
printOut(newLine);

print("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Konverter 25 m og 34 cm til inches");
const antallMeter = 25;
const antallCM = 34;
let meterInMillimeter = antallMeter * 1000;
printOut("Meter i mm " + meterInMillimeter);
let CMInMillimeter = antallCM * 10;
printOut("CM i mm " + CMInMillimeter);
let antallMM = meterInMillimeter + CMInMillimeter;
printOut("Total antall MM " + antallMM);
let MMtoinches = antallMM / 25.4;
printOut("Antall Inches " + MMtoinches.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Konverter 3 dager, 12 t, 4 min og 45 sek til min");
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part2_Answer = (3 * hoursInDay * minutesInHour) + (12 * minutesInHour);

printOut("part2_Answer = " + part2_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Konverter 6,322.52 minutter til dager, timer, minutter og sekunder");
const numberOfMinutes = 6322.52;
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days;
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours;
part4_Calc = part4_Calc * minutesInHour;
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut ("Seconds = " + part4_Seconds);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Konverter 54 dollar til norske kroner, og print prisen til begge.");
const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = amountUSD * NOK;
printOut( amountUSD + " dollar er " + amountNOK.toFixed(2) + "kroner");
amountUSD = amountNOK * USD;
printOut( amountNOK.toFixed(2) + " kroner er " + amountUSD + " dollar");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("There is much between heaven and earth that we do not understand");
printOut(newLine);
const p6 = "There is much between heaven and earth that we do not understand";
printOut("There are " + p6.length.toString() + " characters in the sentence");
printOut("It is the character " + p6.charAt(19).toString() + " in position 19");
printOut("Answer = " + p6.substr(35,8).toString());
printOut("Answer = " + p6.indexOf("earth").toString());


printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const p7A = 5 > 3
printOut("5 > 3 = " + p7A.toString())

const p7B = 7 >= 7
printOut("7 >= 7 = " + p7B.toString())

const p7C = "a" > "b"
printOut("'a' > 'b' = " + p7C.toString())

const p7D = "1" > "a"
printOut("'1' > 'a' = " + p7D.toString())

const p7E = "2500" < "abcd"
printOut("'2500' < 'abcd' = " + p7E.toString())

const p7F = ("arne" != "thomas")
printOut("'arne' is not equal to 'thomas', " + p7F.toString())

const p7G = (2 === 5)
printOut("(2 === 5) === true is " + p7G.toString())

const p7H = ("abcd" < "bcd")
printOut("(abcd < bcd) === false is " + p7H.toString())

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("convert and print expressions");

let num1 = "254";
parseInt(num1);
printOut("'254' = " + num1);

let num2 = "57.23";
parseInt(num2);
printOut("'57.23' = " + num2);

let num3 = "25 kroner";
let num33 = parseInt(num3).toString();
printOut("25 kroner = " + num33);



printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Create a variable r and randomly generate a number from 1 to 360 (1 >= r <= 360)");
printOut(newLine);

let r = Math.ceil(Math.random()* 360);
printOut(r.toString());

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Use modulus (%) to calculate how many weeks and days are in 131 days.");

const days = 131;
const daysInWeek = 7

let a = (days % daysInWeek);
printOut(a.toString() + " days");

let b = (days - a);
let c = (b / daysInWeek);
printOut(c.toString() + " weeks");


printOut(newLine);