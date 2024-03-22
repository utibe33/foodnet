import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        setCart(() => JSON.parse(localStorage.getItem("foodnet__cart")) || [])
        setAllUsers(() => JSON.parse(localStorage.getItem("foodnet__users")) || [])

        console.log({allUsers})
    }, [])

    return <GlobalContext.Provider value={{ cart, setCart, currentUser, setCurrentUser,allUsers,setAllUsers }}>
        {children}
    </GlobalContext.Provider>
}