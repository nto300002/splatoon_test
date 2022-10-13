import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Header.scss'
import HeaderMenu from './HeaderMenu';
import './menu.scss'

const Header = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClickOpenMenu = () => {
    setIsOpenMenu(true)
  }
  const handleClickCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className='header'>
      <ul className='headerList'>
        <li className='headerTitle' onClick={() => navigate('/')}>
          <span>くらべてみなイカ？</span>
        </li>
        {!isOpenMenu  ? 
        <>
          <li className='moduleMenuIcon' onClick={handleClickOpenMenu}>
                <span></span>
                <span></span>
                <span></span>
          </li>
        </>
         : 
        <>
          <li className='moduleMenuIcon' onClick={handleClickCloseMenu}>
            <HeaderMenu />
          </li>
        </>}

      </ul>
    </div>
  )
}

export default Header
