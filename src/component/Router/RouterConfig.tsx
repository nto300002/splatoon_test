import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import WeaponList from "../../WeaponList";
import Head from "../../Head";
import Armor from "../../Armor";
import Shoes from "../../Shoes";


export const RouterConfig:React.VFC =() => {
  return (
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="weaponlist" element={<WeaponList />} />
        <Route path="head" element={<Head />} />
        <Route path="armor" element={<Armor />} />
        <Route path="shoes" element={<Shoes />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}
