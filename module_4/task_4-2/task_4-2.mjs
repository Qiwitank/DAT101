"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let text = "";
for(let index = 0; index < numbers.length; index++){
  text += numbers[index] + " ";
}

printOut(text);
printOut("");

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");


printOut(numbers.join(", "))
printOut("");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const grating = "Hei på deg, hvordan har du det?";
const words = grating.split(" ");

words.every(everyWord);
function everyWord(aWord, aIndex){
  printOut(aIndex + " " + (aIndex + 1) + " " + aWord);
  return true;
}

printOut("");

words.forEach(eachWord);
function eachWord(aWord, aIndex){
  printOut(aIndex + " " + (aIndex + 1) + " " + aWord);
}


printOut("");

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray(aArray, aItem){
  const result = aArray.indexOf(aItem);
  if(result > -1){
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(result, 1);
  }else{
    printOut("Can not remove " + " " + aItem + " from array");
  }
}

function findAndRemoveFromArray(aArray, aItem){
  let index = -1;
  const result = aArray.find(findName);
  if(result){
    printOut("Can remove " + " " + aItem + " from array");
    aArray.splice(index, 1);
  }else{
    printOut("Can not remove " + " " + aItem + " from array");
  }

  function findName(aName, aIndex){
    index = aIndex;
    return aName === aItem;
  }
}

removeFromArray(girls, "Arne");
findAndRemoveFromArray(girls, "Ingrid");
printOut(girls.join(", "));

printOut(newLine);
printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const names = girls.concat(boys);
names.forEach(printName);
function printName(aName){
  printOut(aName);
}

printOut(newLine);
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook{
  #Tile;
  #Author;
  #ISBN;
  constructor(aTile, aAuthor, aISBN){
    this.#Tile = aTile;
    this.#Author = aAuthor;
    this.#ISBN = aISBN;
  }

  toString(){
    return this.#Tile + ", " + this.#Author + ", " + this.#ISBN;
  }
}

const books = [
  new TBook("The Hobbit", "J.R.R. Tolkien", "978-0-395-07122-1"),
  new TBook("The Shining", "Stephen King", "978-0-385-12167-5"),
  new TBook("The Da Vinci Code", "Dan Brown", "978-0-385-50420-5")
];

books.forEach(printBook);
function printBook(aBook){
  printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag"},
  WeekDay7: { value: 0x40, name: "Søndag", type: "Helligdag" },
  Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
  Weekends: { value: 0x20 + 0x40, name: "Helg" },
};

const keys = Object.keys(EWeekDays); 
printOut("Keys: " + keys.join(", ")); 
const values = Object.values(EWeekDays); 
printOut("Values: " + values.join(", ")); 
let valueKeys = Object.values(EWeekDays[keys[7]]); 
printOut("ValueKeys: " + valueKeys.join(", ")); 


for(let index = 0; index < keys.length; index++){
  let text = "";
  
  const key = keys[index];
  text = key + ": ";
  
  const keyObject = EWeekDays[key];
  const keyObjectKeys = Object.keys(keyObject); 
  for(let i = 0; i < keyObjectKeys.length; i++){
    const keyObjectKey = keyObjectKeys[i]; 
    const keyObjectValue = keyObject[keyObjectKey]; 
    text += " " + keyObjectKey + ": " + keyObjectValue;
  }
  printOut(text);
}
printOut(newLine);



printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

const randomValues = [];
for(let i = 0; i < 35; i++){
  const randomValue = Math.ceil(Math.random() * 20); 
  randomValues.push(randomValue);
}
printOut("Random values: " + randomValues.join(", "));

randomValues.sort(sortRandomValues);
printOut("Tabellen i stigende rekkefølge: " + randomValues.join(", "));
randomValues.reverse(); 
printOut("Tabellen i synkende rekkefølge: " + randomValues.join(", "));

function sortRandomValues(aValue1, aValue2){
  return aValue1 - aValue2;
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");

const freq = {};
for(let i = 0; i < randomValues.length; i++){
  const value = randomValues[i];
  
  if(freq[value]){
    freq[value]++;
  }else{
    freq[value] = 1;
  }
}

let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);

function sortFreq(aValue1, aValue2){

  const freq1 = freq[aValue1];
  const freq2 = freq[aValue2];
  return freq2 - freq1;
}

text = ""; 
for(let i = 0; i < freqKeys.length; i++){
  const freqKey = freqKeys[i]; 
  const freqValue = freq[freqKey];
  text += freqKey + ": " + freqValue + ", ";
}
printOut(text);



printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");

const myTable = [];
for(let row = 0; row < 5; row++){
  
  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell = + row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}

text = "";
for(let row = 0; row < myTable.length; row++){
  
  const columns = myTable[row];
 
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column]; 
    text += "[" + cell + "]"; 
  }
  printOut(text);
  text = ""; 
}
printOut(newLine);


