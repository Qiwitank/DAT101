"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.mjs";
import { TSnake, EDirection } from "./snake.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  menu: null,
  ticksSinceLastBait: 0,
};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  console.log("New game started!");
  GameProps.gameStatus = EGameStatus.Playing;

  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5));
  GameProps.bait = new TBait(spcvs);
  GameProps.menu = new TMenu(spcvs);
  GameProps.menu.updateScore(0);
  GameProps.ticksSinceLastBait = 0;
  gameSpeed = 4;

  // Start game loop på nytt:
  if (hndUpdateGame) clearInterval(hndUpdateGame);
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
}

export function baitIsEaten() {
  console.log("Bait eaten!");
  GameProps.bait.update();
  GameProps.snake.grow();

  let points = 30 - GameProps.ticksSinceLastBait;
  if (points < 1) points = 1;
  GameProps.menu.score += points;

  GameProps.ticksSinceLastBait = 0;

  increaseGameSpeed(); // increase game speed
}

//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle

  /* Create the game menu here */

  newGame(); // Call this function from the menu to start a new game, remove this line when the menu is ready

  console.log("Game canvas is rendering!");
  console.log("Game canvas is updating!");
  requestAnimationFrame(drawGame);
}

function drawGame() {
  spcvs.clearCanvas();

//Here we can draw the snake and the bait on the board. Also that the snake is showing behind the score. 
  switch (GameProps.gameStatus) {
    case EGameStatus.Idle:
      GameProps.menu.draw();
      break;

    case EGameStatus.Playing:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.draw();
      break;

    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.draw();
      break;

    case EGameStatus.GameOver:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.draw();
      break;
  }

  // Request the next frame
  requestAnimationFrame(drawGame);
}

function updateGame() {
  // Update game logic here
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      GameProps.ticksSinceLastBait++;
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
      }
      break;
    case EGameStatus.Pause:
      break;
    case EGameStatus.GameOver:
      clearInterval(hndUpdateGame);
      break;
    case EGameStatus.Idle:
      break;
  }
}

function increaseGameSpeed() {
  // /* Increase game speed logic here
  console.log("Increase game speed!");
  if (gameSpeed < 10) {
    gameSpeed++;
    clearInterval(hndUpdateGame);
    hndUpdateGame = setInterval(updateGame, 1500 / gameSpeed);
  }
}

//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      /* Pause game logic here */
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        console.log("Game paused!");
      } else if (GameProps.gameStatus === EGameStatus.Pause) {
        GameProps.gameStatus = EGameStatus.Playing;
        console.log("Game resumed!");
      }

      break;
  }
}

// AI helped making a click-funksjon on the menu.
document.addEventListener("click", onMouseClick);

function onMouseClick(event) {
  const rect = cvs.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top; 

  if (GameProps.gameStatus === EGameStatus.GameOver) {
    if (GameProps.menu.isHomeClicked(x, y)) {
      GameProps.gameStatus = EGameStatus.Idle;
    } else if (GameProps.menu.isRetryClicked(x, y)) {
      newGame();
    }
  } else if (GameProps.gameStatus === EGameStatus.Idle) {
    if (GameProps.menu.isPlayClicked(x, y)) {
      newGame();
    }
  } else if (GameProps.gameStatus === EGameStatus.Pause) {
    if (GameProps.menu.isResumeClicked(x, y)) {
      GameProps.gameStatus = EGameStatus.Playing;
    }
  }
}
/*We made this function because when we changed the buttons in TSpriteButton, there were bugs*/
document.addEventListener("mousemove", onMouseMove);
function onMouseMove(event) {
  const rect = cvs.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (GameProps.gameStatus === EGameStatus.GameOver) {
    if (GameProps.menu.isHomeClicked(x, y) || GameProps.menu.isRetryClicked(x, y)) {
      cvs.style.cursor = "pointer";
    } else {
      cvs.style.cursor = "default";
    }
  } else if (GameProps.gameStatus === EGameStatus.Idle) {
    if (GameProps.menu.isPlayClicked(x, y)) {
      cvs.style.cursor = "pointer";
    } else {
      cvs.style.cursor = "default";
    }
  } else if (GameProps.gameStatus === EGameStatus.Pause) {
    if (GameProps.menu.isResumeClicked(x, y)) {
      cvs.style.cursor = "pointer";
    } else {
      cvs.style.cursor = "default";
    }
  } else {
    cvs.style.cursor = "default";
  }
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteSheet("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
