import React from 'react'

import './PhaserGameCanvas.css';
import HeaderMenu from './HeaderMenu';
import Navbar from './Navbar';

import PhaserGame3 from './PhaserGame3';
import GAMEPY from './GAMEPY';




function PhaserGameCanvas() {
  return (
    <div className='GameKHI'>
        <HeaderMenu/>
        <Navbar/>
        {/* <PhaserGame/> */}
        {/* <PhaserGame2/> */}
        <div className='GameKHITittle'>
            <h1>GAME SPIN RADIO KHI</h1>
        </div>
        <div className='GameKHI1'>
          <PhaserGame3/>
          <GAMEPY/>
        </div>
    </div>
  )
}

export default PhaserGameCanvas
