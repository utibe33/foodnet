import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("foodnet__cart")) || [])
    
    return <GlobalContext.Provider value={{cart,setCart}}>
        {children}
    </GlobalContext.Provider>
}