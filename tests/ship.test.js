import {Ship} from '../src/game/ship.js'
describe("Ship", () => {
    it("Returns Ship hits set 0", () => {
        // ship will include length,  number or times hit, and sunk
        //  {length, hits, sunk}
        let battle1 = new Ship(7)
        // inital hits 0
        expect(battle1.hits).toBe(0)
    })
    it("hit increases hits", () => {
        // ship will include length,  number or times hit, and sunk
        //  {length, hits, sunk}
        let battle1 = new Ship(7)
        battle1.hit()
        // hit increases hit by 1
        expect(battle1.hits).toBe(1)
    })
    it("is sunk works when length > hits", () => {
        // ship will include length,  number or times hit, and sunk
        //  {length, hits, sunk}
        let battle1 = new Ship(1)
        expect(battle1.isSunk()).toBe(false)
    })
    it("is sunk works when length = hits", () => {
        // ship will include length,  number or times hit, and sunk
        //  {length, hits, sunk}
        let battle1 = new Ship(1)
        battle1.hit()
        expect(battle1.isSunk()).toBe(true)
    })
    it("is sunk works when length < hits", () => {
        // ship will include length,  number or times hit, and sunk
        //  {length, hits, sunk}
        let battle1 = new Ship(1)
        battle1.hit()
        battle1.hit()
        expect(battle1.isSunk()).toBe(true)
    })
})