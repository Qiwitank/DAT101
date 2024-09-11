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
const antallDager = 3;
const antallTimer = 12;
const antallMin = 4;
const antallSek = 45;
let antallDager1 = antallMin * 60;
printOut("Dagertilmin" + antalldager1);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);