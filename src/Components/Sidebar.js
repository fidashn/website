import React from 'react';
import {BsStack} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import {BiCoinStack} from 'react-icons/bi';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li className='icon'><FaHome  /></li>
        <li className='icon'><BsStack /></li>
        <li className='icon'><BiCoinStack /></li>
      </ul>
    </div>
  )
}

export default Sidebar