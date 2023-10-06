import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

  return (
    <div className='tarjetas' key={productos.id}>
      {
        productos.map((p) => {

          return (

            <Item producto={p} key={p.id} />
          )
        })
      }

    </div>
  )
}

export default ItemList