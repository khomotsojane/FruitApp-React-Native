import React, { createContext, useState } from "react";

const FoodContext = createContext();

const FoodProvider = ({ children }) => {
    const [foodItems, Setfooditems] = useState([]);
    return (
        <FoodContext.Provider value={{
            foodItems, Setfooditems
        }}>
            {children}
        </FoodContext.Provider>
    );
}



export { FoodContext, FoodProvider };