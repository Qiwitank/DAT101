"use strict";
//Lag en klasse med navn TScoreBoard
//Klassen har tre private sprites; 
// - Øvre venstre hjørnet (antall miner). TSpriteNumber 
// - Øvre høyre hjørnet (tid). TSpriteNumber
// - Øvre midten (smiley). TSpriteButton
//Konstruktørens parameter er: aSpriteCanvas, aSpriteInfo, aPosition
//Klassen trenger en draw metode som tegner alle sprites
import libSprite from "../../common/libs/lib2d_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { SpriteInfoList, gameLevel } from "./Minesweeper.mjs";

export class TScoreBoard{
    #spMines
    #spTime;
    #spSmiley;
    constructor(aSpriteCanvas){
        const pos = new lib2d.TPoint(100, 20);
        this.#spMines = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, pos);
        this.#spMines.justify = libSprite.ESpriteNumberJustify.Right; 
        this.#spMines.digits = 3;
        this.#spMines.value = gameLever.Mines;

        pos.x = aSpriteCanvas.canvas.width - 20;
        this.#spTime = new libSprite.TSpriteNumber(aSpriteCanvas, SpriteInfoList.Numbers, pos);
        this.#spTime.digits = 3;
    }

    draw(){
        this.#spMines.draw();
    }
}