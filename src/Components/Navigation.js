import React from "react"

const Navigation= () => {


    const foodData = [
        {
          id: 1,
          altname: "pan Cake",
          vegOrnonveg: "pure Veg ",
          foodnames: "Pan cake ",
          discription: "breakfast",
          imgs:
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 2,
          altname: "fruit saled",
          vegOrnonveg: "pure Veg ",
          foodnames: "fruit saled ",
          discription: "breakfast",
          imgs:
            "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 3,
          altname: "vegetable saled",
          vegOrnonveg: "pure Veg ",
          foodnames: "vegetable saled ",
          discription: "breakfast",
          imgs:
            "https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 4,
          altname: "garlic bread",
          vegOrnonveg: "pure Veg ",
          foodnames: "garlic bread ",
          discription: "breakfast",
          imgs:
            "https://images.pexels.com/photos/7664397/pexels-photo-7664397.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 5,
          altname: "bolied eggs",
          vegOrnonveg: "Non-Veg ",
          foodnames: "boiled eggs ",
          discription: "breakfast",
          imgs:
            "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 6,
          altname: "pasta",
          vegOrnonveg: "pure Veg ",
          foodnames: "pasta",
          discription: "lunch",
          imgs:
            "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 7,
          altname: "Shushee",
          vegOrnonveg: "Non-Veg ",
          foodnames: "Shushee",
          discription: "Lunch",
          imgs:
            "https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 8,
          altname: "Pitzaa",
          vegOrnonveg: "pure Veg ",
          foodnames: "Pitzaa ",
          discription: "Lunch",
          imgs:
            "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
    
        {
          id: 9,
          altname: "Burgger",
          vegOrnonveg: "pure Veg ",
          foodnames: "Burgger ",
          discription: "Lunch",
          imgs:
            "https://images.pexels.com/photos/2657960/pexels-photo-2657960.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 10,
          altname: "egg curry",
          vegOrnonveg: "Non-Veg ",
          foodnames: "egg curry",
          discription: "Lunch",
          imgs:
            "https://images.pexels.com/photos/4940719/pexels-photo-4940719.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 11,
          altname: "chiken",
          vegOrnonveg: "Non-Veg ",
          foodnames: "chiken",
          discription: "Dinner",
          imgs:
            "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 12,
          altname: "crad",
          vegOrnonveg: "Non-Veg ",
          foodnames: "Crab",
          discription: "Dinner",
          imgs:
            "https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 13,
          altname: "veg-pasta",
          vegOrnonveg: "Veg ",
          foodnames: "veg-pasta",
          discription: "Dinner",
          imgs:
            "https://images.pexels.com/photos/3297363/pexels-photo-3297363.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      
        {
          id: 14,
          altname: "chesszy pitzaa",
          vegOrnonveg: "Veg ",
          foodnames: "chesszy pitzaa",
          discription: "Dinner",
          imgs:
            "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        
        {
          id: 15,
          altname: "prons",
          vegOrnonveg: "Non-Veg ",
          foodnames: "prons",
          discription: "Dinner",
          imgs:
            "https://images.pexels.com/photos/1031780/pexels-photo-1031780.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }
      ]

      const filterItems = (category) =>{
        const updatedList = foodData.filter((curVal) =>{
            return curVal.discription === category
        })
        return updatedList
      }

    return(
        <>
        <nav className="menu-nav">
            <div className="nav-inner">
                <button className="nav-btn" onClick={()=>filterItems("Breakfast")}>Breakfast</button>
                <button className="nav-btn" onClick={()=>filterItems("Lunch")}>Lunch</button>
                <button className="nav-btn" onClick={()=>filterItems("Dinner")}>Dinner</button>
                <button className="nav-btn" onClick={()=>filterItems("All")}>All</button>
               
            </div>
        </nav>
        </>
    )
}

export default Navigation