"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];


const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {

 const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
 
  const perimeter = (height + width + height + width);
  const area = (height * width);
  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}


//--- Part 2 ----------------------------------------------------------------------------------------------

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);
let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent) {
  const key = aEvent.key;
  switch(key) {
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}


const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = ""; 
function cmbTask3CheckAnswerClick() {
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++) {
    
   const checkBox = chkTask3[i];
   if(checkBox.checked){
    const value = checkBox.value;
    if(value === "4"){
      text += "Du har valgt nummer " + value + ". Dette kan du ikke mene!!???<br />"

    }else{
      text += "Du har valgt nummer " + value + ".<br />"
    }
   }

  }
  txtTask3Output.innerHTML = text;
  text = ""; 
}

// --- Part 4 ----------------------------------------------------------------------------------------------
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

// Create radio buttons dynamically
CarTypes.forEach(car => {
  const label = document.createElement("label");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "carType";
  radio.value = car.caption;

  radio.addEventListener("change", () => {
    txtTask4Output.innerHTML = "You selected: " + car.caption;
  });

  label.appendChild(radio);
  label.appendChild(document.createTextNode(" " + car.caption));
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
});

// --- Part 5 ----------------------------------------------------------------------------------------------
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
  const selectedAnimal = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;
  txtTask5Output.innerHTML = "You selected: " + selectedAnimal;
});

//  --- Part 6 ----------------------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

// Populate dropdown
GirlsNames.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.text = name;
  selectTask6Girls.add(option);
});

// Event on change
selectTask6Girls.addEventListener("change", () => {
  const selectedName = selectTask6Girls.value;
  txtTask6Output.innerHTML = "You selected: " + selectedName;
});

// --- Part 7 ----------------------------------------------------------------------------------------------
const selectMovieGenre = document.getElementById("selectMovieGenre");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

// Populate genre dropdown
MovieGenre.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.text = genre;
  selectMovieGenre.add(option);
});

let movieCounter = 1;

cmbAddMovie.addEventListener("click", () => {
  const title = document.getElementById("txtMovieTitle").value;
  const genre = selectMovieGenre.value;
  const director = document.getElementById("txtMovieDirector").value;
  const rate = document.getElementById("txtMovieRate").value;

  const row = tblMovies.insertRow(-1);
  row.innerHTML = `
    <td>${movieCounter}</td>
    <td>${title}</td>
    <td>${genre}</td>
    <td>${director}</td>
    <td>${rate}</td>
  `;
  movieCounter++;
});
