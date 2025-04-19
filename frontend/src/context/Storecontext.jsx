import { createContext, use, useEffect } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null)

const StoreContextProvider = () => {

    const [cartItems, setCartItems] = useState({});

    const addTocart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } 
        else{
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addTocart,
        removeFromCart,
    }
    return(
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider> 
    )
}

export default StoreContextProvider