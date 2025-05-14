"use strict";
//------------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//------------------------------------------------------------------------------------------
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2D from "../../common/libs/lib2d_v2.mjs";
import { GameProps, SheetData, baitIsEaten } from "./game.mjs"
import { TBoardCell, EBoardCellInfoType } from "./gameBoard.mjs";
import { TMenu } from "./menu.mjs";

//------------------------------------------------------------------------------------------
//----------- variables and object ---------------------------------------------------------
//------------------------------------------------------------------------------------------
const ESpriteIndex = {UR: 0, LD: 0, RU: 1, DR: 1, DL: 2, LU: 2, RD: 3, UL: 3, RL: 4, UD: 5};
export const EDirection = { Up: 0, Right: 1, Left: 2, Down: 3 };


//-----------------------------------------------------------------------------------------
//----------- Classes ---------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
class TSnakePart extends libSprite.TSprite {
  constructor(aSpriteCanvas, aSpriteInfo, aBoardCell) {
    const pos = new lib2D.TPoint(aBoardCell.col * aSpriteInfo.width, aBoardCell.row * aSpriteInfo.height);
    super(aSpriteCanvas, aSpriteInfo, pos);
    this.boardCell = aBoardCell;
    let boardCellInfo = GameProps.gameBoard.getCell(aBoardCell.row, aBoardCell.col);
    this.direction = boardCellInfo.direction;
    boardCellInfo.infoType = EBoardCellInfoType.Snake;
    this.index = this.direction;
  }

  update(){
    this.x = this.boardCell.col * this.spi.width;
    this.y = this.boardCell.row * this.spi.height;
  }

} // class TSnakePart


class TSnakeHead extends TSnakePart {
  constructor(aSpriteCanvas, aBoardCell) {
    super(aSpriteCanvas, SheetData.Head, aBoardCell);
    this.newDirection = this.direction;
  }

 setDirection(aDirection) {
    if ((this.direction === EDirection.Right || this.direction === EDirection.Left) && (aDirection === EDirection.Up || aDirection === EDirection.Down)) {
      this.newDirection = aDirection;
    } else if ((this.direction === EDirection.Up || this.direction === EDirection.Down) && (aDirection === EDirection.Right || aDirection === EDirection.Left)) {
      this.newDirection = aDirection;
    }
  }

  update(){
    GameProps.gameBoard.getCell(this.boardCell.row,this.boardCell.col).direction = this.newDirection;
    switch (this.newDirection) {
      case EDirection.Up:
        this.boardCell.row--;
        break;
      case EDirection.Right:
        this.boardCell.col++;
        break;
      case EDirection.Left:
        this.boardCell.col--;
        break;
      case EDirection.Down:
        this.boardCell.row++;
        break;
    }
    this.direction = this.newDirection;
    this.index = this.direction;
    if (this.checkCollision()) {
      return false; // Collision detected, do not continue
    }
    // Update the position of the snake element (subclass)
    super.update();
    //Check if the snake head is on a bait cell
    const boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    if(boardCellInfo.infoType === EBoardCellInfoType.Bait) {
      baitIsEaten();
    }else{
      /* Decrease the score if the snake head is not on a bait cell */
    }
    boardCellInfo.infoType = EBoardCellInfoType.Snake; // Set the cell to Snake
    return true; // No collision, continue
  }

  checkCollision() {
    let collision = this.boardCell.row < 0 || this.boardCell.row >= GameProps.gameBoard.rows || this.boardCell.col < 0 || this.boardCell.col >= GameProps.gameBoard.cols;
    if(!collision) {
      const boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
      collision = boardCellInfo.infoType === EBoardCellInfoType.Snake;
    }
    return collision; // Collision detected
  }
}

class TSnakeBody extends TSnakePart {
  constructor(aSpriteCanvas, aBoardCell ) {
    super(aSpriteCanvas, SheetData.Body, aBoardCell);
    this.index = ESpriteIndex.RL;  
    }
    getCell() {
      return this.boardCell;
    }
    
  

