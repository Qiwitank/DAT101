"use strict";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import { gameProps } from "./SimonSays.mjs";

export class TColorButton extends libSprite.TSpriteButton{
    constructor(aSpriteCanvas, aSpriteInfo){
        super(aSpriteCanvas, aSpriteInfo, aSpriteInfo.dst);
    }

    //Vi har noe som heter A.P.I.E = Abstract, Polymorphism, Inheritance, Encapsulation (eksamen)
    //Vi må løse dette med Polymorphism når musa er over smultringen 
    isMouseInside(aPoint){
        let isInside = super.isMouseInside(aPoint);
        //Hvis musa er over, sjekk videre om den er utenfor radius 1 og innenfor radius 2
        if(isInside){
            const dx = aPoint.x - gameProps.GameCenter.x; 
            const dy = aPoint.y - gameProps.GameCenter.y;
            const dist = Math.hypot(dx, dy);
            isInside = (dist >= this.spi.dst.r1) && (dist <= this.spi.dst.r2);
        }
        return isInside;
    
    }

    //Vi må også løse dette med polymorphism, når musa trykkes ned på smultringen
    onMouseDown(){
        this.index = 1;
    }
    onMouseUp(){
        this.index = 0;
        if(gameProps.activeButton === this){
            console.log("Riktig knapp");
        }else{
            console.log("Feil knapp");
        }
    }

    //Vi må også løse dette med polymorphism, når musa trykkes opp på smultringen

}// End of TColorButton