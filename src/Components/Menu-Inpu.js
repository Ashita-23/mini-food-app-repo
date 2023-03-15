import React from "react";

const MenuCard = ({ menuData }) => {


   
  return (
 
       <>
       { menuData.map((value)=>{
        return(
            <>
            
            <div className="card-outer" key={value.keys}>
              <div className="card-head">
                <span className="serial-no-box">{value.id}</span>
                <span className="food-time-box">{value.discription}</span>
              </div>
              <div className="card-main">
                <img
                  src={value.imgs}
                  alt={value.altname}
                  className="img-box"
                />
                <h2 className="food-name-box">{value.foodnames}</h2>
                <p className="food-vegOrnon-box">{value.vegOrnonveg}</p>
                <p className="discription-box">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa
                  odit vel aliquid repellendus voluptate illo harum eaque! Minima
                  repudiandae sint vero natus eos fuga!
                </p>
                <button className="Order-btn">Order</button>
              </div>
            </div> 
          </>
              
        )
       })}
       </>
 
 
  )
};

export default MenuCard;
