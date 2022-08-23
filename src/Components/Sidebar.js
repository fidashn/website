import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCoins, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li><div  className='icons'><FontAwesomeIcon icon={faHouse} size="3x"/><p>דף הבית</p> </div> </li>
        <li><div  className='icons'><FontAwesomeIcon icon={faCoins} size="3x" /><p>פיננסי</p></div></li>
        <li><div  className='icons'><FontAwesomeIcon icon={faLayerGroup} size="3x" /><p>טכנולוגי</p></div></li>
      </ul>
    </div>
  )
}

export default Sidebar