  update(){
    let spriteIndex = ESpriteIndex.RL;
    let boardCellInfo;
    switch (this.direction) {
      case EDirection.Up:
        this.boardCell.row--;
        boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
        if (boardCellInfo.direction !== this.direction) {
          switch (boardCellInfo.direction) {
            case EDirection.Left:
              spriteIndex = ESpriteIndex.UL;
              break;
            case EDirection.Right:
              spriteIndex = ESpriteIndex.UR;
              break;
          }
        } else {
          spriteIndex = ESpriteIndex.UD;
        }
        break;
      case EDirection.Right:
        this.boardCell.col++;
        boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
        if (boardCellInfo.direction !== this.direction) {
          switch (boardCellInfo.direction) {
            case EDirection.Up:
              spriteIndex = ESpriteIndex.RU;
              break;
            case EDirection.Down:
              spriteIndex = ESpriteIndex.RD;
              break;
          }
        } else {
          spriteIndex = ESpriteIndex.RL;
        }
        break;
      case EDirection.Left:
        this.boardCell.col--;
        boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
        if (boardCellInfo.direction !== this.direction) {
          switch (boardCellInfo.direction) {
            case EDirection.Up:
              spriteIndex = ESpriteIndex.LU;
              break;
            case EDirection.Down:
              spriteIndex = ESpriteIndex.LD;
              break;
          }
        } else {
          spriteIndex = ESpriteIndex.RL;
        }
        break;
      case EDirection.Down:
        this.boardCell.row++;
        boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
        if (boardCellInfo.direction !== this.direction) {
          switch (boardCellInfo.direction) {
            case EDirection.Left:
              spriteIndex = ESpriteIndex.DR;
              break;
            case EDirection.Right:
              spriteIndex = ESpriteIndex.DL;
              break;
          }
        } else {
          spriteIndex = ESpriteIndex.UD;
        }
        break;
    }
    this.direction = boardCellInfo.direction;
    this.index = spriteIndex;
    super.update();
  }

  clone(){
    const newBody = new TSnakeBody(this.spcvs, new TBoardCell(this.boardCell.col, this.boardCell.row));
    newBody.index = this.index;
    newBody.direction = this.direction;
    return newBody;
  }
} // class TSnakeBody


class TSnakeTail extends TSnakePart {
  constructor(aSpriteCanvas,aBoardCell) {
    super(aSpriteCanvas, SheetData.Tail, aBoardCell);
  }
  getCell() {
    return this.boardCell;
  }

  update(){
    let boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    boardCellInfo.infoType = EBoardCellInfoType.Empty; // Clear the cell, before moving the tail
  
    switch (this.direction) {
      case EDirection.Up:
        this.boardCell.row--;
        break;
      case EDirection.Right:
        this.boardCell.col++;
        break;
      case EDirection.Left:
        this.boardCell.col--;
        break;
      case EDirection.Down:
        this.boardCell.row++;
        break;
    }
    boardCellInfo = GameProps.gameBoard.getCell(this.boardCell.row, this.boardCell.col);
    this.direction = boardCellInfo.direction; // Update the direction of the tail based on the new cell
    this.index = this.direction;
    super.update();
  }

} // class TSnakeTail


export class TSnake {
  #isDead = false;
  #head = null;
  #body = null;
  #tail = null;
  #shouldGrow = false;
  constructor(aSpriteCanvas, aBoardCell) {
    this.#head = new TSnakeHead(aSpriteCanvas, aBoardCell);
    let col = aBoardCell.col - 1;
    const part1 = [new TSnakeBody(aSpriteCanvas, new TBoardCell(col, aBoardCell.row))];
    col--;
    const part2 = [new TSnakeBody(aSpriteCanvas, new TBoardCell(col, aBoardCell.row))];
    col--;
    this.#body = [...part1, ...part2];
    this.#tail = new TSnakeTail(aSpriteCanvas, new TBoardCell(col, aBoardCell.row));
  } // constructor

  draw() {
    this.#head.draw();
    for (let i = 0; i < this.#body.length; i++) {
      this.#body[i].draw();
    }
    this.#tail.draw();
  } // draw

  //Returns true if the snake is alive
  update() {
    if (this.#isDead) return false;

    if (this.#head.update()) {
      // Oppdater kroppen
      for (let i = 0; i < this.#body.length; i++) {
        this.#body[i].update();
      }

      if (this.#shouldGrow) {
        // Legg til en ny kroppsdelscelle på halen sin posisjon
        const tailPos = this.#tail.getCell();
        const newPart = new TSnakeBody(this.#tail.spcvs, new TBoardCell(tailPos.col, tailPos.row));
        newPart.direction = this.#tail.direction;
        newPart.index = this.#tail.index;
        this.#body.push(newPart);

        // Sett flagget til false for å indikere at veksten er fullført
        this.#shouldGrow = false;

        // Ikke flytt halen denne runden
      } else {
        // Flytt halen bare hvis vi ikke vokser
        this.#tail.update();
      }
    } else {
      this.#isDead = true;
      return false;
    }

    return true;
  } 
  // Add a new body part to the snake
  grow() {
    this.#shouldGrow = true;
    // Create a new body part at the tail position. Klarer ikke å flytte på
  } 
  
  setDirection(aDirection) {
    this.#head.setDirection(aDirection);
  } // setDirection
}