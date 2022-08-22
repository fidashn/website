import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCoins, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li><div><FontAwesomeIcon icon={faHouse} size="3x" className='icons'/><p>דף הבית</p> </div> </li>
        <li><div><FontAwesomeIcon icon={faCoins} size="3x" className='icons'/><p>פיננסי</p></div></li>
        <li><div><FontAwesomeIcon icon={faLayerGroup} size="3x" className='icons'/><p>טכנולוגי</p></div></li>
      </ul>
    </div>
  )
}

export default Sidebar