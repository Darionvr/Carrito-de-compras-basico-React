import React, { createContext } from 'react'
import { useState } from 'react'
import data from '../data.json'

export const CartContext = createContext()


const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [menu, setMenu] = useState(data)



  return (
    <CartContext.Provider value={{ cart, setCart, menu, setMenu}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider