import { Gameboard } from "./gameboard";
class Player {
    constructor(real){
        this._real = real;
        this._gameboard = new Gameboard;
    }
    get real() {
        return this._real
    }
    get board() {
        return this._gameboard.board
    }
    get gameboard() {
        return this._gameboard
    }
}
export {Player}