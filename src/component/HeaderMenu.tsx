import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

const HeaderMenu = () => {
  return (
    <div className="hamburger-menu">
    <input type="checkbox" id="menu-btn-check" />
    <div className="menuContent">
        <ul>
            <li className='menuOpen'>
                <span></span>
                <span></span>
                <span></span>
            </li>
            <li>
                <Link to={'/'} style={{ textDecoration: 'none' }}><p>TOP</p></Link>
            </li>
            <li>
                <Link to={'/sellectweapon1'} style={{ textDecoration: 'none' }}><p>ブキ</p></Link>
            </li>
            <li>
               <Link to={'head'} style={{ textDecoration: 'none' }}><p>アタマ</p></Link>
            </li>
            <li>
               <Link to={'armor'} style={{ textDecoration: 'none' }}><p>フク</p></Link>
            </li>
            <li>
               <Link to={'shoes'} style={{ textDecoration: 'none' }}><p>くつ</p></Link>
            </li>
        </ul>
    </div>
</div>
  )
}

export default HeaderMenu
