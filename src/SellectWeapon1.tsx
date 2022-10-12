import React from 'react'
import './component/button.scss'
import '../src/component/hukidashi.scss'
import '../src/component/weapon/listitems.scss'
import { useNavigate } from "react-router-dom";

const listitems =  [
		{
			id: 1,
			title: 'チャージャー'
		},{
			id: 2,
			title: 'ブラスター'
		},{
			id: 3,
			title: 'ローラー'
		},{
			id: 4,
			title: 'スロッシャー'
		},{
			id: 5,
			title: 'スピナー'
		},{
			id: 6,
			title: 'ローラー'
		},{
			id: 7,
			title: 'マニューバー'
		},{
			id: 8,
			title: 'シェルター'
		},{
			id: 9,
			title: 'ワイパー'
		},{
			id: 10,
			title: 'ブラスター'
		},{
			id: 11,
			title: 'フデ'
		},{
			id: 12,
			title: 'リールガン'
		},{
			id: 13,
			title: 'シューター'
		}
	]


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
      {listitems.map((listitem) => {
        return(
          <ul className='listitemsUl' key={listitem.id}>
            <li className='listitemsLi'>
              <span className='listitemsImg'></span>
                <span className='listitemsText'>{listitem.title}</span>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default SellectWeapon1
