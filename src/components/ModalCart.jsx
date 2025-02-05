import React, { useContext, useState } from 'react'
import { CartContext } from '../context/Context'


const ModalCart = ({closeModal}) => {

    const { cart, setCart } = useContext(CartContext)
    const total = cart.reduce((acumulador, items) => acumulador + (items.count * items.dessert.price), 0)

    return (

        <div className='modal'>
            <div className="modal-content">
                <img className='checkedCart' src="assets/images/icon-order-confirmed.svg" alt="" />
                <p className="confirmed"> Order Confirmed</p>
                <p className="enjoy"> We hope you enjoy your food!</p>
                <div className="cartlist">
                    {cart.map((item =>
                        <div className="details" key={item.dessert.name}>
                            <img className="thumb" src={item.dessert.image.thumbnail} alt="" />
                            <div className="finaldetail">
                                <p className="productname">{item.dessert.name}</p>
                                <p> <span className="units">{item.count}x</span> <span className="unitprice">@${item.dessert.price}</span> </p>
                            </div>
                            <p className="finalprice">${(item.count * item.dessert.price).toFixed(2)}</p>

                        </div>))}
                </div>
                <div className="total">
                    <p>Order Total</p>
                    <p className="totalcost">${total.toFixed(2)}</p>
                    
                </div>
                <button className="confirm" onClick={closeModal}>Start New Order</button>
            </div>
        </div>
    )
}

export default ModalCart