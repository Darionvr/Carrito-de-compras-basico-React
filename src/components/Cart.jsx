import React, { useContext, useState } from 'react'
import { CartContext } from '../context/Context'
import ModalCart from './ModalCart'


const Cart = () => {


  const { cart, setCart } = useContext(CartContext)

  const total = cart.reduce((acumulador, items) => acumulador + (items.count * items.dessert.price), 0)
  const totalItems = cart.reduce((acumulador, items) => acumulador + (items.count), 0)
  const [modalOn, setModalOn] = useState(false)
  
  const removeDessert = (dessert) => {
    const newDessert = [...cart];
    const index = newDessert.findIndex(item => item.dessert.name === dessert.name);
    newDessert.splice(index, 1)
    setCart(newDessert);
}

const cleanCart = () => {
  setCart([])
  setModalOn(false)

}


  return (

    <aside>

      {total > 1 ? (
        <>
          <p className="yourcart">Your Cart ( {totalItems} )</p>
          <div className="cartlist">
            {cart.map((dessert =>

              <div className="details" key={dessert.dessert.category}>
                
                <div>
                  <p className="productname"> {dessert.dessert.name}</p>
                  <p> <span className="units">{dessert.count}x</span> <span className="unitprice">${dessert.dessert.price}</span> <span className="finalprice">${dessert.dessert.price * dessert.count}</span>
                  </p>
                </div>
                <img className='delete' onClick={() => removeDessert(dessert)} src="assets/images/icon-remove-item.svg" alt="" />
              </div>))}

          </div>
          <div className="total">
            <p>Order Total</p>
            <p className="totalcost">${total}</p>
          </div>
          <p className="neutral"><img src="assets/images/icon-carbon-neutral.svg" alt="" />This is a <strong>carbon neutral</strong> delivery</p>
          <button className="confirm" onClick={() => setModalOn(true)}>Confirm Order</button>
          {modalOn && <ModalCart closeModal={() => cleanCart()}/> }
        </>
      ) :

        <div className="order">
          <p className="yourcart">Your Cart (0)</p>
          <object className="emptyimg" data="assets/images/illustration-empty-cart.svg" type="image/svg+xml"></object>
         
          <p className="emptymessage">Your added items will appear here</p>
        </div>

      }



    </aside>

  )
}

export default Cart