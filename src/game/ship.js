class Ship {
     //  {length, hits, sunk}
    constructor(length){
        this.length = length;
        this._hits = 0;
    }

    get hits() {
        return this._hits
        // adds I to hits
    }
    set hits(hits) {
        this._hits = hits
    }
    isSunk() {
        if (this.length <= this.hits){
            // hits reach length 
            return true
        }else {
            return false
        }
    }
    hit() {
        this._hits++
    }
    get ship() {
        return {length: this.length, hits: this.hits, sunk: this.sunk}
    }
}

export {Ship}