import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const onAdd=()=> {
        alert(contador)
    }
  return (
        <div className='contador'>
            <p>Elija la cantidad de unidades : {contador}</p>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={onAdd}>Ver cantidad</button>
        </div>
    )
}

export default ItemCount