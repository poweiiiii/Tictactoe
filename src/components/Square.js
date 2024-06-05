import React from 'react'
import '../components/Tictactoe.css'




function Square({value, onsqureclick}){
  return (
    <div>
      {/* Every grids are buttons ,  onsqureclick can correspond relatively's grids , transform to Board */}
      <button className='squares' onClick={onsqureclick}>{value}</button>
    </div>
  )
}

export default Square
