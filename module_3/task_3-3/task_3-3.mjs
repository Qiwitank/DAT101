"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function dateFinder(){
    const date = new Date();
printOut(date.toLocaleDateString('no-NB', {
    dateStyle: 'full'}));
    return date  
    }dateFinder();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const theDateToday = dateFinder();

function theAmountOfDays(finalDay, endTxt){
    const dateTill = new Date(finalDay);
    const remaindingDays = dateTill - theDateToday;

    if(remaindingDays < 0) {
        printOut("The date has alredy passed");
        return;
    }

    const days = Math.floor(remaindingDays / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaindingDays % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60))
    const minutes = Math.floor((remaindingDays % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaindingDays % (1000 * 60)) / 1000);

    printOut(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + endTxt);
}
theAmountOfDays("2025-05-14", "until the release of PS5");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut("For a circle with radius: " + radius);
    printOut("Diameter: " + diameter);
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
}
calculateCircleProperties(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangleProperties(dimensions) {
    const width = dimensions.width;
    const height = dimensions.height;
    const circumference = 2 * (width + height);
    const area = width * height
    printOut("circumference (Perimeter): ", circumference);
    printOut("area: ", area);
}
rectangleProperties({ width: 10, height: 5 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const ETemperatureType = { Celsius: 1, Fahrenheit: 2, Kelvin: 3};

function convertTemperature(aTemperature, aType) {
    let Fahrenheit = 0;
    let Celsius = 0;
    let Kelvin = 0;
    switch (aType) {
        case ETemperatureType.Celsius:
            printOut("Convert from Celsius");
            //convert to Fahrenheit
            //Fahrenheit = (Kelvin - 237.15)*9/5 + 32;
            Celsius = aTemperature;
            Fahrenheit = (Celsius * 9) / 5 + 32;
            Kelvin = Celsius + 237.15;
            break;
        case ETemperatureType.Fahreinheit:
            printOut("Convert from Fahreinheit");
            break;
        case ETemperatureType.Kelvin:
            printOut("Convert from Kelvin");
            break;
    } // End switch

    printOut("Celsius = " + Celsius.toFixed(0));
    printOut("Fahrenheit = " + Fahrenheit.toFixed(0))
    printOut("Kelvin = " + Kelvin.toFixed(0));
} // End function

convertTemperature(37.5, ETemperatureType.Celsius);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("");

function calculateNetPrice(aPrice, aTaxGroup) {
  let net = NaN;
  let taxGroup = aTaxGroup.toUpperCase();
  let vat = NaN;

  printOut("taxGroup = " + taxGroup);

  switch (taxGroup) {
    case "NORMAL":
      vat = 25;
  }

  if (!Number.isNaN(vat)) {
    net = (100 * aPrice) / (vat + 100);
  }

  return net;
}

const netPrice1 = calculateNetPrice(100, "normal");
if (Number.isNaN(netPrice1)) {
  printOut("Unknown VAT group!");
} else {
  printOut("netPrice1 = " + netPrice1.toFixed(2));
}

const netPrice2 = calculateNetPrice(100, "goblins");
if (Number.isNaN(netPrice1)) {
  printOut("Unknown VAT group!");
} else {
  printOut("netPrice2 = " + netPrice2.toFixed(2));
}

printOut("");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedDistanceTime(distance, time, speed) {
    const missingCount = [distance, time, speed].filter(val => val === undefined).length;
    if (missingCount !== 1) {
        return NaN; 
    }
    if (speed === undefined) {
        const calculatedSpeed = distance / time;  
        printOut("Calculated Speed: " + calculatedSpeed);
        return calculatedSpeed;
    } else if (time === undefined) {
        const calculatedTime = distance / speed;  
        printOut("Calculated Time: " + calculatedTime);
        return calculatedTime;
    } else if (distance === undefined) {
        const calculatedDistance = speed * time;  
        printOut("Calculated Distance: " + calculatedDistance);
        return calculatedDistance;
    }
}
calculateSpeedDistanceTime(100, 2, undefined);
calculateSpeedDistanceTime(100, undefined, 50); 
calculateSpeedDistanceTime(undefined, 2, 50); 
calculateSpeedDistanceTime(100, undefined, undefined); 

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testIfMathIsFun() {
    let op = 1;
    let line = 1;
    // Left side
    let ok = false;
    do {
      let sumLeft = 0;
      for (let left = 0; left < line + 1; left++) {
        sumLeft += op;
        op++;
      }
  
      let sumRight = 0;
      for (let right = 0; right < line; right++) {
        sumRight += op;
        op++;
      }
  
      if (sumLeft !== sumRight) {
        ok = false;
        printOut("Error in line " + line.toString());
      }else{
        ok = true;
      }
      line++;
  
      if(line > 200){
        printOut("Math is Fun!");
        break;
      }
      
    } while (ok);
  }
  
  testIfMathIsFun();
  
  
  printOut(" ");
  /*
    Use recursion to count from 1 to 10 and then back to 1 again. 
  */
  const countTo = 10;
  function count(aNumber) {
    if (aNumber <= countTo) {
      printOut(aNumber.toString());
      count(aNumber + 1);
      printOut(aNumber.toString());
    }
  }
  
  count(1);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
