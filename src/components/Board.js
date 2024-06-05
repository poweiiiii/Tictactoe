import React from 'react'
import Square from './Square'
import '../components/Tictactoe.css'






function Board  ({xIsnext , onplay, square}) {
    const handleclick = (i) => {
      //If there has winner or fill the grids but no winner , game is over 
      if (calculatorwinner(square) || square[i]){
        return;
      };
     // 下一步棋盤的狀態，一個表示棋盤的新數組。
        const nextsquares = square.slice()
       nextsquares[i] = xIsnext ? 'X' : 'O'
        onplay(nextsquares)
      }

      const calculatorwinner = (square) => {
        const winnerlines  = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ]
        for (let i = 0 ; i < winnerlines.length ; i++){
          const [a , b , c] = winnerlines[i]
          //If there are same player in the winnerlines ,that it's winner 
          if (square[a] && square[a] === square[b] && square[a] === square[c]){
            //return the winner 
            return square[a]
          }
        }
        return null;
      }
      const winner = calculatorwinner(square)
      let status
      if (winner){
        status = 'The winner is ' + winner
      }
      else{
        status = 'The next player is ' + (xIsnext ? 'X' : 'O')
      }

  return (
   <div className='board'>
    <div className='status'>{status}</div>
        <div className='board_row'>
          <Square value={square[0]} onsqureclick={() => handleclick(0)}></Square>
          <Square value={square[1]} onsqureclick={() => handleclick(1)}></Square>
          <Square value={square[2]} onsqureclick={() => handleclick(2)}></Square>
        </div>
        <div className='board_row'>
          <Square value={square[3]} onsqureclick={() => handleclick(3)}></Square>
          <Square value={square[4]} onsqureclick={() => handleclick(4)}></Square>
          <Square value={square[5]} onsqureclick={() => handleclick(5)}> </Square>
        </div>
        <div className='board_row'>
          <Square value={square[6]} onsqureclick={() => handleclick(6)}></Square>
          <Square value={square[7]} onsqureclick={() => handleclick(7)}></Square>
          <Square value={square[8]} onsqureclick={() => handleclick(8)}></Square>
        </div>
   </div>
  )
}

export default Board
