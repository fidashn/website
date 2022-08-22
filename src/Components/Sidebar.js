import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCoins, faLayerGroup} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li><FontAwesomeIcon icon={faHouse} />דף הבית</li>
        <li><FontAwesomeIcon icon={faCoins}  />פיננסי</li>
        <li><FontAwesomeIcon icon={faLayerGroup}  />טכנולוגי</li>
      </ul>
    </div>
  )
}

export default Sidebar