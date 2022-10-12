import './component/button.scss'
import './App.scss'
import Home from './Home';
import { useState } from 'react';
// import { Route, Routes, useLocation } from 'react-router';
import WeaponList from './WeaponList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './Head';
import Armor from './Armor';
import Shoes from './Shoes';
import SellectWeapon1 from './SellectWeapon1';
import SellectWeapon2 from './SellectWeapon2';


function App() {
  return (
    <div className='container'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="head" element={<Head />} />
        <Route path="armor" element={<Armor />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="sellectweapon1" element={<SellectWeapon1 />} />
          <Route path="sellectweapon2" element={<SellectWeapon2 />} />
      </Routes>
    </div>
  );
}

export default App;


