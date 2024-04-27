import { Player } from "../src/game/player";
describe("Player", () => {
    test("Creates Real Player", () => {
        let player1 = new Player(true)
        expect(player1.real).toBe(true)
    })
    test("Creates Computer Player", () => {
        let player2 = new Player(false)
        expect(player2.real).toBe(false)
    })
    test("Player contain board", () => {
        let player2 = new Player(false)
        expect(player2.board).toEqual([[" ", " ", " ", " ", " ", " ", " ", " ", " " , " "],
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
})