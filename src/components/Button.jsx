import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/Context'


const CartButton = ({ aumentar, total, disminuir }) => {



    const [buttonOn, setButtonOn] = useState(false)

    const toggleButton = () => {
        if (!total ) {
            aumentar()
            setButtonOn(true)
        }
    }

    useEffect(() => {
        if (total === 0 || total === undefined) {
            setButtonOn(false);
        }
    }, [total]);
    
    return (

        <>
            {buttonOn ? (
                <button className='counter'>

                    <svg className="decrement" onClick={disminuir} xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                        <path  d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                    <p className="quantity"> {total}</p>
                    <svg className="increment" onClick={aumentar} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                    </svg>


                </button>) : (

                <button className='addtocart' onClick={() => toggleButton()}>

                    <img src="assets/images/icon-add-to-cart.svg" alt="Icono añadir al carrito" />
                    Add to Cart
                </button>)}


        </>


    )
}

export default CartButton