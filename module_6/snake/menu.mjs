"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData } from "./game.mjs"
/* Use this file to create the menu for the snake game. */

export class TMenu {
    #spcvs;
    score; // Gjør score offentlig
  
    constructor(aSpriteCanvas) {
      this.#spcvs = aSpriteCanvas;
      this.score = 0; // Startverdi for score
    }
  
    // Oppdater scoren
    updateScore(value) {
      this.score = value;
    }
  
    // Tegn scoren i venstre hjørne
  drawScore() {
    const scoreString = this.score.toString();
    const digitWidth = SheetData.Number.width;
    const digitHeight = SheetData.Number.height;
    const startX = 10;
    const startY = 10;
    const scale = 0.8; // Endre denne verdien for ønsket størrelse
  
    for (let i = 0; i < scoreString.length; i++) {
      const digit = parseInt(scoreString[i]);
      const digitSprite = new libSprite.TSprite(
        this.#spcvs,
        { ...SheetData.Number, x: SheetData.Number.x + digit * digitWidth },
        new lib2D.TPoint(startX + i * digitWidth * scale, startY)
      );
      digitSprite.scale = scale; // Sett ønsket skala
      digitSprite.draw();
    }
  }
  
    // Tegn menyen (inkludert scoren)
    draw() {
      this.drawScore();
    }
  }
