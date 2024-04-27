import { Ship } from "./ship"
class Gameboard {
    constructor() {
        // 10×10
        this._board = [[" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "]] 
    }
    get board() {
        return this._board
    }
    // places ship at coordinates
    place(coordinates, ship){
        // will be a list of coordinates
        coordinates.forEach((coordinate) => {
            // [row, col]
            let row = coordinate[0]
            let col = coordinate[1]
            this._board[row][col] = ship
        })
        
    }
    isempty(coordinate) {
        let row = coordinate[0]
        let col = coordinate[1]
        if(this._board[row][col] != " "){
            // when not empty
            return false
        }else {
            // when empty
            return true
        } 
    }
    recieveattack(coordinate) {
        let row = coordinate[0]
        let col = coordinate[1]
        let board = this._board
        if(this.isempty(coordinate)){
            // when " "
            board[row][col] = "."
            return false
        }else {
            try{
                // when not empty prob has ship
                board[row][col].hit()
                board[row][col] = "x"
                return true
            }catch{
                return false
            }
        } 
    }
    isvalid(coordinate) {
        let row = coordinate[0]
        let col = coordinate[1]
        let board = this._board
        let point = board[row][col]
        if(point == "." || point == "x"){
            // if filled return false
            return false
        }else{
            // if not return true
            return true
        }
    }
    get allships(){
        // board used to acces this._board simply renames it
        let board = this._board
        let ships = []
        board.forEach((element, row) => {
            element.forEach((data, col) => {
                if(data instanceof Ship){
                    let coordinate = [row, col]
                    ships.push(coordinate)
                }
            })
        })
        return ships
        // returns result like [] or  [[0,0]]
    }
    isallsunk(){
        let coordinates = this.allships
        if(coordinates.length  == 0){
            return true
        }else{ 
            let isallsunk = true
            coordinates.forEach((coordinate) => {
                // isSunk() true if sunk
                let row = coordinate[0]
                let col = coordinate[1]
                let ship = this._board[row][col]
                if(!(ship.isSunk())){
                    // when ship didn't sink
                    isallsunk = false
                    // sets since if return in here doesn't return for isallsunk()
                }
            })
            return isallsunk
        }
    }
    
}

export {Gameboard}