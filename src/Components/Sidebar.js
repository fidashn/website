import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCoins, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li><div><FontAwesomeIcon icon={faHouse} size="3x" className='icons'/> דף הבית </div> </li>
        <li><div><FontAwesomeIcon icon={faCoins} size="3x" className='icons'/>פיננסי</div></li>
        <li><div><FontAwesomeIcon icon={faLayerGroup} size="3x" className='icons'/>טכנולוגי</div></li>
      </ul>
    </div>
  )
}

export default Sidebar