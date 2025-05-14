"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData } from "./game.mjs";
/* Use this file to create the menu for the snake game. */

export class TMenu {
    #spcvs;
    score;
    #spGameOver;
    #spHome; // Declare #spHome
    #spRetry; // Declare #spRetry
  
    constructor(aSpriteCanvas) {
      this.#spcvs = aSpriteCanvas;
      this.score = 0;    
      // Initialize sprites
      this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, new lib2D.TPoint(150, 130));
      this.#spGameOver.scale = 0.7;
      this.#spHome = new libSprite.TSprite(aSpriteCanvas, SheetData.Home, new lib2D.TPoint(195, 375));
      this.#spHome.scale = 0.7;
      this.#spRetry = new libSprite.TSprite(aSpriteCanvas, SheetData.Retry, new lib2D.TPoint(580, 375));
      this.#spRetry.scale = 0.7;
    }
  
    updateScore(value) {
      this.score = value;
    }
  
    drawScore(x = 350, y = 470, scale = 0.4, rightAlign = false) {
      const scoreString = this.score.toString();
      const digitWidth = SheetData.Number.width * scale;
      let startX = x;
  
      if (rightAlign) {
        startX = x - digitWidth * scoreString.length;
      }
  
      for (let i = 0; i < scoreString.length; i++) {
        const digit = parseInt(scoreString[i]);
        const digitSprite = new libSprite.TSprite(
          this.#spcvs,
          { ...SheetData.Number, x: SheetData.Number.x + digit * SheetData.Number.width },
          new lib2D.TPoint(startX + i * digitWidth, y)
        );
        digitSprite.scale = scale;
        digitSprite.draw();
      }
    }
  
    // Draw Game Over window with buttons and score
    drawGameOver() {
      this.#spGameOver.draw();
      this.#spHome.draw();
      this.#spRetry.draw();
      this.drawScore(690, 290, 0.6, true); // Adjust x/y/scale to position the score correctly
    }
  
    draw() {
      if (GameProps.gameStatus === 3) {
        this.drawGameOver();
      } else {
        this.drawScore(10, 10, 0.3);
      }
    }
  
    isRetryClicked(mouseX, mouseY) {
      const pos = this.#spRetry.pos;
      const w = SheetData.Retry.width * this.#spRetry.scale;
      const h = SheetData.Retry.height * this.#spRetry.scale;
      console.log("Retry button position", pos, "width", w, "height", h);
      console.log("Mouse position", mouseX, mouseY);
      return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
    }
  
    isHomeClicked(mouseX, mouseY) {
      console.log("Home button object", this.#spHome);
      const pos = this.#spHome.pos;
      const w = SheetData.Home.width * this.#spHome.scale;
      const h = SheetData.Home.height * this.#spHome.scale;
      console.log("Home button position", pos, "width", w, "height", h);
      console.log("Mouse position", mouseX, mouseY);
      return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
    }
  }
function loadGame() {
    GameProps.menu = new TMenu(spcvs);
    console.log("Meny initialized:", GameProps.menu);
}