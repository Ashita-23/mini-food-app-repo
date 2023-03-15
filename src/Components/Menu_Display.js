import React, { useState } from "react";
import { foodData } from "./Food_Data";
import MenuCard from "./Menu-Inpu";

const DisplayMenu = () => {
 


  const [menuData, setNewMenuData] = useState(foodData);

  return (
    <>
    <div className="display-menu-items">      <MenuCard menuData ={menuData} /> </div>

    </>
  );
};

export default DisplayMenu;
