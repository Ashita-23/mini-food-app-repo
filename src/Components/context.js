import { createContext,  useState } from "react";
import { foodData } from "./Food_Data";

export const FoodData = createContext(foodData)
// console.log(FoodData)



export const CounterProvider = (props)=>{
    
    const [foodData , setFoodData] = useState( FoodData )

    return(
        <>
            <FoodData.Provider value={ {foodData,setFoodData}}>{props.children}</FoodData.Provider>
        </>
    )
} 


