import React from 'react';
import logo from './logo.svg';
import './component/button.scss'
import './App.scss'
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();

  return (
      <div className='container'>
          <ul className='btnList'>
          <li className='btn' onClick={() => navigate('/weaponlist')}></li>
          <li className='btn' onClick={() => navigate('/head')}></li>
          <li className='btn' onClick={() => navigate('/armor')}></li>
          <li className='btn' onClick={() => navigate('/shoes')}></li>
          </ul>
      </div>
 
  );
}

export default App;
// 
//
//
//
