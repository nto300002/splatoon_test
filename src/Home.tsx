import React, { useState } from 'react'
import './component/button.scss'
import './App.scss'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const [isHome, setIsHome] = useState(true);
  // const homeHandler = () => {
  //   setIsHome(false)
  // }

  
  return (
      <div className='container'>
          <ul className='btnList'>
            {/* {isHome &&   */}
            <>
              <li className='btn' onClick={() => navigate('/weaponlist')}></li>
              <li className='btn' onClick={() => navigate('/head')}></li>
              <li className='btn' onClick={() => navigate('/armor')}></li>
              <li className='btn' onClick={() => navigate('/shoes')}></li>
            </>           
            {/* } */}

          </ul>
      </div>

  )
}

export default Home
