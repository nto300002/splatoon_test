import React, { useState } from 'react'
import './component/button.scss'
import './component/bukichi.scss'
import './component/hukidashi.scss'
import './App.scss'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClickWeaponList = () => {
    navigate('/sellectweapon1')
  }
  const handleClickHead = () => {
    navigate('/head')
  }
  const handleClickArmor = () => {
    navigate('/armor')
  }
  const handleClickShoes = () => {
    navigate('/shoes')
  }

  
  return (
    <>
      <div className='container'>
            <ul className='btnList'>
                  <li className='btn' onClick={handleClickWeaponList}></li>
                  <li className='btn' onClick={handleClickHead}></li>
                  <li className='btn' onClick={handleClickArmor}></li>
                  <li className='btn' onClick={handleClickShoes}></li>       
            </ul>
            <div className='hukidashi'>
              <p>キミの知りたい<br /><span className='textEmphasis'>アイテム</span>を教えて<br />ほしいデシ！</p>
            </div>           
            <p className='bukichi'></p>  
      </div>
    </>
  )
}

export default Home
