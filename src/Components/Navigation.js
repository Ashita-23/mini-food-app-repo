import React, { useState } from "react";
import MenuCards from "./MenuCards";
import { foodData } from "./Food_Data";

const Navigation = () => {
//   console.log(foodData);

  const [itemList, setNewItemList] = useState(foodData);

  const filterItems = ( inputValue) =>{
    const updatedData = foodData.filter((values)=> inputValue===values.discription)

    setNewItemList(updatedData)
    // console.log( discriptions)
  }

//   const  filterItems = () ;
//   console.log(itemList)

  return (
    <>
      <nav className="menu-nav">
        <div className="nav-inner">
          <button className="nav-btn" onClick={ ()=>
        filterItems("breakfast") }>
            Breakfast
          </button>
          <button className="nav-btn" onClick={  ()=> filterItems("Lunch")}>
            Lunch
          </button>
          <button className="nav-btn" onClick={ ()=>  filterItems("Dinner")}>
            Dinner
          </button>
          <button className="nav-btn" onClick={  ()=>  setNewItemList(foodData)}>
         Refresh
          </button>
        </div>
      </nav>
      <div className="display-menu-items">
        {itemList.map((values) => {
            return(  <><MenuCards  key={values.keys} foodDatas={values} /></>
        )})}
      </div>
    </>
    
  );
};

export default Navigation;
