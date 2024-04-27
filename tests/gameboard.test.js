import { Gameboard } from "../src/game/gameboard";
import {Ship} from "../src/game/ship"
describe("Gameboard", () => {
    test("Sets up board", () => {
        let empty = [[" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "]]
        let gameboard = new Gameboard()
        expect(gameboard.board).toEqual(empty)
    })
    test("Places Ship Properly one space", () => {
        // coordinates, ship
        let coordinates = [[0,0]]
        let ship = new Ship(1)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        expect(gameboard.board).toEqual([[ship, " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "]])
    })
    test("Places Ship Properly multiple spaces", () => {
        // coordinates, ship
        let coordinates = [[0,0],[0,1]]
        let ship = new Ship(1)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        expect(gameboard.board).toEqual([[ship, ship, " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " " , " "]])
    })
    test("Space with ship attacks", () => {
        // coordinates, ship
        let coordinates = [[0,0]]
        let ship = new Ship(1)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)

        let coordinate = [0,0]
        expect(gameboard.recieveattack(coordinate)).toEqual(true)
    })
    test("Space with with no ship shows miss", () => {
        // coordinates, ship
        let gameboard = new Gameboard()

        let coordinate = [0,0]
        expect(gameboard.recieveattack(coordinate)).toEqual(false)
    })
    test("Is sunk gives true without ships", () => {
        // coordinates, ship
        // let coordinates = [[0,0]]
        // let ship = new Ship(1)
        let gameboard = new Gameboard()
        // gameboard.place(coordinates, ship)
        expect(gameboard.isallsunk()).toEqual(true)
    })
    test("Is sunk gives false with ship", () => {
        // coordinates, ship
        let coordinates = [[0,0]]
        let ship = new Ship(1)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        expect(gameboard.isallsunk()).toEqual(false)
    })
    test("Is sunk gives true when ship sinks", () => {
        // coordinates, ship
        let coordinates = [[0,0]]
        let ship = new Ship(1)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        gameboard.recieveattack([0,0])
        expect(gameboard.isallsunk()).toEqual(true)
    })
    test("Is sunk gives false when ship exists", () => {
        // coordinates, ship
        let coordinates = [[0,0],[0,1]]
        let ship = new Ship(2)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        gameboard.recieveattack([0,0])
        expect(gameboard.isallsunk()).toEqual(false)
    })
    test("Is sunk gives true when ships sinks multiple", () => {
        // coordinates, ship
        let coordinates = [[0,0],[0,1]]
        let ship = new Ship(2)
        let gameboard = new Gameboard()
        gameboard.place(coordinates, ship)
        gameboard.recieveattack([0,0])
        gameboard.recieveattack([0,1])
        expect(gameboard.isallsunk()).toEqual(true)
    })
    test("Does not allow attack on missed target", () => {
        let gameboard = new Gameboard()
        expect(gameboard.isvalid([0,0])).toBe(true)
        gameboard.recieveattack([0,0])
        expect(gameboard.isvalid([0,0])).toBe(false)
    })
    test("Does not allow attack on hit target", () => {
        let gameboard = new Gameboard()
        let coordinates = [[0,0],[0,1]]
        let ship = new Ship(2)
        gameboard.place(coordinates, ship)
        expect(gameboard.isvalid([0,0])).toBe(true)
        gameboard.recieveattack([0,0])
        expect(gameboard.isvalid([0,0])).toBe(false)
    })
})