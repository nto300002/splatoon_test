import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import WeaponList from "../../WeaponList";
import Head from "../../Head";
import Armor from "../../Armor";
import Shoes from "../../Shoes";
import Home from "../../Home";
import SellectWeapon1 from "../../SellectWeapon2";
import SellectWeapon2 from "../../SellectWeapon1";


export const RouterConfig:React.VFC =() => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="weaponlist" element={<WeaponList />} />
          <Route path="head" element={<Head />} />
          <Route path="armor" element={<Armor />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="sellectweapon1" element={<SellectWeapon1 />} />
          <Route path="sellectweapon2" element={<SellectWeapon2 />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}
