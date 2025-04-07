"use strict";
import libSprite_v2 from "../../../DAT101/common/libs/libSprite_v2.mjs";
import lib2d_v2 from "../../../DAT101/common/libs/lib2d_v2.mjs";
import { SpriteInfoList, GameProps } from "./BrickBreaker.mjs";

export class TBrick extends libSprite_v2.TSprite {
  constructor(spcvs, aSpriteInfoList, pos) {
    super(spcvs, aSpriteInfoList, pos, lib2d_v2.TRectangle);
  }
}

export function drawBricks(spcvs) {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const pos = new lib2d_v2.TPoint(75 + i * 150, 150 + j * 50);
      GameProps.bricks.push(new TBrick(spcvs, SpriteInfoList.BrickPurple, pos));
    }
  }
}
