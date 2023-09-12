import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const botonSuma=()=>{
        if(contador<10){
            setContador(contador +1)
        }
    }
    const botonResta=()=>{
        if(contador>0){
            setContador(contador -1)
        }
    }
    const onAdd=()=> {
        alert(contador)
    }
 
  return (
        <div className='contador'>
            <p>Elija la cantidad de unidades : {contador}</p>
            <button onClick={botonSuma}>+</button>
            <button onClick={botonResta}>-</button>
            <button onClick={onAdd}>Ver cantidad</button>
        </div>
    )
}

export default ItemCount