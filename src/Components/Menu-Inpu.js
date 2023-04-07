import React from "react";
// import { FoodData } from "./context";
// import { useContext } from "react";

// const menu = foodData;

const MenuCard = (props) => {
  // console.log(props.foodDatas.id)
  const {foodDatas} = props;
  const {id,discription,imgs,altname,foodnames,vegOrnonveg} = foodDatas ;

  return (
            <React.Fragment key={id}>
            <div className="card-outer"  >
              <div className="card-head" >
                <span className="serial-no-box">{id}</span>
                <span className="food-time-box">{discription}</span>
              </div>
              <div className="card-main">
                <img
                  src={imgs}
                  alt={altname}
                  className="img-box"
                />
                <h2 className="food-name-box">{foodnames}</h2>
                <p className="food-vegOrnon-box">{vegOrnonveg}</p>
                <p className="discription-box">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa
                  odit vel aliquid repellendus voluptate illo harum eaque! Minima
                  repudiandae sint vero natus eos fuga!
                </p>
                <button className="Order-btn">Order</button>
              </div>
            </div> 
          </React.Fragment>
               )

};

export default MenuCard;

