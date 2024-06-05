import React from 'react'
import { useState } from 'react'
import '../components/Tictactoe.css'
import Board from './Board'






function Tictactoe() {
    //history 存儲了遊戲中每一步的狀態（例如棋盤狀態）的數組
    const [history , setHistory] = useState([Array(9).fill(null)])
    //用來更新當前的遊戲狀態或移動步驟。
    const [currentmove , setCurrentmove] = useState(0);
    //原本history is null , currentsquare 用來 把 history 更改為currentmove
    const currentsquare = history[currentmove]  ;
    //currentmove : What  is current player
    const xIsnext = currentmove % 2 === 0

    const handleplay = (nextsquares) => {
        //[...array] 是展開運算符，用來展開數組 array 的所有元素到一個新的數組中。這樣可以創建一個新的數組來避免直接修改原來的 history 數組。
        //這行程式碼從 history 數組中複製出一個新數組，包含從索引 0 到 currentmove（包括 currentmove）的所有元素。
        //這樣的操作通常用於在時間旅行應用中（例如遊戲中的歷史記錄），以便添加新的狀態而不會影響之前的歷史記錄。
        const nexthistory = [...history.slice(0 , currentmove+1) , nextsquares]
        setHistory(nexthistory)
        setCurrentmove(nexthistory.length - 1)
    }


    //Click to every move records 
    const jumpto = (nextmove) => {
        //nextMove 是一個變量，代表下一步的移動或遊戲狀態。
        setCurrentmove(nextmove)
    }
    //map : To show every steps
    const moves = history.map((square ,move) => {
        let desciption 
        if (move > 0 ){

            desciption = 'Go to move ' + move
        }
        else{
            desciption = 'Go to game start'
        }
        return (
            <li key={move}>
            <button onClick={() => jumpto(move)}>{desciption}</button>
          </li>
        )
    })

  return (
    <div className='game'>
        <div className='game_board'>
            <Board onplay={handleplay} square={currentsquare} xIsnext={xIsnext}></Board>
        </div>
        <div className='game_info'>
            <p>Game History</p>
            <ol>{moves}</ol>
            
        </div>
      
    </div>
  )
}

export default Tictactoe
