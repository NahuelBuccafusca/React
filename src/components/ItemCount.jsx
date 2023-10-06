import React from 'react'
import { useState } from 'react'



const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }
  const decrement = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <div className='contador'>
      <p>Elija la cantidad de unidades : {quantity}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount