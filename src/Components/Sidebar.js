import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCoins, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li><div><FontAwesomeIcon icon={faHouse} size="3x"/> דף הבית </div> </li>
        <li><div><FontAwesomeIcon icon={faCoins} size="3x" />פיננסי</div></li>
        <li><div><FontAwesomeIcon icon={faLayerGroup} size="3x" />טכנולוגי</div></li>
      </ul>
    </div>
  )
}

export default Sidebar