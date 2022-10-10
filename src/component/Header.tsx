import React from 'react'
import { useNavigate } from "react-router-dom";
import './Header.scss'
import './menu.scss'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <ul className='headerList'>
        <li className='headerTitle' onClick={() => navigate('/')}>
          くらべてみなイカ？
        </li>
        <li className='moduleMenuIcon'>
              <span></span>
              <span></span>
              <span></span>
        </li>
      </ul>
    </div>
  )
}

export default Header
