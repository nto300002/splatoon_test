import React from 'react'
import './component/button.scss'
import '../src/component/hukidashi.scss'
import '../src/component/weapon/listitemsLeft.scss'
import { Link, useNavigate } from "react-router-dom";
import { listitems_category } from './component/weapon/listitems';


const SellectWeapon1 = () => {
  const navigate = useNavigate();
  const handleClickSellectWeapon1 = () => {
    navigate('/sellectweapon1')
  }
  const handleClickSellectWeapon2 = () => {
    navigate('/sellectweapon2')
  }
  return (
    <div>
      <ul className='btnList'>
        <li className='btn' onClick={handleClickSellectWeapon1}></li>
        <li className='btn' onClick={handleClickSellectWeapon2}></li>    
      </ul>
      <br />
      {listitems_category.map((listitem_category) => {
        return(
          <ul className='listitemsUlLeft' key={listitem_category.id}>          
            <Link to={listitem_category.url} style={{ textDecoration: 'none' }}><li className='listitemsLiLeft'>
                <span className='listitemsImgLeft'></span>
                  <span className='listitemsTextLeft'>
                    {listitem_category.title}
                  </span>
               </li>
            </Link>
          </ul>
        )
      })}
    </div>
  )
}

export default SellectWeapon1
