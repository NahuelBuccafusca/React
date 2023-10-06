import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext)
    return (
        <div className='widget'>
            <p>{totalUnidades()}</p>
            <span className="material-symbols-outlined">
                add_shopping_cart
            </span>


        </div>
    )
}

export default CartWidget