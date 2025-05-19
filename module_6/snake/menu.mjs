"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData } from "./game.mjs";
/* Use this file to create the menu for the snake game. */

export class TMenu {
  #spcvs;
  score;
  #spGameOver;
  #spHome;
  #spRetry;
  #spPlay;
  #spResume;

  #playFrame = 0;
  #resumeFrame = 0;
  #animationCounter = 0;

  constructor(aSpriteCanvas) {
    this.#spcvs = aSpriteCanvas;
    this.score = 0;

    this.#spGameOver = new libSprite.TSprite(aSpriteCanvas, SheetData.GameOver, new lib2D.TPoint(150, 130));
    this.#spGameOver.scale = 0.7;

    this.#spHome = new libSprite.TSprite(aSpriteCanvas, SheetData.Home, new lib2D.TPoint(195, 375));
    this.#spHome.scale = 0.7;

    this.#spRetry = new libSprite.TSprite(aSpriteCanvas, SheetData.Retry, new lib2D.TPoint(580, 375));
    this.#spRetry.scale = 0.7;

    this.#spPlay = new libSprite.TSprite(aSpriteCanvas, SheetData.Play, new lib2D.TPoint(385, 250));
    this.#spPlay.scale = 0.7;

    this.#spResume = new libSprite.TSprite(aSpriteCanvas, SheetData.Resume, new lib2D.TPoint(385, 250));
    this.#spResume.scale = 0.7;
  }
/* Made with AI.
This makes the play and resume buttons animated with a timer*/
  animateButtons() {
    this.#animationCounter++;

    if (this.#animationCounter % 8 === 0) { // change speed here
      this.#playFrame = (this.#playFrame + 1) % SheetData.Play.count;
      this.#resumeFrame = (this.#resumeFrame + 1) % SheetData.Resume.count;
    }

    this.#spPlay.index = this.#playFrame;
    this.#spResume.index = this.#resumeFrame;
  }

  updateScore(value) {
    this.score = value;
  }

drawScore(x = 350, y = 470, scale = 0.4, rightAlign = false, alpha = 1.0) {
    const scoreString = this.score.toString();
    const digitWidth = SheetData.Number.width * scale;
    let startX = x;
    if (rightAlign) {
      startX = x - digitWidth * scoreString.length;
    }
    for (let i = 0; i < scoreString.length; i++) {
      const digit = parseInt(scoreString[i]);
      const digitSprite = new libSprite.TSprite(this.#spcvs, 
        { ...SheetData.Number, x: SheetData.Number.x + digit * SheetData.Number.width }, new lib2D.TPoint(startX + i * digitWidth, y));
      digitSprite.scale = scale;
      digitSprite.alpha = alpha;
      digitSprite.draw();
    }
  }

  drawGameOver() {
    this.#spGameOver.draw();
    this.#spHome.draw();
    this.#spRetry.draw();
    this.drawScore(690, 290, 0.6, true);
  }

draw() {
  this.animateButtons();
  if (GameProps.gameStatus === 0) {
    this.#spPlay.draw();
  } else if (GameProps.gameStatus === 1) {
    this.drawScore(10, 10, 0.6, false, 0.5); // Playing
  } else if (GameProps.gameStatus === 2) {
    this.#spResume.draw();
    this.drawScore(10, 10, 0.6, false, 0.5); // Pause
  } else {
    this.drawGameOver(); // GameOver
  }
}

/*AI helped making the click-functions */
  isRetryClicked(mouseX, mouseY) {
    const pos = this.#spRetry.pos;
    const w = SheetData.Retry.width * this.#spRetry.scale;
    const h = SheetData.Retry.height * this.#spRetry.scale;
    return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
  }
  isHomeClicked(mouseX, mouseY) {
    const pos = this.#spHome.pos;
    const w = SheetData.Home.width * this.#spHome.scale;
    const h = SheetData.Home.height * this.#spHome.scale;
    return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
  }
  isPlayClicked(mouseX, mouseY) {
    const pos = this.#spPlay.pos;
    const w = SheetData.Play.width * this.#spPlay.scale;
    const h = SheetData.Play.height * this.#spPlay.scale;
    return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
  }
  isResumeClicked(mouseX, mouseY) {
    const pos = this.#spResume.pos;
    const w = SheetData.Resume.width * this.#spResume.scale;
    const h = SheetData.Resume.height * this.#spResume.scale;
    return mouseX >= pos.x && mouseX <= pos.x + w && mouseY >= pos.y && mouseY <= pos.y + h;
  }
}
function loadGame() {
  GameProps.menu = new TMenu(spcvs);
}
