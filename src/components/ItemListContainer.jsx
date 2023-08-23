import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2>{greeting}</h2>
      <ItemCount />
    </>
  )
}

export default ItemListContainer