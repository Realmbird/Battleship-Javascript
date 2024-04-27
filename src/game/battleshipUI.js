import { Player } from "./player";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import circle from '../img/circle-small.png'
const DOMController = (() => {
    let player1, player2, current_turn
    
    function initalsetup() {
        // let real = new Player(true) // real
        // let computer = new Player(false) //computer
        player1 = new Player(true) // real
        player2 = new Player(false) //computer
        current_turn = 1
        
        defaultboard(player1)
        defaultboard(player2)
        load()
    }
    function defaultboard(player) {
        // contains 4(1) boats, 3(2) boats, 2(3) boats, 1(4) boat
        let gameboard = player.gameboard

        // 4(1) boats
        let ship1 = new Ship(1)
        let ship2 = new Ship(1)
        let ship3 = new Ship(1)
        let ship4 = new Ship(1)
        
        gameboard.place([[3,3]], ship1)
        gameboard.place([[7,5]], ship2)
        gameboard.place([[5,6]], ship3)
        gameboard.place([[7,7]], ship4)

        //  3(2) boats
        let ship5 = new Ship(2)
        let ship6 = new Ship(2)
        let ship7 = new Ship(2)

        gameboard.place([[0,6],[0,7]], ship5)
        gameboard.place([[2,1],[3,1]], ship6)
        gameboard.place([[5,2],[6,2]], ship7)
        
        // 2(3) boats
        let ship8 = new Ship(3)
        let ship9 = new Ship(3)
        gameboard.place([[6,0],[7,0],[8,0]], ship8)
        gameboard.place([[9,7],[9,8],[9,9]], ship9)

        // 1(4) boat
        let ship10 = new Ship(4)
        gameboard.place([[3,5],[3,6],[3,7],[3,8]], ship10)
    }
    function load() {
        const p1board = document.querySelector('.player-1 > table')
        const p2board = document.querySelector('.player-2 > table')
        let current_player = current_turn % 2
        if(current_player == 1){
            filltable(p1board, player1)
            filltable(p2board, player2, false)
            // p2
        }else{
            // p1
            filltable(p1board, player1, false)
            filltable(p2board, player2)
        }
    }
    function filltable(board, player, active = true) {
        let  board_data = player.gameboard.board
        let gameboard = player.gameboard
        // creating table
        const table = document.createElement("table")
        table.classList.add("battlefield-table")
        board.innerHTML = ""
        // adding A-J label
        const labelrow = document.createElement('tr')
        labelrow.classList.add("battlefield-row")
        table.append(labelrow)
        // columns
        let collumns = ["", "A", "B", "C", "D", "E", "F","G", "H", "I", "J"]
        collumns.forEach((col) => {
            const label = document.createElement('th')
            label.textContent = col
            label.classList.add("battlefield-cell-content")
            labelrow.append(label)
        })

        // adding board data
        board_data.forEach((row, row_index) => {
            const gamerow = document.createElement('tr')
            gamerow.classList.add("battlefield-row")
            table.append(gamerow)
            // adds row
            const row_label = document.createElement('th')
            row_label.classList.add("battlefield-cell-content")
            row_label.textContent = row_index + 1
            gamerow.append(row_label)
            
            row.forEach((col, col_index) => {
                const gamecell = document.createElement('td')
                gamecell.classList.add("battlefield-cell")
                gamecell.classList.add("battlefield-cell-content")
                gamecell.setAttribute("data-row", row_index)
                gamecell.setAttribute("data-col", col_index)
                
                // might add active player type later using real as substitute
                if(col instanceof Ship){
                    gamecell.classList.add("battlefield-ship")
                    // if ship there
                }else {
                    if(col == "."){
                        // const img = document.createElement('img')
                        // img.src = circle
                        // img.classList.add("cover")
                        // gamecell.append(img)
                        gamecell.innerHTML = '<span class="dot"></span>'
                    }else {
                        gamecell.textContent = col
                    }
                }
                gamerow.append(gamecell)
            })
            
        })
        if (active){
            board.classList.remove("transparent")
            table.addEventListener("click", () => {
                const target = event.target
                // when clicking on cell
                if(target.matches(".battlefield-cell")){
                    const row = target.dataset.row
                    const col = target.dataset.col
                    // if only goes next turn and loads if point is valid not x or .
                    if(gameboard.isvalid([row,col])){
                        // correctly updates board with x or .
                        gameboard.recieveattack([row,col])
                        current_turn++
                        load()    
                    }
                    // console.log(current_turn)
                }
            })
        }else{
            board.classList.add("transparent")
        }
        
        board.append(table)
    }
    return {initalsetup}
})()
DOMController.initalsetup()