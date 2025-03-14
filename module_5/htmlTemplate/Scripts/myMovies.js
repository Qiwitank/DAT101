"use strict";
import TBootstrapComponent from "./bootstrapComponent.js";
import movieList from "./movieList.js";
// eksamen, js - klasser, løkker osv

export class TMovie{
    constructor() {
        this.title = "";
        this.director = "";
        this.genre = [];
        this.year = "1900";
        this.rating = 0; //1 til 10
    }
}

export class TMyMovies extends TBootstrapComponent {
    #movies;
    #htmlTable;
    constructor(){
        super();
        //Hvis vi ikke har noen filmer, så lager vi en tom liste
        this.#movies = movieList || [];
        this.htmlTable = null;
        this.attachShadow({mode: "open"});
    }

    #loadMovies(){
        //Oppdater antall filmer i totalMovies 
        const totalMovies = this.shadowRoot.getElementById("totalMovies");
        totalMovies.textContent = this.#movies.length.toString();
        //Lage dynamiske rader for hver film
        for(let i = 0; i < this.#movies.length; i++){
            const movie = this.#movies[i];
            const row = document.createElement("tr");
            //Legger til title 
            let td = document.createElement("td");
            td.textContent = movie.title;
            row.appendChild(td);

            //legger til director
            td = document.createElement("td");
            td.textContent = movie.director;
            row.appendChild(td);

            //legger til year
            td = document.createElement("td");
            td.textContent = movie.year;
            row.appendChild(td);

            //legger til genre
            td = document.createElement("td");
            td.textContent = movie.genre.join(", ");
            row.appendChild(td);

            //legger til rating
            td = document.createElement("td");
            td.textContent = movie.rating.toString();
            row.appendChild(td);

            //Legg til raden i tabellem
            this.#htmlTable.appendChild(row);
        }
    }

    render(){
        const template = document.getElementById("my-movies-page-template");
        const content = template.content.cloneNode(true);
        this.shadowRoot.appendChild(content);
        this.#htmlTable = this.shadowRoot.getElementById("table-body");
        this.#loadMovies();
    }
}

customElements.define("movies-page", TMyMovies);