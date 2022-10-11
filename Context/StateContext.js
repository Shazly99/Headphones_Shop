import React ,{createContext, useContext,useEffect,useState} from 'react';
import toast from 'react-hot-toast';


const Context =createContext();
export const StateContext=({children})=>{
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const [totalQuntities, setTotalQuntities] = useState()
    const [qty, setQty] = useState(1)

    const incQty=()=>{
        setQty((prevQty)=>prevQty+1)
    }
    const decQty=()=>{
        setQty((prevQty)=>{
            if(prevQty - 1 <0) return 1
              return prevQty-1
        })
    }
    return(
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuntities,
                qty,
                decQty,
                incQty 
            }}
        >
              
        </Context.Provider>
    )
}